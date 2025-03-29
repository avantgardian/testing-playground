import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('should display all form fields', async ({ page }) => {
    // Check name input field
    const nameInput = page.locator('#name');
    await expect(nameInput).toBeVisible();
    await expect(nameInput).toHaveAttribute('type', 'text');
    await expect(nameInput).toHaveAttribute('required', '');

    // Check email input field
    const emailInput = page.locator('#email');
    await expect(emailInput).toBeVisible();
    await expect(emailInput).toHaveAttribute('type', 'email');
    await expect(emailInput).toHaveAttribute('required', '');

    // Check message textarea
    const messageTextarea = page.locator('#message');
    await expect(messageTextarea).toBeVisible();
    await expect(messageTextarea).toHaveAttribute('required', '');

    // Check submit button
    const submitButton = page.locator('button[type="submit"]');
    await expect(submitButton).toBeVisible();
    await expect(submitButton).toHaveText('Submit');

    // Check clear button
    const clearButton = page.locator('button[type="reset"]');
    await expect(clearButton).toBeVisible();
    await expect(clearButton).toHaveText('Clear');
  });

  test('should have working navigation links', async ({ page }) => {
    // Check Contact link
    const contactLink = page.getByRole('link', { name: 'Contact' });
    await expect(contactLink).toBeVisible();
    await expect(contactLink).toHaveAttribute('href', 'contact.html');
    await contactLink.click();
    await expect(page.url()).toContain('/contact');

    // Check Home link
    const homeLink = page.getByRole('link', { name: 'Home' });
    await expect(homeLink).toBeVisible();
    await expect(homeLink).toHaveAttribute('href', 'index.html');
    await homeLink.click();
    // The root URL might not contain 'index'
    await expect(page.url()).toBe('http://localhost:51564/');
  });
}); 