import Image from 'next/image'
import { useState } from 'react'
export function Welcome() {
  const [active, setActive] = useState(false)
  return (
    <div
      style={{
        backgroundImage: 'url("/assets/background.png")',
        backgroundSize: 'cover',
        paddingTop: '20px',
        overflow: 'hidden',
      }}
    >
      <h1 className="flex justify-center font-rubik text-2xl font-medium text-blue-900 sm:text-3xl md:text-4xl lg:text-6xl">
        Selamat Datang
      </h1>
      <h1 className="text-stroke-trick absolute left-[50%] top-24 flex translate-x-[-50%] justify-center font-damion text-2xl font-medium text-blue-400 sm:text-3xl md:text-4xl lg:top-28 lg:text-6xl">
        Gamada!
      </h1>
      <div className="flex flex-col-reverse items-center justify-center gap-x-5 px-5 py-20 lg:flex-row">
        <div className="grid grid-cols-2 gap-x-5 gap-y-5 p-5 lg:flex lg:flex-col">
          <div
            className="rounded-2xl border-4 border-orange-500 bg-white  shadow-[1px_1px_4px_0px_#000000] duration-300 hover:scale-[101%] hover:cursor-pointer"
            onClick={() => setActive(true)}
          >
            <div className="flex flex-row items-center px-3 py-1 lg:px-5 lg:py-3">
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=""
              >
                <g filter="url(#filter0_di_473_11576)">
                  <path
                    d="M26 4.5C15.2478 4.5 6.5 13.2478 6.5 24C6.5 34.7522 15.2478 43.5 26 43.5C36.7522 43.5 45.5 34.7522 45.5 24C45.5 13.2478 36.7522 4.5 26 4.5ZM33.0097 24.8719L22.28 31.3538C22.1262 31.4459 21.9507 31.4955 21.7714 31.4974C21.5921 31.4993 21.4156 31.4535 21.2598 31.3646C21.1041 31.2758 20.9748 31.1471 20.8852 30.9918C20.7956 30.8365 20.749 30.6602 20.75 30.4809V17.5191C20.749 17.3398 20.7956 17.1635 20.8852 17.0082C20.9748 16.8529 21.1041 16.7242 21.2598 16.6354C21.4156 16.5465 21.5921 16.5007 21.7714 16.5026C21.9507 16.5045 22.1262 16.5541 22.28 16.6462L33.0097 23.1281C33.1592 23.2192 33.2829 23.3473 33.3686 23.5C33.4544 23.6527 33.4995 23.8249 33.4995 24C33.4995 24.1751 33.4544 24.3473 33.3686 24.5C33.2829 24.6527 33.1592 24.7808 33.0097 24.8719Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_di_473_11576"
                    x="-4"
                    y="-4"
                    width="64"
                    height="64"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="2" dy="4" />
                    <feGaussianBlur stdDeviation="4" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.282353 0 0 0 0 0.121569 0 0 0 0 0.0509804 0 0 0 0.2 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_473_11576"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_473_11576"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="2" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.282353 0 0 0 0 0.121569 0 0 0 0 0.0509804 0 0 0 0.3 0"
                    />
                    <feBlend mode="normal" in2="shape" result="effect2_innerShadow_473_11576" />
                  </filter>
                </defs>
              </svg>
              <div className="flex flex-col">
                <h1 className="font-rubik text-[10px] font-semibold text-orange-900 sm:text-[16px] md:text-[20px]">
                  Sambutan Rektor UGM
                </h1>
                <h1 className="hidden font-rubik text-xl text-orange-700 lg:block">
                  Prof. dr. Ova Emilia, M.Med., Ed., Sp.OG(K)., Ph.D.
                </h1>
              </div>
            </div>
          </div>
          <div
            className="rounded-2xl border-4 border-blue-300 bg-white  shadow-[1px_1px_4px_0px_#000000] duration-300 hover:scale-[101%] hover:cursor-pointer"
            onClick={() => setActive(false)}
          >
            <div className="flex flex-row items-center justify-start px-3 py-1 lg:px-5 lg:py-3">
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=""
              >
                <g filter="url(#filter0_di_473_11576)">
                  <path
                    d="M26 4.5C15.2478 4.5 6.5 13.2478 6.5 24C6.5 34.7522 15.2478 43.5 26 43.5C36.7522 43.5 45.5 34.7522 45.5 24C45.5 13.2478 36.7522 4.5 26 4.5ZM33.0097 24.8719L22.28 31.3538C22.1262 31.4459 21.9507 31.4955 21.7714 31.4974C21.5921 31.4993 21.4156 31.4535 21.2598 31.3646C21.1041 31.2758 20.9748 31.1471 20.8852 30.9918C20.7956 30.8365 20.749 30.6602 20.75 30.4809V17.5191C20.749 17.3398 20.7956 17.1635 20.8852 17.0082C20.9748 16.8529 21.1041 16.7242 21.2598 16.6354C21.4156 16.5465 21.5921 16.5007 21.7714 16.5026C21.9507 16.5045 22.1262 16.5541 22.28 16.6462L33.0097 23.1281C33.1592 23.2192 33.2829 23.3473 33.3686 23.5C33.4544 23.6527 33.4995 23.8249 33.4995 24C33.4995 24.1751 33.4544 24.3473 33.3686 24.5C33.2829 24.6527 33.1592 24.7808 33.0097 24.8719Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_di_473_11576"
                    x="-4"
                    y="-4"
                    width="64"
                    height="64"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="2" dy="4" />
                    <feGaussianBlur stdDeviation="4" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.282353 0 0 0 0 0.121569 0 0 0 0 0.0509804 0 0 0 0.2 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_473_11576"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_473_11576"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="2" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.282353 0 0 0 0 0.121569 0 0 0 0 0.0509804 0 0 0 0.3 0"
                    />
                    <feBlend mode="normal" in2="shape" result="effect2_innerShadow_473_11576" />
                  </filter>
                </defs>
              </svg>
              <div className="flex flex-col">
                <h1 className="font-rubik text-[10px] font-semibold text-blue-500 sm:text-[16px] md:text-[20px]">
                  Sambutan Koordinator PPSMB UGM
                </h1>
                <h1 className="hidden font-rubik text-xl text-blue-500 lg:block">
                  Zaid Muhammad Abudzar
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: ``,
          }}
        />
        <iframe
          className={`h-[200px] w-full rounded-2xl border-4 border-blue-500 sm:h-[250px] sm:max-w-sm md:h-[200px] md:max-w-md lg:h-[300px] lg:max-w-lg xl:h-[250px] xl:w-[500px] ${
            active == true ? 'hidden' : 'block'
          }`}
          src=""
          title="Sambutan Koordinator Umum"
          allowFullScreen
          srcDoc={`
          <html>
            <head>
              <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.7/dist/tailwind.min.css" rel="stylesheet">
            </head>
            <body class="">
              <img src="/assets/topIframe.png" alt="Image" class="absolute top-0 right-0 w-1/3 z-50 md:w-1/4">
              <img src="/assets/bottomIframe.png" alt="Image" class="absolute bottom-0 left-0 w-1/3 z-50 md:w-1/4">
              <iframe
                src="/assets/meme-memes.gif"
                title="YouTube Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allowFullScreen"
                allowFullScreen
                class="absolute z-0 h-full w-full  "
              />
            </body>
          </html>
        `}
        />
        <iframe
          className={`h-[200px] w-full rounded-2xl border-4 border-blue-500 sm:h-[250px] sm:max-w-sm md:h-[200px] md:max-w-md lg:h-[300px] lg:max-w-lg xl:h-[250px] xl:w-[500px] ${
            active == true ? 'block' : 'hidden'
          }`}
          src=""
          title="Sambutan Rektor UGM"
          allowFullScreen
          srcDoc={`
          <html>
            <head>
              <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.7/dist/tailwind.min.css" rel="stylesheet">
            </head>
            <body class="">
              <img src="/assets/topIframe.png" alt="Image" class="absolute top-0 right-0 w-1/3 z-50 md:w-1/4">
              <img src="/assets/bottomIframe.png" alt="Image" class="absolute bottom-0 left-0 w-1/3 z-50 md:w-1/4">
              <iframe
                src="/assets/ukt.png"
                title="YouTube Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allowFullScreen"
                allowFullScreen
                class="absolute z-0 h-full w-full  "
              />
            </body>
          </html>
        `}
        />
      </div>
      {/* Tentang */}
      <div className="grid grid-rows-2 gap-y-5 px-5 py-12 lg:grid-cols-2">
        <Image src="/assets/logo.png" alt="" height={300} width={300} className="mx-auto block" />
        <div className="flex flex-col items-center justify-center lg:items-start">
          <h1 className="font-rubik text-3xl font-medium text-blue-900">Tentang PPSMB</h1>
          <h1 className="font-damion text-5xl font-medium text-blue-400">Pionir Gadjah Mada</h1>
          <p className="py-5 text-center font-rubik text-blue-900 lg:text-justify xl:w-4/5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
            dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem
            sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit,
            sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac
            scelerisque ante pulvinar.
          </p>
          <button className="w-1/2 rounded-xl border-2 border-orange-500 bg-orange-500 px-5 py-3 font-rubik font-bold text-white duration-300 hover:border-2 hover:border-orange-500 hover:bg-white hover:text-orange-500 md:text-xl xl:text-2xl">
            Lihat Selengkapnya
          </button>
        </div>
      </div>
    </div>
  )
}

export default Welcome
