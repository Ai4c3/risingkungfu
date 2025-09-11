module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('sh1fu'),
        api_key: env('858565248714757'),
        api_secret: 'EmMX8WvCqG7kiNjuDWPierQEI2M',
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});