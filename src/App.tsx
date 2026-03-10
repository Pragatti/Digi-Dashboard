import './App.css'
import { useSelector } from 'react-redux'
import { Header } from './components/Header/Header'
import { Sidebar } from './components/Sidebar/Sidebar'
import { LightsCard } from './components/Cards/LightsCard'
import { WaterCard } from './components/Cards/WaterCard'
import { CarbonCard } from './components/Cards/CarbonCard'
import { EnergyCard } from './components/Cards/EnergyCard'
import { FootfallCard } from './components/Cards/FootfallCard'
import type { RootState } from './store'

const CARD_CONFIG = [
  { id: 'lights', component: LightsCard },
  { id: 'water', component: WaterCard },
  { id: 'carbon', component: CarbonCard },
  { id: 'energy', component: EnergyCard },
  { id: 'footfall', component: FootfallCard },
] as const

function App() {
  const activeCards = useSelector((state: RootState) => state.dashboard.activeCards)

  return (
    <div className="layout">
      <Header />
      <div className="layout-body">
        <Sidebar />
        <main className="main-content">
          {CARD_CONFIG.filter(card => activeCards.includes(card.id as (typeof activeCards)[number])).map(
            ({ id, component: Card }) => (
              <Card key={id} />
            ),
          )}
        </main>
      </div>
    </div>
  )
}

export default App
