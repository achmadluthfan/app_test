import Image from 'next/image'

import { Button } from '../../../element/button/Button'

export function ActionPlan() {
  return (
    <>
      <div className=" relative mx-[10px] mb-[5px] mt-[10px] w-fit overflow-hidden rounded-[12px] bg-purple-600 lg:mx-[30px] lg:mb-[15px] lg:mt-[30px]">
        <Image
          src="/assets/HiasanUngu.png"
          alt=""
          width={1000}
          height={1000}
          className="absolute right-0 top-0 z-0 w-[400px] opacity-30"
        />
        <h1 className="relative z-10 mx-5 pt-5 font-rubik text-[24px] font-black text-white shadow-inner lg:text-[32px]">
          Action Plan
        </h1>

        <h1 className="mx-5 font-rubik text-[14px] font-bold text-white lg:text-[18px]">
          Rabu-Kamis, 1-2 Agustus 2023
        </h1>
        <p className="relative z-10 p-5 text-justify text-[12px] text-white lg:pr-[269px] lg:text-[16px]">
          PPSMB Softskills merupakan serangkaian kegiatan yang berfokus pada pemberian materi
          terkait pembekalan mahasiswa terhadap softskills yang mencakup keterampilan hidup,
          kemampuan adaptasi, dan time management. Pada sesi ini juga diberikan pengetahuan mengenai
          cara berinteraksi dan berkomunikasi dengan orang lain. Tujuan utama kegiatan ini ialah
          untuk mendorong mahasiswa aktif dalam pengembangan soft skills dalam upaya peningkatkan
          kualitas dan kompetensi diri untuk menjadi problem solver.
        </p>
      </div>
      <div className="mx-[10px] my-[10px] h-[50vh] rounded-[12px] bg-neutral-50 lg:mx-[30px] lg:my-[16px]">
        <Image src="/assets/meme-memes.gif" alt="" width={0} height={0} className="h-full w-full" />
      </div>
      <Button className="mx-auto my-[20px] block" type="primary" size="xs" color="orange">
        Cek eLok
      </Button>
    </>
  )
}

export default ActionPlan
