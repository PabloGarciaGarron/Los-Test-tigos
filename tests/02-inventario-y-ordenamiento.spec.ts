//```typescript
import { test, expect } from "@playwright/test";
import {
  LoginPage,
  USUARIOS,
  PASSWORD,
} from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";

test.describe("Inventario y ordenamiento", () => {

  test("Login → ordenar por precio de mayor a menor → verificar primer producto", async ({page,
  }) => {

    // ==========================================
    // 1. LOGIN
    // ==========================================
    const loginPage = new LoginPage(page);

    await loginPage.ir();
    await loginPage.login(
      USUARIOS.estandar,
      PASSWORD
    );

    // ==========================================
    // 2. PÁGINA DE INVENTARIO
    // ==========================================
    const inventoryPage = new InventoryPage(page);

    await expect(inventoryPage.titulo).toBeVisible();

    // ==========================================
    // 3. ABRIR / SELECCIONAR "SORT BY"
    // ==========================================
    await inventoryPage.selectorOrden.selectOption("hilo");

    // ==========================================
    // 4. VERIFICAR PRIMER PRODUCTO
    // ==========================================
    await expect(inventoryPage.primerProducto).toBeVisible();

    const primerProducto =
      await inventoryPage.obtenerPrimerNombre();

    expect(primerProducto).toBe(
      "Sauce Labs Fleece Jacket"
    );
  });

});

