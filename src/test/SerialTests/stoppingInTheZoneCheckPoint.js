const timeout = 100000000;
let loginCheckUrlCa;
let isLogoutCa;
let checkpointAdded;
let checkpointEdited;
let checkpointDelete;


beforeAll(async () => {
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
        
    await page.waitForSelector('tbody > tr > td > a > small')
    await page.click('tbody > tr > td > a > small')
    
    await page.waitForSelector('.card-body #inputAddress')
    await page.click('.card-body #inputAddress')
    await page.type('.card-body #inputAddress', StoppingInTheZoneCheckPointName);

    await page.select('.card-body #inputState', "Stopping in the zone")
    await page.select('div .mb-1 > #inputState', "poly")
    await page.waitFor(2000);
    await page.select('#inputStatePuppet', "Medium");
    
    await page.waitFor(200);
    await page.mouse.click(410, 310);
    await page.waitFor(200);
    await page.mouse.click(960, 310);
    await page.waitFor(200);
    await page.mouse.click(960, 660);
    await page.waitFor(200);
    await page.mouse.click(410, 660);
    await page.waitFor(200);
    await page.mouse.click(410, 310);
    await page.mouse.click(410, 310);

    //setting time
    await page.click('#root > div > div > div:nth-child(3) > div > div > div > div.row.mt-2 > div.col-lg-4 > div > div > div.card-body.p-1 > div > div > div:nth-child(3) > div.m-2 > div.d-flex > div > input', clickCount = 3)
    await page.keyboard.press('Backspace');
    await page.type('#root > div > div > div:nth-child(3) > div > div > div > div.row.mt-2 > div.col-lg-4 > div > div > div.card-body.p-1 > div > div > div:nth-child(3) > div.m-2 > div.d-flex > div > input', '10');
    
    
    await page.waitFor(2000);

    await page.click('#root > div > div > div:nth-child(3) > div > div > div > div.row.mt-2 > div.col-lg-4 > div > div > div.card-body.p-1 > div > div > div.d-flex.justify-content-around > div > button');
    
    await page.waitFor(2000);
    await page.screenshot({path: 'addingStoppingInTheZoneCheckPoint.png'});

    const visibleCheck = await page.waitForSelector('#root > div > div > div:nth-child(3) > div > div > div.alert.alert-success.custom-message-status2c1', { visible: true })

    if(visibleCheck){
        this.checkpointAdded = true;
    }
    else{
        this.checkpointAdded = false;
    }

    // edit checkpoint
    await page.click('#root > div > div > div:nth-child(3) > div > div > div > div.row.mt-2 > div.col-lg-4 > div > div > div.card-body.p-1 > ul > li:nth-child(1) > a')
    await page.waitFor(200)
    await page.click('#root > div > div > div:nth-child(3) > div > div > div > div.row.mt-2 > div.col-lg-4 > div > div > div.card-body.p-1 > div > ul > li > div > div:nth-child(3) > div > i.fas.fa-pen-square')
    await page.waitFor(200)
    await page.click('#root > div > div > div:nth-child(3) > div > div > div > div.row.mt-2 > div.col-lg-4 > div > div > div.card-body.p-1 > div > div > div:nth-child(3) > div.d-flex.align-items-center.mt-1.mb-1 > input')
    await page.waitFor(200)
    await page.click('#root > div > div > div:nth-child(3) > div > div > div > div.row.mt-2 > div.col-lg-4 > div > div > div.card-body.p-1 > div > div > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > input')
    await page.waitFor(200)
    await page.click('#root > div > div > div:nth-child(3) > div > div > div > div.row.mt-2 > div.col-lg-4 > div > div > div.card-body.p-1 > div > div > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > input')
    await page.waitFor(200)

    await page.mouse.click(410, 660);
    await page.waitFor(2000)
    await page.mouse.click(950,300);
    await page.waitFor(200)


    //update checkpoint
    await page.click('#root > div > div > div:nth-child(3) > div > div > div > div.row.mt-2 > div.col-lg-4 > div > div > div.card-body.p-1 > div > div > div.d-flex.justify-content-around > div > button')
    const visibleCheckEdit = await page.waitForSelector('#root > div > div > div:nth-child(3) > div > div > div.alert.alert-success.custom-message-status2c1', { visible: true })

    if(visibleCheckEdit){
        this.checkpointEdited = true;
    }
    else{
        this.checkpointEdited = false;
    }
    await page.waitFor(2000);

    //imp
    // #root > div > div > div:nth-child(3) > div > div > div.alert.alert-success.custom-message-status2c1
    //

    //delete checkpoint
    await page.click('#root > div > div > div:nth-child(3) > div > div > div > div.row.mt-2 > div.col-lg-4 > div > div > div.card-body.p-1 > ul > li:nth-child(1) > a')

    await page.click('#root > div > div > div:nth-child(3) > div > div > div > div.row.mt-2 > div.col-lg-4 > div > div > div.card-body.p-1 > div > ul > li:nth-child(2) > div > div:nth-child(3) > div > i.fas.fa-pen-square')
    await page.waitFor(2000);
    await page.click('#root > div > div > div:nth-child(3) > div > div > div > div.row.mt-2 > div.col-lg-4 > div > div > div.card-body.p-1 > ul > li:nth-child(1) > a')
    await page.waitFor(2000);
    await page.click('#root > div > div > div:nth-child(3) > div > div > div > div.row.mt-2 > div.col-lg-4 > div > div > div.card-body.p-1 > div > ul > li:nth-child(2) > div > div:nth-child(3) > div > i.far.fa-trash-alt')

    await page.waitFor(2000);
    // await page.screenshot({path: 'deleteCheckPoint.png'});

    const visibleCheckDelete = await page.waitForSelector('#root > div > div > div:nth-child(3) > div > div > div.alert.alert-success.custom-message-status2c1', { visible: true })

    if(visibleCheckDelete){
        this.checkpointDelete = true;
    }
    else{
        this.checkpointDelete = false;
    }

    await page.evaluate(() => {
        const button = document.querySelector('#navbarSupportedContent > ul:nth-child(2) > li:nth-child(5) > i');
        button.click();
        });
    await page.waitForNavigation()
    this.isLogoutCa = page.url()
}, timeout);


describe("Adding Stopping In The Zone CheckPoint", () => {
    test("Login", async () => {
        expect(this.loginCheckUrlCa).toBe("http://20.188.101.204/");
    }, timeout);

    test("Stopping In The Zone CheckPoint Added", async () => {
        expect(this.checkpointAdded).toBe(true);
    }, timeout);

    test("Stopping In The Zone CheckPoint Edited", async () => {
        expect(this.checkpointEdited).toBe(true);
    }, timeout);

    test("Stopping In The Zone CheckPoint Deleted", async () => {
        expect(this.checkpointDelete).toBe(true);
    }, timeout);

    test("Logout", async () => {
        expect(this.isLogoutCa).toBe(URL);
    }, timeout);  
});


