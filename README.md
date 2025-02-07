# Instalacija Visual Studio Code-a

## 1. Preuzimanje Visual Studio Code-a

- Posjetite službenu stranicu Visual Studio Code-a, koja je dostupna na: [https://code.visualstudio.com/](https://code.visualstudio.com/)
- Pronađite gumb „Download“ i preuzmite instalacijsku datoteku (ne morate brinuti o operativnom sustavu jer stranica automatski prepoznaje i prilagođava instalacijsku datoteku).

## 2. Instalacija Visual Studio Code-a

- Nakon završetka preuzimanja, pokrenite instalacijsku datoteku.
- Slijedite upute čarobnjaka i ostavite sve prema zadanim postavkama („default“), te na kraju odaberite stvaranje prečaca.

## 3. Završetak instalacije

- Po završetku instalacije, pokrenite Visual Studio Code.
- Sada imate pristup svim mogućnostima Visual Studio Code-a.

---

# Instalacija Node.js i NPM

## 1. Preuzimanje Node.js

- Posjetite službenu stranicu Node.js: [https://nodejs.org/en](https://nodejs.org/en)
- Kliknite na gumb „Download Node.js (LTS)“.
- Odaberite verziju za svoj operativni sustav (Windows, macOS, Linux).
- Pričekajte da se preuzimanje završi.

## 2. Instalacija Node.js

- Pokrenite instalacijsku datoteku.
- Slijedite upute čarobnjaka i zadržite zadane postavke.

## 3. Provjera instalacije Node.js i NPM-a

- Otvorite terminal u Visual Studio Code-u (pomoću `Ctrl + \``).
- Unesite naredbu: `node -v` da biste provjerili je li Node.js uspješno instaliran i vidjeli trenutnu verziju.
- Unesite naredbu: `npm -v` da biste provjerili instalaciju NPM-a i prikazali trenutnu verziju.
- verzija Node-a: v21.7.3 

## 4. Ažuriranje NPM-a

- Pokrenite naredbu u terminalu: `npm install -g npm@latest` kako biste ažurirali NPM na najnoviju verziju.
- Pričekajte dok se ažuriranje ne završi.

---

# Kreiranje React projekta "Upravljanje Troškovima"

## 1. Pokretanje Visual Studio Code-a

- Pokrenite Visual Studio Code i otvorite terminal (Ctrl + \`).

## 2. Kreiranje React aplikacije

- U terminalu upišite sljedeću naredbu:  
  ```bash
  npx create-react-app upravljanje-troskovima

## 3. Dodaci

- Preuzimanje svih dodataka, koji se trenutno koriste
  ```bash
  npm install

- Implementacija sass za kompajliranje stilova
  ```bash
  npm install -g sass

- Za uspješno učitavanje (ako prijašnja naredba javlja error)
  ```bash
  npm install -D sass-loader@^10 sass

- Implementacija Mobx u Reactu (1. je dovoljna, ali su poželjne sve 3)
  ```bash
  npm i mobx
  npm i mobx-react
  npm i mobx-react-lite


## 4. Pokretanje aplikacije
- Koristi se za "gužvanje" aplikacije, odnosno pretvara kod projekta u izvršni kod koji se izvršava u pregledniku ili Node-u
  ```bash
  npm run build

- Pokreće aplikaciju lokalno u pregledniku
  ```bash
  npm start