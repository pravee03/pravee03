import { Selector } from 'testcafe';

fixture('Demo QA Automation Testing')
    .page('https://demoqa.com');

test('Fill out a form and submit', async t => {
    await t
        .click(Selector('div.card-body').withText('Forms')) // Click Forms
        .click(Selector('span').withText('Practice Form')) // Click Practice Form
        .typeText('#firstName', 'John')
        .typeText('#lastName', 'Doe')
        .typeText('#userEmail', 'johndoe@example.com')
        .click(Selector('label').withText('Male')) // Select Gender
        .typeText('#userNumber', '9876543210')
        .click('#submit');

    // Verify submission success
    await t.expect(Selector('.modal-title').withText('Thanks for submitting the form').exists).ok();
});
