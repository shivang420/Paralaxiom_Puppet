const timeout = 10000;
let loginCheckUrlCa;
let isLogoutCa;
let isProjectOpen;



    beforeAll(async () => {
        await page.waitFor(4000);
        /*await page.goto(URL, { waitUntil: "domcontentloaded" });
    
        //loging in
        await page.waitForSelector('.card-body > .form > .form-group:nth-child(1) > .input-group > .form-control')
        await page.type('.card-body > .form > .form-group:nth-child(1) > .input-group > .form-control','shivang.gupta@paralaxiom.com');

        await page.waitForSelector('.card-body > .form > .form-group:nth-child(2) > .input-group > .form-control')
        await page.type('.card-body > .form > .form-group:nth-child(2) > .input-group > .form-control','shivangpassword');


        await page.waitForSelector('.col-md-8 > .card > .card-body > .form > .btn')
        await page.click('.col-md-8 > .card > .card-body > .form > .btn')
        await page.waitForNavigation()
        this.loginCheckUrlCa = await page.url()*/

        //opening already existing project
        await page.waitForSelector('#root > div > div:nth-child(3) > div.content-wrapper.custom-background-bg04.p-1 > div > div > div > div > div.m-4 > table > tbody > tr:nth-child(1) > td:nth-child(2) > a')
        await page.click('#root > div > div:nth-child(3) > div.content-wrapper.custom-background-bg04.p-1 > div > div > div > div > div.m-4 > table > tbody > tr:nth-child(1) > td:nth-child(2) > a')
        this.isProjectOpen = await page.url()

        //adding camera
        
        /*
        await page.waitForSelector('#root > div > div > div:nth-child(3) > div > div.content-wrapper.custom-background-bg04.p-2 > div > div > div.row > div.col-lg-4.mt-1.pl-1.pr-1 > div > div > div > div.d-flex.justify-content-center.m-4.custom-cam-1x1 > div')
        await page.click('#root > div > div > div:nth-child(3) > div > div.content-wrapper.custom-background-bg04.p-2 > div > div > div.row > div.col-lg-4.mt-1.pl-1.pr-1 > div > div > div > div.d-flex.justify-content-center.m-4.custom-cam-1x1 > div')
        
        await page.waitFor(2000);
        await page.screenshot({path: 'addingcamera.png'});
        */
        //#root > div > div > div:nth-child(3) > div > div.content-wrapper.custom-background-bg04.p-2 > div > div > div.row > div.col-lg-4.mt-1.pl-1.pr-1 > div > div > div > div.d-flex.justify-content-center.m-4.custom-cam-1x1 > div
        
        //logout
        /*await page.evaluate(() => {
            const button = document.querySelector('#navbarSupportedContent > ul:nth-child(2) > li:nth-child(5) > i');
            button.click();
          });
        await page.waitForNavigation()
        this.isLogoutCa = await page.url()*/
    });
    

    describe("Adding Camera to already exisiting Project", () => {
        /*test("Login", async () => {
            expect(this.loginCheckUrlCa).toBe("http://168.63.233.7/");
        }, timeout);
        */

        /*test("Open Project", async () => {
            expect(this.isProjectOpen).toBe("http://168.63.233.7/organization/projectdetails/2");
        }, timeout);*/
        /*
        test("Logout", async () => {
            expect(this.isLogoutCa).toBe(URL);
        }, timeout);
        */
    });


