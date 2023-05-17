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
    <>
      <Hero />
      <Welcome />
      <Rangkaian />
      <Gugus />
      <Palapedia />
      <ARLayout />
      <FAQ />
    </>
  )
}
