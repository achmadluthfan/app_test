import Image from 'next/image'
import Link from 'next/link'

import { Button } from '../../../element/button/Button'

export function PpsmbSoftskills() {
  return (
    <div>
      <div className="mx-[10px] flex flex-row items-center gap-x-5 pt-[10px] lg:mx-[30px]">
        <Link href="/kegiatan/agenda">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="scale-150"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.15533 0.96967C6.44822 1.26256 6.44822 1.73744 6.15533 2.03033L2.93566 5.25H10.875C11.2892 5.25 11.625 5.58579 11.625 6C11.625 6.41421 11.2892 6.75 10.875 6.75H2.93566L6.15533 9.96967C6.44822 10.2626 6.44822 10.7374 6.15533 11.0303C5.86244 11.3232 5.38756 11.3232 5.09467 11.0303L0.59467 6.53033C0.301777 6.23744 0.301777 5.76256 0.59467 5.46967L5.09467 0.96967C5.38756 0.676777 5.86244 0.676777 6.15533 0.96967Z"
              fill="#1C2C11"
            />
          </svg>
        </Link>
        <h1 className="font medium font-rubik text-[12px] text-green-900 lg:text-[16px]">
          Kembali
        </h1>
      </div>
      <div className=" relative mx-[10px] mb-[5px] mt-[10px] w-fit overflow-hidden rounded-[12px] bg-yellow-600 lg:mx-[30px] lg:mb-[15px] lg:mt-[30px]">
        <Image
          src="/assets/HiasanKuning.png"
          alt=""
          width={1000}
          height={1000}
          className="absolute right-0 top-0 z-0 w-[400px] opacity-30"
        />
        <h1 className="relative z-10 mx-5 pt-5 font-rubik text-[24px] font-black text-white shadow-inner lg:text-[32px]">
          PPSMB Softskills
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
    </div>
  )
}

export default PpsmbSoftskills
