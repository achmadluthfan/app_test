import { DefaultLayout } from '../components/layout'
import { Kegiatan } from '../components/pages/kegiatan'

export default function Home() {
  return (
    <DefaultLayout title="PPSMB UGM 2023">
      <Kegiatan />
    </DefaultLayout>
  )
}
