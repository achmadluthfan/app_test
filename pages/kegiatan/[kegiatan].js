import { useRouter } from 'next/router'

import { DefaultLayout } from '../../components/layout'
import { Kegiatan } from '../../components/pages/kegiatan'

export default function Home() {
  const router = useRouter()
  const active = router.query.kegiatan
  return (
    <DefaultLayout title="PPSMB UGM 2023">
      <Kegiatan active={active} />
    </DefaultLayout>
  )
}
