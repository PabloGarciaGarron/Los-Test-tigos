/*
Intentar loguear con "locked_out_user"	
y capturar el mensaje de error usando el botón de "assert" del Inspector.
*/
import { test, expect } from "@playwright/test";
import { LoginPage, USUARIOS, PASSWORD } from "../pages/LoginPage";

test.describe("Ejercicio 2", () => {
  let loginPage: LoginPage;
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.ir();
    await loginPage.login(USUARIOS.bloqueado, PASSWORD);
  });

  test(`Verificando visibilidad del error y su contenido`, async () => {
    await loginPage.esperarErrorVisible(
      "Epic sadface: Sorry, this user has been locked out.",
    );
  });
});
