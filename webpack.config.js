const GoogleFontsPlugin = require("google-fonts-webpack-plugin")

module.exports = {
  "entry": "index.js",
  build: {
    assetsPublicPath: '',
  },
  /* ... */
  plugins: [
    new GoogleFontsPlugin({
      fonts: [
        { family: "Source Sans Pro" },
        { family: "Raleway", variants: [ "200", "700" ] }
      ]
    })
  ]
}




