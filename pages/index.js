import { useContext, useEffect } from 'react'

import { DefaultLayout } from '../components/layout'
import {
  ARLayout,
  FAQ,
  Gugus,
  Hero,
  Palapedia,
  Rangkaian,
  Welcome,
} from '../components/pages/homepage'
import SubsContext from './services/Context'

export default function Home() {
  const { init } = useContext(SubsContext)

  useEffect(() => {
    const go = async () => {
      await init()
    }
    go()
  }, [])

  return (
    <DefaultLayout title="PPSMB UGM 2023">
      <Hero />
      <Welcome />
      <Rangkaian />
      <Gugus />
      <Palapedia />
      <ARLayout />
      <FAQ />
    </DefaultLayout>
  )
}
