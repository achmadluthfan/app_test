import Link from 'next/link'
import PropTypes from 'prop-types'

import {
  ActionPlan,
  Agenda,
  Atribut,
  Ketentuan,
  Panduan,
  PpsmbFakultas,
  PpsmbSoftskills,
  PpsmbUniversitas,
} from './isi'

export function Kegiatan({ active }) {
  const menus = [
    { name: 'Agenda', path: 'agenda' },
    { name: '_PPSMB Universitas', path: 'ppsmb-universitas' },
    { name: '_PPSMB Fakultas/Sekolah', path: 'ppsmb-fakultas' },
    { name: '_PPSMB Softskills', path: 'ppsmb-softskills' },
    { name: '_Action Plan', path: 'action-plan' },
    { name: 'Atribut', path: 'atribut' },
    { name: 'Ketentuan', path: 'ketentuan' },
    { name: 'Panduan', path: 'panduan' },
  ]
  return (
    <div className="h-[100vh] w-full bg-green-500 px-[3%] pt-[80px] lg:px-[5%]">
      <div className="w-full rounded-[10px] bg-white px-[4%] py-[10px] font-rubik text-green-900 lg:hidden">
        Search
      </div>
      <div className="mt-[20px] flex h-[85%] flex-row rounded-[16px] bg-green-900 p-[5px] lg:mt-0 lg:rounded-[24px] lg:p-[10px]">
        <div className="ml-[10px] mr-[20px] hidden w-[23%] lg:block">
          <div className="mb-[40px] mt-[30px] rounded-[8px] bg-white px-[4%] py-[10px] font-rubik text-green-900">
            Search
          </div>
          {menus.map((menu) => (
            <div
              key={menu}
              className={`${menu.name[0] === '_' ? 'ml-[15px] mt-[10px]' : 'mt-[16px]'}`}
            >
              <Link href={`/kegiatan/${menu.path}`}>
                <button
                  type="button"
                  className="h-full w-full rounded-[8px] px-[4%] py-[10px] text-left text-left font-rubik text-white disabled:bg-green-500 disabled:text-green-900"
                  disabled={active === menu.path}
                >
                  {menu.name[0] === '_' ? menu.name.slice(1) : menu.name}
                </button>
              </Link>
            </div>
          ))}
        </div>
        <div className="h-full w-full rounded-[12px] bg-white lg:rounded-[20px]">
          {active === 'agenda' && <Agenda />}
          {active === 'ppsmb-universitas' && <PpsmbUniversitas />}
          {active === 'ppsmb-fakultas' && <PpsmbFakultas />}
          {active === 'ppsmb-softskills' && <PpsmbSoftskills />}
          {active === 'action-plan' && <ActionPlan />}
          {active === 'atribut' && <Atribut />}
          {active === 'ketentuan' && <Ketentuan />}
          {active === 'panduan' && <Panduan />}
        </div>
      </div>
    </div>
  )
}

Kegiatan.propTypes = {
  active: PropTypes.string,
}
Kegiatan.defaultProps = {
  active: 'agenda',
}
export default Kegiatan
