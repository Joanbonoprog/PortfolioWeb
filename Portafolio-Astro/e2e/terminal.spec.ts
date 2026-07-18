import { test, expect } from '@playwright/test';

const OPEN_TIMEOUT = 20_000;
const COMMAND_TIMEOUT = 15_000;

async function openTerminal(page: any) {
  const trigger = page.locator('[data-action="terminal"]').first();
  await trigger.scrollIntoViewIfNeeded();
  await trigger.click();
  const iframe = page.locator('iframe[title="Terminal KMP"]');
  await iframe.waitFor({ state: 'visible', timeout: OPEN_TIMEOUT });
  return iframe;
}

function terminalFrame(page: any) {
  return page.frame({ url: /\/wasm\/index\.html/ });
}

test.describe('Terminal E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('terminal opens and help command is localized in Spanish', async ({ page }) => {
    const iframe = await openTerminal(page);
    const frame = terminalFrame(page);
    expect(frame).not.toBeNull();

    // Focus and type the help command inside the terminal iframe.
    await iframe.click();
    await iframe.pressSequentially('help');
    await iframe.press('Enter');

    await expect(frame.getByText(/Comandos disponibles/)).toBeVisible({ timeout: COMMAND_TIMEOUT });
  });

  test('language change switches to English route', async ({ page }) => {
    await openTerminal(page);

    // Type language change command.
    await page.locator('iframe[title="Terminal KMP"]').pressSequentially('langchange en');
    await page.locator('iframe[title="Terminal KMP"]').press('Enter');

    await page.waitForURL(/\/en\//, { timeout: 20_000 });
    await expect(page).toHaveURL(/\/en\//);
  });

  test('terminal does not overflow horizontally on mobile', async ({ page }) => {
    const iframe = await openTerminal(page);
    const frame = terminalFrame(page);
    expect(frame).not.toBeNull();

    // Wait for something to render and then ensure the document is not wider than the viewport.
    await iframe.click();
    await iframe.pressSequentially('clear');
    await iframe.press('Enter');

    const noOverflow = await frame.evaluate(() => {
      return document.documentElement.scrollWidth <= window.innerWidth;
    });
    expect(noOverflow).toBe(true);
  });
});
