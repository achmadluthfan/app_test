/* eslint-disable react/jsx-key */
import Image from 'next/image'
import Link from 'next/link'

export function Ketentuan() {
  const data = [
    {
      title: 'Ketentuan Keikutsertaan Mahasiswa',
      link: '#',
    },
    {
      title: 'Standar Operating Procedure Medis',
      link: '#',
    },
  ]
  return (
    <>
      <div className=" relative mx-[10px] mb-[15px] mt-[10px] w-fit overflow-hidden rounded-[12px] bg-orange-500 lg:mx-[30px] lg:mb-[15px] lg:mt-[30px]">
        <Image
          src="/assets/HiasanOrange.png"
          alt=""
          width={1000}
          height={1000}
          className="absolute right-0 top-0 z-0 w-[400px] opacity-30"
        />
        <h1 className="relative z-10 mx-5 pt-5 font-rubik text-[24px] font-black text-white shadow-inner lg:text-[32px]">
          Ketentuan
        </h1>
        <p className="relative z-10 p-5 text-justify text-[12px] text-white lg:pr-[269px] lg:text-[16px]">
          Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum
          est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin
          lacus, ut interdum tellus elit sed risus.
        </p>
      </div>
      {data.map(({ title, link }) => {
        return (
          <div className="mx-[10px] my-[15px] flex flex-row  items-center justify-between rounded-[12px] bg-neutral-50 px-[10px] py-[14px] lg:mx-[30px] lg:mb-[15px] lg:mt-[16px] lg:px-[30px]">
            <div className="flex flex-row items-center gap-x-[10px] lg:gap-x-[30px]">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="lg:scale-150"
              >
                <circle cx="6" cy="6" r="6" fill="#8AD357" />
              </svg>
              <h1 className="font-rubik text-[12px] font-medium text-green-900 lg:text-[16px]">
                {title}
              </h1>
            </div>
            <Link href={`${link}`}>
              <svg
                width="10"
                height="14"
                viewBox="0 0 10 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.42424 13.1719L8.79612 7.71172C8.89877 7.62371 8.98117 7.51453 9.03766 7.39168C9.09415 7.26883 9.1234 7.13522 9.1234 7C9.1234 6.86479 9.09415 6.73117 9.03766 6.60832C8.98117 6.48547 8.89877 6.37629 8.79612 6.28828L2.42424 0.828126C1.81604 0.307032 0.876587 0.739064 0.876587 1.53984V12.4617C0.876587 13.2625 1.81604 13.6945 2.42424 13.1719Z"
                  fill="#6CC854"
                />
              </svg>
            </Link>
          </div>
        )
      })}
    </>
  )
}

export default Ketentuan
