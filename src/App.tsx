import { useMemo, useState } from 'react'
import Kartyak from './Kartyak'
import { TANULOSZOBAK, type Szobatipus, type Tanuloszoba } from './adatok'

const tipusok: Array<'mindegyik' | Szobatipus> = [
  'mindegyik',
  'egyéni tanulás',
  'csoportmunka',
  'számítógépes terem',
  'csendes olvasóterem',
]

export default function App() {
  const [szobak, setSzobak] = useState<Tanuloszoba[]>(TANULOSZOBAK)
  const [kivalasztottTipus, setKivalasztottTipus] = useState<'mindegyik' | Szobatipus>('mindegyik')

  const szurtSzobak = useMemo(
    () => szobak.filter((szoba) => kivalasztottTipus === 'mindegyik' || szoba.szobatipus === kivalasztottTipus),
    [szobak, kivalasztottTipus],
  )

  const osszesFerohely = szobak.reduce((sum, szoba) => sum + szoba.ferohely, 0)
  const foglaltHelyek = szobak.reduce((sum, szoba) => sum + szoba.foglalt_helyek, 0)
  const szabadHelyek = osszesFerohely - foglaltHelyek

  function helyetFoglal(id: number) {
    setSzobak((aktualis) =>
      aktualis.map((szoba) =>
        szoba.id === id && szoba.foglalt_helyek < szoba.ferohely
          ? { ...szoba, foglalt_helyek: szoba.foglalt_helyek + 1 }
          : szoba,
      ),
    )
  }

  return (
    <main className="app-shell">
      <header className="hero">
        <div className="hero-inner">
          <div className="brand-mark" aria-hidden="true">t.</div>
          <p className="eyebrow">TANULJ A SAJÁT TEMPÓDBAN</p>
          <h1>Találd meg a <em>helyed.</em></h1>
          <p className="hero-copy">Inspiráló terek a fókuszált tanuláshoz és a közös ötleteléshez.</p>
          <div className="summary">
            <div><strong>{szobak.length}</strong><span>tanulószoba</span></div>
            <div><strong>{szabadHelyek}</strong><span>szabad hely</span></div>
            <div><strong>{foglaltHelyek}<small>/{osszesFerohely}</small></strong><span>lefoglalt hely</span></div>
          </div>
        </div>
        <div className="hero-decoration hero-decoration--one" />
        <div className="hero-decoration hero-decoration--two" />
      </header>

      <section className="content">
        <div className="section-heading">
          <div>
            <p className="eyebrow">VÁLASZD KI A TERED</p>
            <h2>Tanulószobák</h2>
            <p className="section-copy">Találd meg a feladatodhoz leginkább illő környezetet.</p>
          </div>
          <label className="filter">
            <span>Szobatípus</span>
            <select value={kivalasztottTipus} onChange={(event) => setKivalasztottTipus(event.target.value as 'mindegyik' | Szobatipus)}>
              {tipusok.map((tipus) => (
                <option key={tipus} value={tipus}>{tipus === 'mindegyik' ? 'Minden típus' : tipus}</option>
              ))}
            </select>
          </label>
        </div>
        <Kartyak szobak={szurtSzobak} onFoglalas={helyetFoglal} />
        <footer className="footer">
          <span>Tanulószobák</span>
          <span>Készülj fel. Koncentrálj. Haladj.</span>
        </footer>
      </section>
    </main>
  )
}
