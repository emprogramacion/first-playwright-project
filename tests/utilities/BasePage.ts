import { Page } from "@playwright/test";

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(url: string) {
    await this.page.goto(url);
  }

  async screenshot(path: string) {
    await this.page.screenshot({
      path,
      fullPage: true,
    });
  }

  // 🧩 Helpers genéricos útiles para cualquier página
  async getText(selector: string) {
    return this.page.locator(selector).innerText();
  }

  async clickElement(selector: string) {
    await this.page.locator(selector).click();
  }

  async typeText(selector: string, text: string) {
    await this.page.locator(selector).fill(text);
  }
}