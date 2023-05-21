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

export default function Home() {
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
