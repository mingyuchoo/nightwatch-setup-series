describe("Ecosia", function () {
  test("demo test", function (browser) {
    let ecosia = browser.page.ecosia();
    ecosia
      .navigate()
      .setValue("@searchBar", "nightwatch")
      .click("@submit")
      .assert.containsText("@results", "Nightwatch.js")
      .end();
  });
});
