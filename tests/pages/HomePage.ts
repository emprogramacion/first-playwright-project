import { Locator, Page } from "@playwright/test";
import { BasePage } from "@utilities/BasePage";

export class HomePage extends BasePage {
  readonly searchInput: Locator;
  readonly macBookLink: Locator;

  constructor(page: Page) {
    super(page); // ✅ hereda de BasePage
    this.searchInput = page.getByPlaceholder("Search");
    this.macBookLink = page.getByText("MacBook");
  }

  async open() {
    await this.goto("https://opencart.abstracta.us/");
  }

  async searchProduct(productName: string) {
    await this.searchInput.fill(productName);
    await this.searchInput.press("Enter");
  }

  async clickMacBook() {
    await this.macBookLink.click();
  }
}
