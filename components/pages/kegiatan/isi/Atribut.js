import Image from 'next/image'

import { Button } from '../../../element/button/Button'

export function Atribut() {
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
          Atribut
        </h1>
        <p className="relative z-10 p-5 text-justify text-[12px] text-white lg:pr-[269px] lg:text-[16px]">
          Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum
          est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin
          lacus, ut interdum tellus elit sed risus.
        </p>
      </div>
      <div className="mx-[10px] my-[10px] h-[50vh] rounded-[12px] bg-neutral-50 lg:mx-[30px] lg:my-[16px]">
        <Image
          src="/assets/meme-memes.gif"
          alt=""
          width={0}
          height={0}
          className="h-[50vh] w-full"
        />
      </div>
      <Button className="mx-auto my-[20px] block" type="primary" size="xs" color="orange">
        Cek eLok
      </Button>
    </>
  )
}

export default Atribut
