module.exports = {
  plugins: {
    'postcss-custom-media-generator': {
      xs: 480,
      sm: 640,
      md: 768,
      lg: 1024,
      xlg: 1240,
    },   'postcss-mixins': {
      mixinsDir: './src/assets/css/mixins/',
    },
    'postcss-preset-env': {
      browsers: 'baseline newly available',
      stage: 4,
      features: {
        'nesting-rules': true,
        'custom-media-queries': true,
        'media-query-ranges': true,
      },
    },
  }
}
