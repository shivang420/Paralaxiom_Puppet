const timeout = 10000;
let isLogout;

    beforeAll(async () => {
        const page = await browser.newPage();
        await page.goto(URL, { waitUntil: "domcontentloaded" });

        await page.waitForSelector('#root > div > header > nav > div > button');
        await page.click('#root > div > header > nav > div > button');

        await page.waitForSelector('#navbarSupportedContent > ul:nth-child(2) > li:nth-child(5) > i');
        await page.click('#navbarSupportedContent > ul:nth-child(2) > li:nth-child(5) > i');

        await page.screenshot({path: 'logout2.png'});
        this.isLogout = await page.url();
        await page.close();
    });

    describe("Logout", () => {
        test("Logout", async () => {
            expect(this.isLogout).toBe(URL);
        }, timeout);
    });