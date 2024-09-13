# Instalacija Visual Studio Code-a
1.	Preuzimanje Visual Studio Code-a
•	Posjetite službenu stranicu Visual Studio Code-a, koja je dostupna na: https://code.visualstudio.com/ 
•	Pronađite gumb „Download“, te preuzmite instalacijsku datoteku. (ne morate brinuti o operativnom sustavu, jer ga stranica automatski prepoznaje i prilagođava instalacijsku datoteku)
2.	Instalacija Visual Studio Code-a
•	Nakon završetka preuzimanja, pokrenite instalacijsku datoteku
•	Možete ostaviti sve prema „defaultu“ vodeći se na iduće korake čarobnjaka, te na kraju odaberite stvaranje prečaca
3.	Završetak instalacije
•	Prilikom završetka aplikacije, pokrenite Visual Studio Code
•	Sada imate prikaz Visual Studio Code-a i njegovih mogućnosti

# Instalacija Node.js i NPM

1.	Preuzimanje Node.js
•	Pristupite službenoj stranici Node.js: https://nodejs.org/en 
•	Pritisnite na gumb Download Node.js (LTS)
•	Odaberite vaš operativni sustav (Windows, macOS ili Linux)
•	Pričekajte, dok se preuzimanje ne završi
2.	Instalacija Node.js
•	Pokrenite instalacijsku datoteku
•	Slijedite upute čarobnjaka za instalaciju Node.js-a, te možete ostaviti sve prema „defaultu
3.	Provjera instalacije Node.js i NPM-a
•	U Visual Studio Code-u, pritisnite Ctrl + `, te će vam se otvoriti terminal, koji je omogućuje unos naredbi ključnih za razvoj aplikacija i projekata
•	Naredba „node –v“ provjerava da li je Node.js uspješno instaliran i prikazuje trenutnu verziju Node.js-a
•	Naredba „npm –v“ provjerava da li je NPM uspješno instaliran, te trenutnu verziju
4.	Prilagodba Node.js-a za razvoj aplikacije
•	Nakon provjere, poželjno je provjeriti, je li NPM ažuriran na najnoviju verziju
•	Pokrenite naredbu u terminalu „npm install –g npm@latest“
•	Ako posljednja verzija nije instalirana, pričekajte dok se ažuriranje ne završi

# Kreiranje React projekta "Upravljanje Troskovima"

1.	Pokrenuti Visual Studio Code
2.	Prikazati terminal (Ctrl + `)
3.	Utipkati sljedeću naredbu: „npx create-react-app upravljanje-troskovima“
4.	Potrebno je pričekati nekoliko minuta kako bi se instaliralo sve što je potrebno
5.	Postoji mogućnost da je izašla novija verzija „npm-a“ terminal će prikazati poruku „npm notice new version of npm available!“
6.	Ako želimo pokrećemo naredbu „npm install -g npm@10.8.3“, koja će ažurirati npm na najnoviju verziju.
7.	Postavljamo trenutan direktorij na aplikaciju koristeći se naredbom „cd upravljanje-troskovima“

## Implementacija potrebnih tehnologija

1. SCSS/SASS - "npm install -g sass"

### (Neobavezno)

1. Live Sass Compiler (extension)

###

2. Material UI - "npm install @mui/material @emotion/react @emotion/styles @mui/icons-material

3. React Router - "npm install react-router-dom"

## Pokretanje aplikacija

Pokretanje aplikacije u razvojnom načinu - "npm start"

Pokretanje aplikacije u razvojnom načinu, ali ovisno o konfiguraciji projekta - "npm run dev"

Kreiranje proizvodne verzije aplikacije - "npm run build"

