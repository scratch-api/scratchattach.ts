import * as sa from '../src';

test('Fetch featured project data', async () => {
    const data = await sa.getFeatured();
    console.log(data);
    expect(data).toBeTruthy();
});
