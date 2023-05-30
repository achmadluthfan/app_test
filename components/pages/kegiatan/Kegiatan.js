import { useState } from 'react'

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

export function Kegiatan() {
  const [active, setActive] = useState('Agenda')
  const menus = [
    'Agenda',
    '_PPSMB Universitas',
    '_PPSMB Fakultas/Sekolah',
    '_PPSMB Softskills',
    '_Action Plan',
    'Atribut',
    'Ketentuan',
    'Panduan',
  ]
  return (
    <div className="h-[100vh] w-full bg-green-500 px-[3%] pt-[30px] lg:px-[5%]">
      <div className="w-full rounded-[10px] bg-white px-[4%] py-[10px] font-rubik text-green-900 lg:hidden">
        Search
      </div>
      <div className="mt-[20px] flex h-[85%] flex-row rounded-[16px] bg-green-900 p-[5px] lg:mt-0 lg:rounded-[24px] lg:p-[10px]">
        <div className="ml-[10px] mr-[20px] hidden w-[23%] lg:block">
          <div className="mb-[40px] mt-[30px] rounded-[8px] bg-white px-[4%] py-[10px] font-rubik text-green-900">
            Search
          </div>
          {menus.map((menu) => (
            <div key={menu} className={`${menu[0] === '_' ? 'ml-[15px] mt-[10px]' : 'mt-[16px]'}`}>
              <button
                type="button"
                className="h-full w-full rounded-[8px] px-[4%] py-[10px] text-left text-left font-rubik text-white disabled:bg-green-500 disabled:text-green-900"
                disabled={active === (menu[0] === '_' ? menu.slice(1) : menu)}
                onClick={() => setActive(menu[0] === '_' ? menu.slice(1) : menu)}
              >
                {menu[0] === '_' ? menu.slice(1) : menu}
              </button>
            </div>
          ))}
        </div>
        <div className="h-full w-full rounded-[12px] bg-white lg:rounded-[20px]">
          {active === 'Agenda' && <Agenda />}
          {active === 'PPSMB Universitas' && <PpsmbUniversitas />}
          {active === 'PPSMB Fakultas/Sekolah' && <PpsmbFakultas />}
          {active === 'PPSMB Softskills' && <PpsmbSoftskills />}
          {active === 'Action Plan' && <ActionPlan />}
          {active === 'Atribut' && <Atribut />}
          {active === 'Ketentuan' && <Ketentuan />}
          {active === 'Panduan' && <Panduan />}
        </div>
      </div>
    </div>
  )
}

export default Kegiatan
