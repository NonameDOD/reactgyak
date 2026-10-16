export type Szobatipus =
  | 'egyéni tanulás'
  | 'csoportmunka'
  | 'számítógépes terem'
  | 'csendes olvasóterem'

export type Tanuloszoba = {
  id: number
  szoba_nev: string
  szobatipus: Szobatipus
  emelet: number
  ferohely: number
  foglalt_helyek: number
}

export const TANULOSZOBAK: Tanuloszoba[] = [
  { id: 1, szoba_nev: 'Csendes kuckó', szobatipus: 'egyéni tanulás', emelet: 1, ferohely: 6, foglalt_helyek: 3 },
  { id: 2, szoba_nev: 'Kreatív műhely', szobatipus: 'csoportmunka', emelet: 2, ferohely: 8, foglalt_helyek: 5 },
  { id: 3, szoba_nev: 'Digitális labor', szobatipus: 'számítógépes terem', emelet: 1, ferohely: 4, foglalt_helyek: 4 },
  { id: 4, szoba_nev: 'Olvasóliget', szobatipus: 'csendes olvasóterem', emelet: 3, ferohely: 10, foglalt_helyek: 2 },
  { id: 5, szoba_nev: 'Ötletbuborék', szobatipus: 'csoportmunka', emelet: 2, ferohely: 6, foglalt_helyek: 6 },
  { id: 6, szoba_nev: 'Tanulósarok', szobatipus: 'egyéni tanulás', emelet: 1, ferohely: 5, foglalt_helyek: 1 },
]
