module.exports = {
  plugins: {
    'postcss-custom-media-generator': {
      xs: 480,
      sm: 640,
      md: 768,
      lg: 1024,
      xlg: 1240,
    },
    'postcss-mixins': {
      mixinsDir: './app/assets/css/mixins/',
    },
    'postcss-preset-env': {
      browsers: 'last 2 versions',
      stage: 4,
      features: {
        'nesting-rules': true,
        'custom-media-queries': true,
        'media-query-ranges': true,
      },
    },
  }
}
