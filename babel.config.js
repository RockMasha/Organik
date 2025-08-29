module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          esmodules: true,
        },
      },
    ],
    ['@babel/preset-react', { runtime: 'automatic', importSource: 'preact' }],
    '@babel/preset-typescript',
  ],
  plugins: ['@emotion/babel-plugin'],
}
