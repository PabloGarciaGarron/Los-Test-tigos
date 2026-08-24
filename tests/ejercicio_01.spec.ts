/*
Login	con	standard_user	
→	agregar	"Sauce	Labs Onesie"	al	carrito	
→	abrir	el	carrito	→	quitarlo	con	"Remove".
Verificar	que	el	carrito	queda	en	0.
*/
import { test, expect } from "@playwright/test";
import { LoginPage, USUARIOS, PASSWORD } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";

test.describe("Ejercicio 1", () => {
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;
  const producto = "Sauce Labs Onesie";

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.ir();
    await loginPage.login(USUARIOS.estandar, PASSWORD);

    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
  });

  test(`Agregando ${producto} al carrito`, async () => {
    await inventoryPage.agregarAlCarrito(producto);
    await inventoryPage.irAlCarrito();
    await expect(cartPage.items).toHaveCount(1);
  });

  test("quitar un producto desde el carrito", async () => {
    await inventoryPage.agregarAlCarrito(producto);
    await inventoryPage.irAlCarrito();
    await cartPage.quitarProducto(producto);
    await expect(inventoryPage.contadorCarrito).toHaveCount(0);
  });
});
