const timeout = 10000;
let loginCheckUrl;

    beforeAll(async () => {
        const page = await browser.newPage();
        await page.goto(URL, { waitUntil: "domcontentloaded" });
        await page.waitForSelector('.card-body > .form > .form-group:nth-child(1) > .input-group > .form-control')
        await page.type('.card-body > .form > .form-group:nth-child(1) > .input-group > .form-control','shivang.gupta@paralaxiom.com');
  
        await page.waitForSelector('.card-body > .form > .form-group:nth-child(2) > .input-group > .form-control')
        await page.type('.card-body > .form > .form-group:nth-child(2) > .input-group > .form-control','shivangpassword');

        await page.waitForSelector('.col-md-8 > .card > .card-body > .form > .btn')
        await page.click('.col-md-8 > .card > .card-body > .form > .btn')
        await page.waitForNavigation()
        this.loginCheckUrl = await page.url()
    });

    describe("Login", () => {
        test("Login", async () => {
            expect(this.loginCheckUrl).toBe("http://20.188.101.204/");
        }, timeout);
    });