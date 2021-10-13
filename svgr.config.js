module.exports = {
  loader: "@svgr/webpack",
  icon: false,
  ext: "js",
  native: true,
  svgProps: {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#292D32",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
  svgoConfig: {
    plugins: [
      {
        removeXMLNS: true,
      },
      {
        removeAttrs: {
          attrs: "(fill|stroke|stroke-width|stroke-linecap|stroke-linejoin)",
        },
      },
    ],
  },
};
