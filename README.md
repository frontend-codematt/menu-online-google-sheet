# Integrazione di Google Sheets nel Progetto

Questo progetto dimostra come integrare Google Sheets in un'applicazione, utilizzando le API di Google per leggere e scrivere dati. L'obiettivo è quello di creare un sistema in cui i dati (ad es. un menu) vengono gestiti direttamente da un Google Sheet.

## Passaggi per Collegare il Google Sheet al Progetto

### 1. Creare un Progetto su Google Cloud Console

1. Visita la [Google Cloud Console](https://console.cloud.google.com/).
2. Clicca su **Seleziona progetto** e poi su **Nuovo progetto**.
3. Assegna un nome al progetto (es. "Menu Online App") e clicca su **Crea**.

### 2. Abilitare le API Necessarie

1. Nel menu di navigazione, vai su **API e servizi** > **Libreria**.
2. Cerca e seleziona **Google Sheets API** e clicca su **Abilita**.
3. Se necessario, ripeti la procedura per **Google Drive API** (utile se devi gestire anche i file).

### 3. Creare le Credenziali per l'API

1. Vai su **API e servizi** > **Credenziali**.
2. Clicca su **Crea credenziali** e seleziona **Account di servizio**.
3. Durante la configurazione dell'account di servizio:
   - Assegna un nome all'account (es. "menu-service-account").
   - **Indica a quali dati accedere**: quando richiesto, seleziona l'opzione **Dati applicazione**. Questa scelta permette all'account di accedere esclusivamente ai dati dell'applicazione (es. i dati del Google Sheet), senza interagire con dati personali degli utenti.
   - Seleziona un ruolo adeguato, come **Editor** (se devi modificare i dati) o **Lettore** (se solo leggere).
4. Completa la creazione dell'account di servizio.
5. Una volta creato, vai nella scheda **Chiavi** dell'account di servizio.
6. Clicca su **Aggiungi chiave** > **Crea nuova chiave**.
7. Seleziona il formato **JSON** e scarica il file contenente le credenziali.
8. Copia l'email dell'account di servizio (sarà necessaria per concedere l'accesso al Google Sheet).

### 4. Configurare l'Accesso al Google Sheet

1. Apri il tuo Google Sheet.
2. Clicca su **Condividi** in alto a destra.
3. Incolla l'email dell'account di servizio (ottenuta nel passaggio precedente) nei permessi di condivisione.
4. Concedi il permesso di **Lettore** (o **Editor**, se necessario) al foglio.
5. Assicurati che il foglio contenga i dati strutturati correttamente (es. con intestazioni nelle prime righe).

## Spiegazione del Progetto

Il progetto utilizza le API di Google per interagire con un Google Sheet:
- **Lettura e scrittura dei dati:** I dati (ad es. un menu con piatti, descrizione, prezzo, ecc.) vengono recuperati direttamente dal Google Sheet.
- **Automazione e integrazione:** Le credenziali (credenziali di un account di servizio) vengono utilizzate per autenticarsi e accedere ai dati in maniera sicura, senza esporre informazioni sensibili al frontend.
- **Cache e ottimizzazione:** Per ridurre il numero di richieste e migliorare le performance, il progetto può utilizzare tecniche di caching (ad es. tramite `unstable_cache` in Next.js).

## Requisiti

- Un account Google.
- Accesso alla [Google Cloud Console](https://console.cloud.google.com/).
- Un Google Sheet esistente con i dati da utilizzare.
- Le credenziali (file JSON) generate per l'account di servizio.

## Note

- **Sicurezza:** Conserva il file JSON delle credenziali in un luogo sicuro e non includerlo nel controllo versione (usa un file `.env.local` per gestire le variabili d'ambiente).
- **Accesso:** Limita l'accesso al Google Sheet solo agli account e ai servizi necessari.
- **Documentazione:** Consulta la [documentazione ufficiale di Google Sheets API](https://developers.google.com/sheets/api) per ulteriori dettagli e configurazioni avanzate.

