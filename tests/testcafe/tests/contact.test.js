import { Selector } from 'testcafe';

fixture`Contact Form`
    .page`http://localhost:8080/contact.html`;

test('should display all form fields', async t => {
    // Check name input field
    const nameInput = Selector('#name');
    await t
        .expect(nameInput.exists).ok()
        .expect(nameInput.visible).ok()
        .expect(nameInput.getAttribute('type')).eql('text')
        .expect(nameInput.hasAttribute('required')).ok();

    // Check email input field
    const emailInput = Selector('#email');
    await t
        .expect(emailInput.exists).ok()
        .expect(emailInput.visible).ok()
        .expect(emailInput.getAttribute('type')).eql('email')
        .expect(emailInput.hasAttribute('required')).ok();

    // Check message textarea
    const messageTextarea = Selector('#message');
    await t
        .expect(messageTextarea.exists).ok()
        .expect(messageTextarea.visible).ok()
        .expect(messageTextarea.hasAttribute('required')).ok();

    // Check submit button
    const submitButton = Selector('button[type="submit"]');
    await t
        .expect(submitButton.exists).ok()
        .expect(submitButton.visible).ok()
        .expect(submitButton.innerText).eql('Submit');

    // Check clear button
    const clearButton = Selector('button[type="reset"]');
    await t
        .expect(clearButton.exists).ok()
        .expect(clearButton.visible).ok()
        .expect(clearButton.innerText).eql('Clear');
});

test('should have working navigation links', async t => {
    // Check Contact link
    const contactLink = Selector('a').withText('Contact');
    await t
        .expect(contactLink.exists).ok()
        .expect(contactLink.getAttribute('href')).eql('contact.html')
        .click(contactLink);
    await t.expect(t.eval(() => window.location.pathname)).contains('contact.html');

    // Check Home link
    const homeLink = Selector('a').withText('Home');
    await t
        .expect(homeLink.exists).ok()
        .expect(homeLink.getAttribute('href')).eql('index.html')
        .click(homeLink);
    await t.expect(t.eval(() => window.location.pathname)).contains('index.html');
}); 