describe('Contact Form', () => {
    beforeEach(async () => {
        // Navigate to the contact page before each test
        const path = require('path');
        const absolutePath = path.resolve(__dirname, '../../../../app/contact.html');
        await browser.url(`file://${absolutePath}`);
    });

    it('should display all form fields', async () => {
        // Check name input field
        const nameInput = await $('#name');
        await expect(nameInput).toBeExisting();
        await expect(nameInput).toHaveAttribute('type', 'text');
        await expect(nameInput).toHaveAttribute('required');

        // Check email input field
        const emailInput = await $('#email');
        await expect(emailInput).toBeExisting();
        await expect(emailInput).toHaveAttribute('type', 'email');
        await expect(emailInput).toHaveAttribute('required');

        // Check message textarea
        const messageTextarea = await $('#message');
        await expect(messageTextarea).toBeExisting();
        await expect(messageTextarea).toHaveAttribute('required');

        // Check submit button
        const submitButton = await $('button[type="submit"]');
        await expect(submitButton).toBeExisting();
        await expect(submitButton).toHaveText('Submit');

        // Check clear button
        const clearButton = await $('button[type="reset"]');
        await expect(clearButton).toBeExisting();
        await expect(clearButton).toHaveText('Clear');
    });
}); 