module.exports = {
  url: "https://www.google.com",
  elements: {
    searchBar: {
      selector: "input[type=text]",
    },
    submit: {
      selector:
        "form > div:nth-child(1) > div > div > center > input[name=btnK]",
    },
  },
};
