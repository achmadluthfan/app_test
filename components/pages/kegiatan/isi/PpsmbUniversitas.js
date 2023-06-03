/* eslint-disable react/jsx-key */
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { Button } from '../../../element/button/Button'

export function PpsmbUniversitas() {
  const HariPertama = [
    {
      time: '07:00-10:00 WIB',
      agenda: 'Upacara Pembukaan',
    },
    {
      time: '10:00-10:30 WIB',
      agenda: 'Sapa Co-Facilitator',
    },
    {
      time: '10:30-11:30 WIB',
      agenda: 'Kuliah Umum "UGM-ku, UGM-mu, UGM-kita',
    },
    {
      time: '11:30-12:00 WIB',
      agenda: 'Refleksi Kuliah Umum',
    },
    {
      time: '12:00-13:00 WIB',
      agenda: 'ISHOMA',
    },
    {
      time: '13:00-14:00 WIB',
      agenda: 'Studi Kasus Peraturan dan Integritas Akademik',
    },
    {
      time: '12:00-13:00 WIB',
      agenda: 'ISHOMA',
    },
    {
      time: '13:00-14:00 WIB',
      agenda: 'Studi Kasus Peraturan dan Integritas Akademik',
    },
  ]
  const HariKedua = [
    {
      time: '07:00-10:00 WIB',
      agenda: 'Upacara Pembukaan',
    },
    {
      time: '10:00-10:30 WIB',
      agenda: 'Sapa Co-Facilitator',
    },
    {
      time: '10:30-11:30 WIB',
      agenda: 'Kuliah Umum "UGM-ku, UGM-mu, UGM-kita',
    },
    {
      time: '11:30-12:00 WIB',
      agenda: 'Refleksi Kuliah Umum',
    },
    {
      time: '12:00-13:00 WIB',
      agenda: 'ISHOMA',
    },
    {
      time: '13:00-14:00 WIB',
      agenda: 'Studi Kasus Peraturan dan Integritas Akademik',
    },
    {
      time: '12:00-13:00 WIB',
      agenda: 'ISHOMA',
    },
    {
      time: '13:00-14:00 WIB',
      agenda: 'Studi Kasus Peraturan dan Integritas Akademik',
    },
  ]
  const [active, setActive] = useState(0)
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
      <div className=" relative mx-[10px] mb-[5px] mt-[10px] w-fit overflow-hidden rounded-[12px] bg-green-600 lg:mx-[30px] lg:mb-[15px] lg:mt-[30px]">
        <Image
          src="/assets/HiasanHijau.png"
          alt=""
          width={1000}
          height={1000}
          className="absolute right-0 top-0 z-0 w-[400px] opacity-30"
        />
        <h1 className="relative z-10 mx-5 pt-5 font-rubik text-[24px] font-black text-white shadow-inner lg:text-[32px]">
          PPSMB Universitas
        </h1>

        <h1 className="mx-5 font-rubik text-[14px] font-bold text-white lg:text-[18px]">
          Rabu-Kamis, 1-2 Agustus 2023
        </h1>
        <p className="relative z-10 p-5 text-justify text-[12px] text-white lg:pr-[269px] lg:text-[16px]">
          PPSMB Universitas merupakan pembelajaran sukses bagi Gamada untuk mengembangkan jiwa
          ke-UGM-an dengan pengenalan sejarah, filosofi dan nilai-nilai, visi, misi, kegiatan
          tridharma, dan lainnya. Dengan menerapkan nilai-nilai luhur dan jati diri Universitas,
          serta menjunjung tinggi nilai-nilai pancasila, diharapkan Gamada juga dapat menjadi
          manusia susila yang siap menjadi &lsquo;SANG JUARA&rsquo; &#40;Santun, Adil, Nasionalis,
          Gembira, Jujur, Unggul, Amanah, Religius, dan Andal&#41;.
        </p>
      </div>
      <div className="m-[10px] flex flex-row  items-center justify-center rounded-[8px] bg-neutral-50 px-[6px] py-[6px] lg:mx-[30px] lg:mb-[15px] lg:mt-[16px] lg:px-[30px]">
        <Button
          className="mx-[6px] my-[6px] block w-[174px]"
          type="primary"
          size="xs"
          color="orange"
          onClick={() => setActive(0)}
        >
          Hari Pertama
        </Button>
        <Button
          className="mx-[6px] my-[6px] block w-[174px]"
          type="primary"
          size="xs"
          color="orange"
          onClick={() => setActive(1)}
        >
          Hari Kedua
        </Button>
      </div>
      <div className={`${active === 0 ? '' : 'hidden'} relative h-[50vh] w-full overflow-y-scroll`}>
        {HariPertama.map(({ time, agenda }) => {
          return (
            <div className="mx-[10px] my-[15px] flex flex-row  items-center justify-between rounded-[8px] bg-neutral-50 px-[10px] py-[14px] lg:mx-[30px] lg:mb-[15px] lg:mt-[16px] lg:px-[30px]">
              <div className="flex flex-row items-center gap-x-[10px] lg:gap-x-[30px]">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="scale-150"
                >
                  <circle cx="6" cy="6" r="6" fill="#B9E59A" />
                </svg>
                <h1 className="w-[96px] font-rubik text-[12px] font-medium text-green-900 lg:w-[127.5px] lg:text-[16px]">
                  {time}
                </h1>
                <svg
                  width="3"
                  height="20"
                  viewBox="0 0 3 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="3" height="20" rx="1.5" fill="#B9E59A" />
                </svg>
                <h1 className="w-[150px] font-rubik text-[12px] font-medium text-green-900 sm:w-[300px] lg:w-[500px] lg:text-[16px] ">
                  {agenda}
                </h1>
              </div>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="scale-150"
              >
                <path
                  d="M17.125 9C17.125 4.51289 13.4871 0.875 9 0.875C4.51289 0.875 0.875 4.51289 0.875 9C0.875 13.4871 4.51289 17.125 9 17.125C13.4871 17.125 17.125 13.4871 17.125 9ZM12.3762 8.30586L9.48047 11.7859C9.42181 11.8564 9.34837 11.9132 9.26533 11.9521C9.1823 11.991 9.09171 12.0112 9 12.0112C8.90829 12.0112 8.8177 11.991 8.73467 11.9521C8.65163 11.9132 8.57818 11.8564 8.51953 11.7859L5.62383 8.30586C5.54794 8.2146 5.4996 8.10361 5.48448 7.98588C5.46936 7.86815 5.48807 7.74855 5.53843 7.64107C5.58879 7.53359 5.66872 7.44267 5.76886 7.37895C5.869 7.31523 5.98521 7.28134 6.10391 7.28125H11.8961C12.0148 7.28134 12.131 7.31523 12.2311 7.37895C12.3313 7.44267 12.4112 7.53359 12.4616 7.64107C12.5119 7.74855 12.5306 7.86815 12.5155 7.98588C12.5004 8.10361 12.4521 8.2146 12.3762 8.30586Z"
                  fill="#6CC854"
                />
              </svg>
            </div>
          )
        })}
      </div>
      <div className={`${active === 1 ? '' : 'hidden'} relative h-[50vh] w-full overflow-y-scroll`}>
        {HariKedua.map(({ time, agenda }) => {
          return (
            <div className="mx-[10px] my-[15px] flex flex-row  items-center justify-between rounded-[8px] bg-neutral-50 px-[10px] py-[14px] lg:mx-[30px] lg:mb-[15px] lg:mt-[16px] lg:px-[30px]">
              <div className="flex flex-row items-center gap-x-[10px] lg:gap-x-[30px]">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="scale-150"
                >
                  <circle cx="6" cy="6" r="6" fill="#B9E59A" />
                </svg>
                <h1 className="w-[96px] font-rubik text-[12px] font-medium text-green-900 lg:w-[127.5px] lg:text-[16px]">
                  {time}
                </h1>
                <svg
                  width="3"
                  height="20"
                  viewBox="0 0 3 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="3" height="20" rx="1.5" fill="#B9E59A" />
                </svg>
                <h1 className="w-[150px] font-rubik text-[12px] font-medium text-green-900 sm:w-[300px] lg:w-[500px] lg:text-[16px] ">
                  {agenda}
                </h1>
              </div>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="scale-150"
              >
                <path
                  d="M17.125 9C17.125 4.51289 13.4871 0.875 9 0.875C4.51289 0.875 0.875 4.51289 0.875 9C0.875 13.4871 4.51289 17.125 9 17.125C13.4871 17.125 17.125 13.4871 17.125 9ZM12.3762 8.30586L9.48047 11.7859C9.42181 11.8564 9.34837 11.9132 9.26533 11.9521C9.1823 11.991 9.09171 12.0112 9 12.0112C8.90829 12.0112 8.8177 11.991 8.73467 11.9521C8.65163 11.9132 8.57818 11.8564 8.51953 11.7859L5.62383 8.30586C5.54794 8.2146 5.4996 8.10361 5.48448 7.98588C5.46936 7.86815 5.48807 7.74855 5.53843 7.64107C5.58879 7.53359 5.66872 7.44267 5.76886 7.37895C5.869 7.31523 5.98521 7.28134 6.10391 7.28125H11.8961C12.0148 7.28134 12.131 7.31523 12.2311 7.37895C12.3313 7.44267 12.4112 7.53359 12.4616 7.64107C12.5119 7.74855 12.5306 7.86815 12.5155 7.98588C12.5004 8.10361 12.4521 8.2146 12.3762 8.30586Z"
                  fill="#6CC854"
                />
              </svg>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PpsmbUniversitas
