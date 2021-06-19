describe("Github", function () {
  test("demo test", function (browser) {
    let github = browser.page.github();
    github
      .navigate()
      .assert.containsText("@fullname", "mingyuchoo")
      .assert.containsText("@nickname", "mingyuchoo")
      .end();
  });
});
