'use strict';

const axios = require('axios');

/**
 * Lifecycle callbacks for the `home` content type.
 * This file automatically processes Cloudinary image URLs to extract metadata.
 */

const extractPublicIdFromUrl = (url) => {
  // Extract public_id from Cloudinary URL if not provided
  // Example URL: https://res.cloudinary.com/cloud-name/image/upload/v1234567890/folder/image.jpg
  if (!url || !url.includes('cloudinary.com')) return null;
  
  try {
    const urlParts = url.split('/');
    const uploadIndex = urlParts.indexOf('upload');
    if (uploadIndex === -1 || uploadIndex + 2 >= urlParts.length) return null;
    
    // Skip the version part (v1234567890) and get everything after until file extension
    const publicIdWithExt = urlParts.slice(uploadIndex + 2).join('/');
    // Remove file extension if present
    return publicIdWithExt.split('.')[0];
  } catch (error) {
    console.error('Error extracting public_id from URL:', error);
    return null;
  }
};

const processCloudinaryImages = async (data, cloudName, apiKey, apiSecret) => {
  // Process all Cloudinary images in the data recursively
  if (!data) return;
  
  // Handle arrays (including dynamic zones)
  if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      await processCloudinaryImages(data[i], cloudName, apiKey, apiSecret);
    }
    return;
  }
  
  // Handle objects
  if (typeof data === 'object') {
    for (const key in data) {
      // Check if this is a Cloudinary image component
      if (data[key] && 
          typeof data[key] === 'object' && 
          data[key].__component === 'elements.cloudinary-image' &&
          data[key].url) {
        
        // Extract public_id if not provided
        if (!data[key].public_id) {
          data[key].public_id = extractPublicIdFromUrl(data[key].url);
        }
        
        // If we have a public_id, fetch metadata from Cloudinary
        if (data[key].public_id && (!data[key].width || !data[key].height)) {
          try {
            const imageData = await axios.get(
              `https://api.cloudinary.com/v1_1/${cloudName}/resources/image/upload/${data[key].public_id}`,
              {
                auth: { username: apiKey, password: apiSecret }
              }
            );
            
            if (imageData.data && imageData.data.width && imageData.data.height) {
              data[key].width = imageData.data.width;
              data[key].height = imageData.data.height;
            }
          } catch (error) {
            console.error('Error fetching Cloudinary metadata:', error.message);
          }
        }
      } else {
        // Recursively process nested objects
        await processCloudinaryImages(data[key], cloudName, apiKey, apiSecret);
      }
    }
  }
};

module.exports = {
  async beforeCreate(event) {
    const { data } = event.params;
    const cloudName = process.env.CLOUDINARY_NAME;
    const apiKey = process.env.CLOUDINARY_KEY;
    const apiSecret = process.env.CLOUDINARY_SECRET;
    
    if (cloudName && apiKey && apiSecret) {
      await processCloudinaryImages(data, cloudName, apiKey, apiSecret);
    }
  },
  
  async beforeUpdate(event) {
    const { data } = event.params;
    const cloudName = process.env.CLOUDINARY_NAME;
    const apiKey = process.env.CLOUDINARY_KEY;
    const apiSecret = process.env.CLOUDINARY_SECRET;
    
    if (cloudName && apiKey && apiSecret) {
      await processCloudinaryImages(data, cloudName, apiKey, apiSecret);
    }
  }
};