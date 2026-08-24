import { test } from "@playwright/test";

import {
  LoginPage,
  USUARIOS,
  PASSWORD,
} from "../pages/LoginPage";

import { InventoryPage } from "../pages/InventoryPage";

test("Ejercicio 5 - Captura de bug con problem_user", async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  // Login con problem_user
  await loginPage.ir();

  await loginPage.login(
    USUARIOS.conProblemas,
    PASSWORD
  );

  // Agregar producto
  await inventoryPage.agregarAlCarrito(
    "Sauce Labs Backpack"
  );

  // Captura de pantalla como evidencia
  await page.screenshot({
    path: "problem_user.png",
    fullPage: true
  });

});