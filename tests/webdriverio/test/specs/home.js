describe('Home Page', () => {
    beforeEach(async () => {
        const path = require('path');
        const absolutePath = path.resolve(__dirname, '../../../../app/index.html');
        await browser.url(`file://${absolutePath}`);
    });

    it('should display correct title and headings', async () => {
        // Check page title
        await expect(browser).toHaveTitle('Testing Playground');
        
        // Check main heading
        const mainHeading = await $('h1');
        await expect(mainHeading).toHaveText('Testing Playground');
        
        // Check section headings
        const aboutHeading = await $('h2=About This Project');
        await expect(aboutHeading).toBeExisting();
        
        const frameworksHeading = await $('h2=Testing Frameworks');
        await expect(frameworksHeading).toBeExisting();
        
        const approachHeading = await $('h2=Our Approach');
        await expect(approachHeading).toBeExisting();
    });

    it('should list all testing frameworks', async () => {
        const frameworks = ['WebdriverIO', 'Cypress', 'Playwright', 'Selenium', 'TestCafe'];
        
        for (const framework of frameworks) {
            const frameworkHeading = await $(`h3=${framework}`);
            await expect(frameworkHeading).toBeExisting();
        }
    });

    it('should have working navigation links', async () => {
        // Check if nav links exist
        const homeLink = await $('a=Home');
        const contactLink = await $('a=Contact');
        
        await expect(homeLink).toBeExisting();
        await expect(contactLink).toBeExisting();
        
        // Click contact link and verify navigation
        await contactLink.click();
        const contactForm = await $('#contact-form');
        await expect(contactForm).toBeExisting();
        
        // Go back to home and verify
        await homeLink.click();
        const mainHeading = await $('h1');
        await expect(mainHeading).toHaveText('Testing Playground');
    });
}); 