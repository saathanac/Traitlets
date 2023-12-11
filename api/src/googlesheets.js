// googlesheets.js
const { google } = require('googleapis');

const serviceAccountKeyFile = "/Users/alexcholmsky/Traitlets/api/src/traitlets-d6754b69ff60.json";
const sheetId = '1M0AqJPS4JDaadtnTiBpMHJBbUufzj7Xtj495zfFe3OQ';
const tabName = 'Orders';
const range = 'A:E';

async function getGoogleSheetClient() {
    try {
      const auth = new google.auth.GoogleAuth({
        keyFile: serviceAccountKeyFile,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });
      const authClient = await auth.getClient();
      return google.sheets({
        version: 'v4',
        auth: authClient,
      });
    } catch (error) {
      console.error("Error getting Google Sheets client:", error);
      throw new Error("Error getting Google Sheets client");
    }
  }

async function writeGoogleSheet(googleSheetClient, data) {
  console.log("Before writing to Google Sheets:", new Date().toISOString(), data);
  try {
    await googleSheetClient.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: `${tabName}!${range}`,
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        "majorDimension": "ROWS",
        "values": [data],
      },
    });
    console.log("Write operation successful!");
  } catch (error) {
    console.error("Error appending data to Google Sheets:", error);
  }
  
  console.log("After writing to Google Sheets:", new Date().toISOString(), data);
}

module.exports = { getGoogleSheetClient, readGoogleSheet, writeGoogleSheet };
