# 📌 Configurazione di Google Sheets con Next.js

Questo progetto utilizza Google Sheets come database per un'applicazione Next.js.

## 🔗 Google Sheet
Puoi accedere al foglio di esempio Google Sheets da questo link:
[Menu Online](https://docs.google.com/spreadsheets/d/1654GQ2pWwr7Nt5MspQwRhD5_9TeNhkib9BgVAi-K4ds/edit?usp=sharing)

### 📌 Ottenere l'ID del Google Sheet
L'ID del tuo Google Sheet è un codice univoco che si trova nell'URL del foglio.  
Ad esempio, in un URL come:
```
https://docs.google.com/spreadsheets/d/1a2B3cD4eF5gHiJ6KlMnOPqrsTUV7w8X9/edit#gid=0
```
l'ID del foglio è la parte compresa tra `/d/` e `/edit`, in questo caso:
```
1a2B3cD4eF5gHiJ6KlMnOPqrsTUV7w8X9
```
Questo valore va impostato nella variabile d'ambiente `GOOGLE_SHEET_ID`.

## 1️⃣ Abilitare l'API di Google Sheets
Per permettere a Next.js di leggere il foglio, dobbiamo abilitare l'API di Google Sheets.

### 📌 Passaggi:
1. Vai su [Google Cloud Console](https://console.cloud.google.com/).
2. Crea un nuovo progetto:
   - Clicca su **Seleziona progetto** → **Nuovo progetto**.
   - Assegna un nome (es. "Menu Online App").
   - Clicca **Crea**.
3. Vai su **API & Servizi** → **Abilita API e servizi**.
4. Cerca **Google Sheets API** e abilitala.
5. Cerca anche **Google Drive API** e abilitala.

## 2️⃣ Creare una Service Account per accedere al Google Sheet
Ora dobbiamo creare una Service Account, che fungerà da chiave per accedere al foglio Google.

### 📌 Passaggi:
1. Vai su **API & Servizi** → **Credenziali**.
2. Clicca su **Crea credenziali** → **Account di servizio**.
3. Dai un nome all’account (es. `menu-service-account`).
4. Assegna il ruolo **Editor** → **Editor di Documenti**.
5. Clicca **Continua** e poi **Fine**.
6. Ora, nella lista degli account di servizio, seleziona quello appena creato.
7. Vai nella scheda **Chiavi** → **Aggiungi chiave** → **Crea nuova chiave**.
8. Scegli **JSON** e scarica il file. Questo file contiene le credenziali.

## 3️⃣ Condividere il Google Sheet con la Service Account
Ora dobbiamo condividere il foglio con la Service Account, perché di default non ha accesso.

### 📌 Passaggi:
1. Apri il tuo **Google Sheet**.
2. Clicca su **Condividi** in alto a destra.
3. Copia l'email della Service Account dal file JSON (sarà simile a `menu-service@your-project.iam.gserviceaccount.com`).
4. Incollala nel campo di condivisione e assegna il ruolo **Editor**.
5. Clicca **Invia**.

## 4️⃣ Configurare le credenziali nel progetto Next.js
Ora che abbiamo ottenuto tutto, dobbiamo salvare le credenziali nel nostro progetto Next.js.

### 📌 Aggiungere le credenziali a `.env.local`
Apri il file JSON che hai scaricato e copia i valori seguenti nel tuo `.env.local`:

```env
GOOGLE_SHEET_ID=1654GQ2pWwr7Nt5MspQwRhD5_9TeNhkib9BgVAi-K4ds
GOOGLE_SERVICE_ACCOUNT_EMAIL=menu-service@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANB...\n-----END PRIVATE KEY-----\n"
```

⚠️ **IMPORTANTE**:
- Mantieni il file `.env.local` privato e **non caricarlo su GitHub**.
- Se il valore `GOOGLE_PRIVATE_KEY` contiene `\n`, devi sostituire `\n` con `\\n` nel file `.env.local`.

## 5️⃣ Verifica che tutto funzioni
Ora puoi testare la tua API!

### 📌 Avvia il progetto Next.js:
```sh
npm run dev
```

E prova a visitare:
```
http://localhost:3000/menu
```
Se tutto è configurato correttamente, dovresti vedere il menu recuperato da Google Sheets! 🚀

