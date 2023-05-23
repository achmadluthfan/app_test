import Image from 'next/image'

import { Button } from '../../element/button'

export function Hero() {
  return (
    <div className="relative h-[100vh] w-full overflow-hidden bg-gradient-to-b from-blue-600 from-60% to-blue-300">
      <div className="mx-[3%] lg:mx-[5%]">
        <div className="relative z-50 mb-[4vh] mt-[22vh] text-center font-rubik text-3xl font-semibold text-white duration-300 sm:text-4xl md:text-5xl lg:mt-[40vh] lg:text-left xl:text-6xl 2xl:text-7xl">
          <h1>
            <span className="font-damion font-normal">Bakti</span> Gadjah Mada
            <br /> Pilar Intelektual <span className="font-damion font-normal">Nusantara</span>
          </h1>
        </div>
        <div className="text-md col-span-3 flex w-full justify-center sm:text-lg md:text-xl lg:justify-start xl:text-2xl">
          <div className="flex">
            <Button type="primary" color="orange" size="xs" className="z-50">
              Kegiatan
            </Button>
            <Button type="secondary" color="blue" size="xs" className="z-50 ml-[2vh]">
              Info Terkini
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[25%] right-[25%] z-10 h-[40%] w-[50%] translate-x-[50%] translate-y-[50%] rotate-[30deg] rounded-full bg-blue-300 blur-[80px] sm:-rotate-[30deg] lg:bottom-[30%] lg:right-[15%] lg:h-[50%]" />
      <div className="absolute bottom-[5%] right-0 z-20 max-w-[90%] translate-x-[20%] lg:translate-y-[20%]">
        <Image alt="Hero Banner Background" src="/assets/jalan.png" width={2500} height={2500} />
        <Image
          alt="Hero Banner Background"
          src="/assets/kotak1.png"
          width={2500}
          height={2500}
          className="absolute left-[35%] top-[25%] h-[22%] w-[15%] duration-300 hover:-translate-y-[10%]"
        />
        <Image
          alt="Hero Banner Background"
          src="/assets/kotak2.png"
          width={2500}
          height={2500}
          className="absolute left-[68%] top-[33%] h-[26%] w-[15%] duration-300 hover:-translate-y-[10%]"
        />
        <Image
          alt="Hero Banner Background"
          src="/assets/kotak3.png"
          width={2500}
          height={2500}
          className="absolute left-[38.7%] top-[64%] h-[14%] w-[10%] duration-300 hover:-translate-y-[10%]"
        />
        <Image
          alt="Hero Banner Background"
          src="/assets/kotak4.png"
          width={2500}
          height={2500}
          className="absolute left-[53%] top-[43%] h-[32%] w-[10%] duration-300 hover:-translate-y-[10%]"
        />
        <Image
          alt="Hero Banner Background"
          src="/assets/kotak5.png"
          width={2500}
          height={2500}
          className="absolute left-[58%] top-[17%] h-[20%] w-[15%] duration-300 hover:-translate-y-[10%]"
        />
        <Image
          alt="Hero Banner Background"
          src="/assets/kotak6.png"
          width={2500}
          height={2500}
          className="absolute left-[60%] top-[66%] h-[14%] w-[10%]"
        />
      </div>
      {/* <div className="absolute absolute inset-x-0 bottom-0 z-10 bg-[red]">
        <Image
          alt="Hero Banner Background"
          src="/assets/herobanner2.png"
          width={500}
          height={500}
          className="w-full"
        />
      </div> */}
    </div>
  )
}

export default Hero
