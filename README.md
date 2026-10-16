# Tanulószobák – React alkalmazás

A README.md feladatleírása alapján elkészített, egyoldalas, reszponzív tanulószoba-foglaló alkalmazás.

## Funkciók
- Tanulószobák kártyás megjelenítése
- Szűrés szobatípus szerint
- Helyfoglalás a szabad férőhelyek erejéig
- Teltházjelzés és letiltott foglalógomb
- Férőhely- és foglaltsági mutatók
- Három elrendezés mobilra, tabletre és asztali kijelzőre

## Indítás
Node.js 18+ szükséges.

```bash
npm install
npm run dev
```

A terminálban megjelenő helyi URL-t nyisd meg a böngészőben.

## Éles build ellenőrzése
```bash
npm run build
npm run preview
```

## Projektstruktúra
```text
src/
  adatok.ts      # Típusok és kezdő adatok
  App.tsx        # Állapot, szűrés, összesítések
  Kartyak.tsx    # Kártyák listája
  Kartya.tsx     # Egy tanulószoba és a foglalási esemény
  main.tsx       # React belépési pont
  styles.css     # Reszponzív megjelenés
```
