import { Page, Locator } from "@playwright/test";

export class CartPage {
  readonly page: Page;
  readonly botonCheckout: Locator;
  readonly botonContinuarComprando: Locator;
  readonly productosCarrito: Locator;

  constructor(page: Page) {
    this.page = page;

    this.botonCheckout = page.getByTestId("checkout");

    this.botonContinuarComprando = page.getByTestId(
      "continue-shopping"
    );

    this.productosCarrito = page.locator(".cart_item");
  }

  async iniciarCheckout(): Promise<void> {
    await this.botonCheckout.click();
  }
}