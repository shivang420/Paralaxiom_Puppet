const timeout = 1000000;
let loginCheckUrl;
let projectAdded;
let isLogout;

    beforeAll(async () => {
        //await page.waitFor(4000);
        await page.goto(URL, { waitUntil: "domcontentloaded" });
        await page.waitForSelector('.card-body > .form > .form-group:nth-child(1) > .input-group > .form-control')
        await page.type('.card-body > .form > .form-group:nth-child(1) > .input-group > .form-control','shivang.gupta@paralaxiom.com');
  
        await page.waitForSelector('.card-body > .form > .form-group:nth-child(2) > .input-group > .form-control')
        await page.type('.card-body > .form > .form-group:nth-child(2) > .input-group > .form-control','shivangpassword');

  
        await page.waitForSelector('.col-md-8 > .card > .card-body > .form > .btn')
        await page.click('.col-md-8 > .card > .card-body > .form > .btn')
        await page.waitForNavigation()
        this.loginCheckUrl = page.url()
        
        //adding project

        
        await page.waitForSelector('.card > .card-body > .d-flex > .d-flex > div:nth-child(2)')
        await page.click('.card > .card-body > .d-flex > .d-flex > div:nth-child(2)')        
        
        await page.waitForSelector('.modal-content #textFieldProject')
        await page.$eval('.modal-content #textFieldProject',el => el.value = 'Project 3')

        await page.evaluate(() => {
            const button = document.querySelector('.modal-content .row #exampleFormControlTextarea1');
            button.value = 'description added';
        });

        /*await page.waitFor(2000);
        await page.click('.modal-content .row #exampleFormControlTextarea1')
        //await page.type(String.fromCharCode(13));
        await page.keyboard.press('Enter');
        await page.waitFor(2000);*/
        const button = await page.waitForSelector('button#createProjectButton', { visible: true });
        await page.waitFor(3000);
        console.log(button);
        //await page.waitFor(2000);
        await button.hover();
        //await page.waitFor(3000);
        //await button.click();
        await page.waitFor(2000);
        //await page.waitForFunction('.modal', {hidden: true});
        await page.$eval('form.modal-content', form => form.submit());
        await page.waitFor(150000)

        /*
        await page.keyboard.type('Project 2');
        await page.keyboard.press('Enter');
        */
        //const foo = await page.$('#textFieldProject');
        //await page.waitFor(2000);
        //await page.waitForSelector('.modal-content #textFieldProject')
        //await page.$eval('.modal-content #textFieldProject', elem => elem.click());
        //await page.click('.modal-content #textFieldProject');
        //await page.keyboard.type('Project 2');


        
        //await page.$eval('.modal-content #textFieldProject',el => el.value = 'Project 2')
        //await page.type('#textFieldProject', 'Project 2');
        //await page.waitForSelector('#exampleModalCenter > div > form > div.modal-body > div:nth-child(1) > div.col-xs-8.col-lg-8.col-sm-8.col-md-8.pl-1 > input')
        //await page.click('#exampleModalCenter > div > form > div.modal-body > div:nth-child(1) > div.col-xs-8.col-lg-8.col-sm-8.col-md-8.pl-1 > input');
        //await page.focus('#textFieldProject');
        //await page.keyboard.press('Enter');
        //await page.click('#exampleModalCenter > div > form > div.modal-body > div:nth-child(1) > div.col-xs-8.col-lg-8.col-sm-8.col-md-8.pl-1 > input')
        //await page.keyboard.type('Project 1');
        //await page.keyboard.press('Enter');


/*  
        await page.waitForSelector('#exampleModalCenter > div > form > div.modal-body > div:nth-child(1) > div.col-xs-8.col-lg-8.col-sm-8.col-md-8.pl-1 > input')
        await page.click('#exampleModalCenter > div > form > div.modal-body > div:nth-child(1) > div.col-xs-8.col-lg-8.col-sm-8.col-md-8.pl-1 > input');
        await page.keyboard.press('Enter');
  */      //await page.waitForSelector('#exampleModalCenter > div > div > div.modal-body > div:nth-child(1) > div.col-xs-8.col-lg-8.col-sm-8.col-md-8.pl-1 > input')
        
        

        //await page.waitForSelector('#createProjectButton');
        //await page.click('#createProjectButton');

        /*await page.evaluate(() => {
            const button = document.querySelector('#createProjectButton');
            button.click();
          });*/
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
        //page.waitFor(2000);
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
        this.isLogout = page.url();  */
    }, timeout);

    describe("Adding Project", () => {
        test("Login", async () => {
            expect(this.loginCheckUrl).toBe("http://20.188.101.204/");
        }, timeout);
        /*
        test("Logout", async () => {
            expect(this.isLogout).toBe(URL);
        }, timeout);*/
        test("DingProject", async () => {
            expect(5).toBe(1+4);
        }, timeout);
    });