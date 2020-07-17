const timeout = 10000;
let loginCheckUrl;
let projectAdded;
let isLogout;

    beforeAll(async () => {
        //await page.waitFor(4000);
        await page.goto(URL, { waitUntil: "domcontentloaded" });
        /*
        //loging in  Different Test Case(Logout)
        await page.waitForSelector('.card-body > .form > .form-group:nth-child(1) > .input-group > .form-control')
        await page.type('.card-body > .form > .form-group:nth-child(1) > .input-group > .form-control','shivang.gupta@paralaxiom.com');
  
        await page.waitForSelector('.card-body > .form > .form-group:nth-child(2) > .input-group > .form-control')
        await page.type('.card-body > .form > .form-group:nth-child(2) > .input-group > .form-control','shivangpassword');

  
        await page.waitForSelector('.col-md-8 > .card > .card-body > .form > .btn')
        await page.click('.col-md-8 > .card > .card-body > .form > .btn')
        await page.waitForNavigation()
        this.loginCheckUrl = await page.url()*/
        
        //adding project

        /*
        await page.waitForSelector('.card > .card-body > .d-flex > .d-flex > div:nth-child(2)')
        await page.click('.card > .card-body > .d-flex > .d-flex > div:nth-child(2)')        
        
        await page.waitForSelector('#exampleModalCenter > div > div > div.modal-body > div:nth-child(1) > div.col-xs-8.col-lg-8.col-sm-8.col-md-8.pl-1 > input')
        await page.$eval('#exampleModalCenter > div > div > div.modal-body > div:nth-child(1) > div.col-xs-8.col-lg-8.col-sm-8.col-md-8.pl-1 > input',el => el.value = 'Project 1')
        
        await page.evaluate(() => {
            const email = document.querySelector('.modal-content .row #exampleFormControlTextarea1');
            email.value = 'description';
          });*/
        //await page.waitFor(2000);

        //await page.waitForSelector('#exampleModalCenter > div > div > div.modal-footer.ali.mr-4 > button.btn.btn-primary')
        //await page.click('#exampleModalCenter > div > div > div.modal-footer.ali.mr-4 > button.btn.btn-primary');
        //await page.$eval('#exampleModalCenter > .modal-dialog > .modal-content > .modal-footer > .btn-primary', elem => elem.click() )
        //page.waitFor(4000);
        //await page.click('button[type="submit"]')

        /*await page.evaluate(()=> {
                const button = document.querySelector('button[type="button"].btn-primary');
                button.click();
            });*/
        //await page.waitForNavigation()
        //page.waitFor(4000);
        
        //await page.waitForSelector('button[type="button"].btn-primary')
        //await page.click('button[type="button"].btn-primary')
        //#exampleModalCenter > div > div > div.modal-footer.ali.mr-4 > button.btn.btn-primary
        //const isProjectAddSuc = await page. $('#root > div > div.alert.alert-danger.custom-message-status2c1 > strong'). then (res =>!! res);
        await page.waitFor(4000);
        await page.screenshot({path: 'addingproject.png'});
        /*if(isProjectAddSuc){
            projectAdded = false ;
        }
        else{
            projectAdded = true ;
        }*/
        //document.querySelector("#exampleModalCenter > div > div > div.modal-footer.ali.mr-4 > button.btn.btn-primary")
        //#root > div > div.alert.alert-danger.custom-message-status2c1 > strong

        //await page.waitForSelector('.container-fluid > #navbarSupportedContent > .nav > .nav-item > .fas')
        //await page.click('.container-fluid > #navbarSupportedContent > .nav > .nav-item > .fas')
        
        //logout CleanUp
        //Setup and cleanup for every test case
        /*await page.evaluate(() => {
            const button = document.querySelector('.container-fluid > #navbarSupportedContent > .nav > .nav-item > .fas');
            button.click();
          });
        await page.waitForNavigation()
        this.isLogout = await page.url();  */

    });

    describe("Adding Project", () => {
        /*test("Login", async () => {
            expect(this.loginCheckUrl).toBe("http://168.63.233.7/");
        }, timeout);

        test("Logout", async () => {
            expect(this.isLogout).toBe(URL);
        }, timeout);*/
    });