import { Button } from '../../element/button'

export function Hero() {
  return (
    <div className="relative h-[100vh] w-full overflow-hidden bg-blue-600">
      <div className="mx-[3%] lg:mx-[5%]">
        <div className="z-50 mb-[4vh] mt-[22vh] text-center font-rubik text-3xl font-semibold text-white duration-300 sm:text-4xl md:text-5xl lg:mt-[40vh] lg:text-left xl:text-6xl 2xl:text-7xl">
          <h1>
            <span className="font-damion font-normal">Bakti</span> Gadjah Mada
            <br /> Pilar Intelektual <span className="font-damion font-normal">Nusantara</span>
          </h1>
        </div>
        <div className="text-md z-50 col-span-3 flex w-full justify-center sm:text-lg md:text-xl lg:justify-start xl:text-2xl">
          <div className="flex">
            <Button type="primary" color="orange" size="xs">
              Kegiatan
            </Button>
            <Button type="secondary" color="blue" size="xs" className="ml-[2vh]">
              Info Terkini
            </Button>
          </div>
        </div>
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
