import { Page, Locator } from "@playwright/test";

export class CartPage {
  readonly page: Page;
  readonly items: Locator;

  constructor(page: Page) {
    this.page = page;
    this.items = page.locator(".cart_item");
  }

  itemPorNombre(nombre: string): Locator {
    return this.items.filter({ hasText: nombre });
  }

  async quitarProducto(nombreProducto: string): Promise<void> {
    const item = this.itemPorNombre(nombreProducto);
    await item.getByRole("button", { name: "Remove" }).click();
  }

  async seguirComprando(): Promise<void> {
    await this.page.getByRole("button", { name: "Continue Shopping" }).click();
  }
}
