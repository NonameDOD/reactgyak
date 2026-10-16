import type { Tanuloszoba } from './adatok'

type KartyaProps = {
  szoba: Tanuloszoba
  onFoglalas: (id: number) => void
}

const tipusIkon: Record<Tanuloszoba['szobatipus'], string> = {
  'egyéni tanulás': '◉',
  csoportmunka: '⌘',
  'számítógépes terem': '▣',
  'csendes olvasóterem': '▤',
}

export default function Kartya({ szoba, onFoglalas }: KartyaProps) {
  const megtelt = szoba.foglalt_helyek >= szoba.ferohely
  const szabadHelyek = szoba.ferohely - szoba.foglalt_helyek
  const foglaltsag = (szoba.foglalt_helyek / szoba.ferohely) * 100

  return (
    <article className={`room-card${megtelt ? ' room-card--full' : ''}`}>
      <div className="card-topline">
        <span className="room-icon" aria-hidden="true">{tipusIkon[szoba.szobatipus]}</span>
        {megtelt && <span className="full-badge">Megtelt</span>}
      </div>
      <p className="room-type">{szoba.szobatipus}</p>
      <h2>{szoba.szoba_nev}</h2>
      <p className="floor">{szoba.emelet}. emelet</p>

      <div className="capacity">
        <div className="capacity-heading">
          <span>Férőhelyek</span>
          <strong>{szoba.foglalt_helyek} <span>/ {szoba.ferohely}</span></strong>
        </div>
        <div
          className="progress-track"
          role="progressbar"
          aria-label={`${szoba.szoba_nev} foglaltsága`}
          aria-valuemin={0}
          aria-valuemax={szoba.ferohely}
          aria-valuenow={szoba.foglalt_helyek}
        >
          <div className={`progress-fill${megtelt ? ' progress-fill--full' : ''}`} style={{ width: `${foglaltsag}%` }} />
        </div>
        <p className="availability">{megtelt ? 'Nincs szabad hely' : `${szabadHelyek} szabad ${szabadHelyek === 1 ? 'hely' : 'hely'}`}</p>
      </div>

      <button
        className="reserve-button"
        type="button"
        disabled={megtelt}
        onClick={() => onFoglalas(szoba.id)}
      >
        {megtelt ? 'Nincs szabad hely' : 'Helyet foglalok'}
      </button>
    </article>
  )
}
