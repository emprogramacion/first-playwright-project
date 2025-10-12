// tests/specs/example.spec.ts
import { test, expect } from "@playwright/test";
import { HomePage } from "@pages/HomePage";

test.describe("Suite de tests - OpenCart", () => {
  test("Búsqueda de producto iPhone", async ({ page }) => {
    const homePage = new HomePage(page);

    await test.step("Visita la página principal", async () => {
      await homePage.open();
    });

    await test.step("Realiza búsqueda de iPhone", async () => {
      await homePage.searchProduct("Iphone");
      await page.pause();
    });
  });

  test("Click en producto MacBook y toma captura", async ({ page }) => {
    const homePage = new HomePage(page);

    await test.step("Visita la página principal", async () => {
      await homePage.open();
    });

    await test.step("Click en MacBook", async () => {
      await homePage.clickMacBook();
    });

    await test.step("Toma de captura", async () => {
      await homePage.screenshot(`./captures/${Date.now()}_macbook.jpg`);
      await page.pause();
    });
  });
});
