const timeout = 10000;
let isLogout;

    beforeAll(async () => {
        await page.goto(URL, { waitUntil: "domcontentloaded" });
        await page.waitFor(4000);
        await page.evaluate(() => {
            const button = document.querySelector('.container-fluid > #navbarSupportedContent > .nav > .nav-item > .fas');
            button.click();
          });
        await page.waitForNavigation()
        this.isLogout = await page.url();
    });

    describe("Logout", () => {
        test("Logout", async () => {
            expect(this.isLogoutCa).toBe(URL);
        }, timeout);
    });