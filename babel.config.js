module.exports = {
  presets: [
    ['@babel/env', { modules: false }],
    '@babel/react'
  ],
  plugins: [
    '@babel/proposal-object-rest-spread'
  ]
}