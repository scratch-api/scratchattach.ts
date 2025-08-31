import * as sa from '../src';

test('Login by username and password', async () => {
    const username = process.env["SA_TEST_USERNAME"];
        const password = process.env["SA_TEST_PASSWORD"];

    expect(username).toBeDefined();
    expect(password).toBeDefined();

    const sess = await sa.login(username!, password!);
    expect(sess.id).toBeTruthy();
    console.log(`Logged in as ${sess.username}`);
});
