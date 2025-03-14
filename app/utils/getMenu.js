"use server";
import { google } from "googleapis";
import { unstable_cache } from "next/cache";

const getMenuData = async () => {
  try {
    // Configura l'autenticazione con la Service Account
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const client = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: client });

    // Assumiamo che il foglio si chiami "menu" e che i dati siano in A1:E
    const range = "menu!A1:D";
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range,
    });

    const rows = response.data.values;
    if (!rows || rows.length === 0) {
      return [];
    }

    const headers = rows[0];
    const menu = rows.slice(1).map((row) => {
      const rowData = {};
      headers.forEach((header, index) => {
        rowData[header] = row[index];
      });
      return {
        nome: rowData["Nome"],
        descrizione: rowData["Descrizione"],
        prezzo: parseFloat(rowData["Prezzo"]),
        categoria: rowData["Categoria"],
      };
    });

    return menu;
  } catch (error) {
    console.error("Errore nel recupero del menu:", error);
    throw new Error("Failed to fetch menu data");
  }
};

// ** Applichiamo la cache ** (1 ora = 3600 secondi)
const getMenu = unstable_cache(getMenuData, ["menu-cache"], { revalidate: 3600 });

export default getMenu;
