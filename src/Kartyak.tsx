import type { Tanuloszoba } from './adatok'
import Kartya from './Kartya'

type KartyakProps = {
  szobak: Tanuloszoba[]
  onFoglalas: (id: number) => void
}

export default function Kartyak({ szobak, onFoglalas }: KartyakProps) {
  if (szobak.length === 0) {
    return <p className="empty-state">Nincs a szűrésnek megfelelő tanulószoba.</p>
  }

  return (
    <section className="room-grid" aria-label="Tanulószobák">
      {szobak.map((szoba) => (
        <Kartya key={szoba.id} szoba={szoba} onFoglalas={onFoglalas} />
      ))}
    </section>
  )
}
