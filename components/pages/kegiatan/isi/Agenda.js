/* eslint-disable react/jsx-key */
import Image from 'next/image'
import Link from 'next/link'

export function Agenda() {
  const data = [
    {
      image: '/assets/PPSMBUniversitas.png',
      title: 'PPSMB Universitas',
      date: '31 Juli - 1 Agustus 2023',
      description:
        'PPSMB Universitas merupakan pembelajaran sukses bagi Gamada untuk mengembangkan jiwa ke-UGM-an dengan pengenalan...',
      link: '/kegiatan/ppsmb-universitas',
    },
    {
      image: '/assets/PPSMBFakultas.png',
      title: 'PPSMB Fakultas',
      date: '2 - 3 Agustus 2023',
      description:
        'PPSMB Fakultas/Sekolah merupakan rangkaian kegiatan orientasi dan pengenalan lingkungan kampus tingkat fakultas dengan...',
      link: '/kegiatan/ppsmb-fakultas',
    },
    {
      image: '/assets/PPSMBSoftskill.png',
      title: 'PPSMB Softskills',
      date: '4 - 5 Agustus 2023',
      description:
        'PPSMB Softskills merupakan serangkaian kegiatan yang berfokus pada pemberian materi terkait pembekalan mahasiswa terhadap...',
      link: '/kegiatan/ppsmb-softskills',
    },
    {
      image: '/assets/ActionPlan.png',
      title: 'Action Plan',
      date: '0 - 0 Agustus 2023',
      description:
        'Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus...',
      link: '/kegiatan/action-plan',
    },
  ]
  return (
    <>
      <div className=" relative mx-[10px] mb-[5px] mt-[10px] w-fit overflow-hidden rounded-[12px] bg-orange-500 lg:mx-[30px] lg:mb-[15px] lg:mt-[30px]">
        <Image
          src="/assets/HiasanOrange.png"
          alt=""
          width={1000}
          height={1000}
          className="absolute right-0 top-0 z-0 w-[400px] opacity-30"
        />
        <h1 className="relative z-10 mx-5 pt-5 font-rubik text-[24px] font-black text-white shadow-inner lg:text-[32px]">
          Agenda PPSMB PIONIR
        </h1>
        <p className="relative z-10 p-5 text-justify text-[12px] text-white lg:pr-[269px] lg:text-[16px]">
          Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum
          est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin
          lacus, ut interdum tellus elit sed risus.
        </p>
      </div>
      {data.map(({ image, title, date, description, link }) => {
        return (
          <Link href={`${link}`}>
            <div className="mx-[10px] my-[10px] rounded-[12px] bg-neutral-50 lg:mx-[30px] lg:my-[16px]">
              <div className="flex flex-row gap-x-[11px] py-[10px] pl-[9px]">
                <Image
                  src={image}
                  alt=""
                  height={1000}
                  width={1000}
                  className="h-[91px] w-[80px]"
                />
                <div className="flex flex-col items-start">
                  <div className="flex w-full flex-col lg:flex-row lg:justify-between lg:pr-[30px]">
                    <h1 className="font-rubik text-[16px] font-bold text-green-900 lg:text-[20px]">
                      {title}
                    </h1>
                    <h1 className="font-rubik text-[12px] font-medium text-orange-600 lg:text-[16px]">
                      {date}
                    </h1>
                  </div>
                  <h1 className="pr-[36px] font-rubik text-[10px] text-green-900  lg:text-[16px]">
                    {description}
                  </h1>
                </div>
              </div>
            </div>
          </Link>
        )
      })}
    </>
  )
}

export default Agenda
