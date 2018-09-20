import { Selector } from 'testcafe';

fixture `Getting Started`
        .page(`https://devexpress.github.io/testcafe/example`);

test('First Test', async t => {
    await t.typeText('#developer-name', 'Alex')
    .click('#submit-button')
    .expect(Selector('#article-header').innerText)
    .eql('Thank you, Alex!');
});
