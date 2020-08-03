const timeout = 100000000;
let loginCheckUrlCa;
let isLogoutCa;
let isProjectOpen;
let checkpointAdded;


    beforeAll(async () => {
        //await page.waitFor(4000);
        await page.setViewport({ width: 1575, height: 720 });
        await page.goto(URL, { waitUntil: "domcontentloaded" });
    
        //loging in
        await page.waitForSelector('.card-body > .form > .form-group:nth-child(1) > .input-group > .form-control')
        await page.type('.card-body > .form > .form-group:nth-child(1) > .input-group > .form-control', USERNAME);

        await page.waitForSelector('.card-body > .form > .form-group:nth-child(2) > .input-group > .form-control')
        await page.type('.card-body > .form > .form-group:nth-child(2) > .input-group > .form-control', PASSWORD);


        await page.waitForSelector('.col-md-8 > .card > .card-body > .form > .btn')
        await page.click('.col-md-8 > .card > .card-body > .form > .btn')
        await page.waitForNavigation()
        this.loginCheckUrlCa = page.url()

        //opening already existing project
        await page.waitForSelector('#root > div > div:nth-child(3) > div.content-wrapper.custom-background-bg04.p-1 > div > div > div > div > div.m-4 > table > tbody > tr:nth-child(1) > td:nth-child(2) > a')
        await page.click('#root > div > div:nth-child(3) > div.content-wrapper.custom-background-bg04.p-1 > div > div > div > div > div.m-4 > table > tbody > tr:nth-child(1) > td:nth-child(2) > a')
        this.isProjectOpen = page.url()
        
        
        await page.waitForSelector('tbody > tr > td > a > small')
        await page.click('tbody > tr > td > a > small')
        
        await page.waitForSelector('.card-body #inputAddress')
        await page.click('.card-body #inputAddress')
        await page.type('.card-body #inputAddress', CHECKPOINTNAME);

        await page.select('.card-body #inputState', "Zone_Exit")
        await page.select('div .mb-1 > #inputState', "poly")
        await page.waitFor(2000);
        await page.select('#inputStatePuppet', "Medium");
        
        await page.waitFor(200);
        await page.mouse.click(350, 250);
        await page.waitFor(200);
        await page.mouse.click(900, 250);
        await page.waitFor(200);
        await page.mouse.click(900, 600);
        await page.waitFor(200);
        await page.mouse.click(350, 600);
        await page.waitFor(200);
        await page.mouse.click(350, 250);
        await page.mouse.click(350, 250);
        
        await page.waitFor(2000);

        await page.click('#root > div > div > div:nth-child(3) > div > div > div > div.row.mt-2 > div.col-lg-4 > div > div > div.card-body.p-1 > div > div > div.d-flex.justify-content-around > div > button');
        
        await page.waitFor(2000);
        await page.screenshot({path: 'addingcamera3.png'});

        const visibleCheck = await page.waitForSelector('#root > div > div > div:nth-child(3) > div > div > div.alert.alert-success.custom-message-status2c1', { visible: true })

        if(visibleCheck){
            this.checkpointAdded = true;
        }
        else{
            this.checkpointAdded = false;
        }
        //imp
        // #root > div > div > div:nth-child(3) > div > div > div.alert.alert-success.custom-message-status2c1
        //

        await page.evaluate(() => {
            const button = document.querySelector('#navbarSupportedContent > ul:nth-child(2) > li:nth-child(5) > i');
            button.click();
          });
        await page.waitForNavigation()
        this.isLogoutCa = page.url()
    }, timeout);
    

    describe("Adding Camera to already exisiting Project", () => {
        test("Login", async () => {
            expect(this.loginCheckUrlCa).toBe("http://20.188.101.204/");
        }, timeout);
        
        
        test("Open Project", async () => {
            expect(this.isProjectOpen).toBe("http://20.188.101.204/organization/projectdetails/2");
        }, timeout);

        test("Add CheckPoint", async () => {
            expect(this.checkpointAdded).toBe(true);
        }, timeout);

        test("Logout", async () => {
            expect(this.isLogoutCa).toBe(URL);
        }, timeout);  
    });


