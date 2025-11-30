import { test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/');
});

test.describe('Test Suit 1', () => {

    test.beforeEach( async ({ page }) => {
        await page.getByText('Forms').click();
    });

    test('navigate to Form Layouts', async ({ page }) => {
        await page.getByText('Form Layouts').click();
    });

    test('navigate to Datepicker', async ({ page }) => {
        await page.getByText('Datepicker').click();
    });

});

test.describe('Test Suit 2', () => {

    test.beforeEach( async ({ page }) => {
        await page.getByRole('link', { name: 'Charts', exact: true }).click();
    });

    test('navigate to Echarts', async ({ page }) => {
        await page.getByText('Echarts').click();
    });

});
