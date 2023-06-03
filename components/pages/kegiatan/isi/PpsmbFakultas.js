/* eslint-disable react/jsx-key */
import Image from 'next/image'
import Link from 'next/link'

export function PpsmbFakultas() {
  const data = [
    {
      image: '/assets/PPSMBFakultas/metamorphoself.png',
      nama: 'Metamorphoself',
      fakultas: 'Fakultas Biologi',
    },
    {
      image: '/assets/PPSMBFakultas/simfoni.png',
      nama: 'Simfoni',
      fakultas: 'Fakultas Ekononika dan Bisnis',
    },
    {
      image: '/assets/PPSMBFakultas/papyrus.png',
      nama: 'Papyrus',
      fakultas: 'Fakultas Farmasi',
    },
    {
      image: '/assets/PPSMBFakultas/dialektika.png',
      nama: 'Dialektika',
      fakultas: 'Fakultas Filsafat',
    },
    {
      image: '/assets/PPSMBFakultas/geospace.png',
      nama: 'Geospace',
      fakultas: 'Fakultas Geografi',
    },
    {
      image: '/assets/PPSMBFakultas/kolaborasi.png',
      nama: 'Kolaborasi',
      fakultas: 'Fakultas Hukum',
    },
    {
      image: '/assets/PPSMBFakultas/kampung-budaya.png',
      nama: 'kampung-budaya',
      fakultas: 'Fakultas Ilmu Budaya',
    },
    {
      image: '/assets/PPSMBFakultas/society.png',
      nama: 'Society',
      fakultas: 'Fakultas Ilmu Sosial dan Politik',
    },
    {
      image: '/assets/PPSMBFakultas/identistry.png',
      nama: 'I-dentistry',
      fakultas: 'Fakultas Kedokteran Gigi',
    },
    {
      image: '/assets/PPSMBFakultas/vetebrae.png',
      nama: 'Vetebrae',
      fakultas: 'Fakultas Kedokteran Hewan',
    },
    {
      image: '/assets/PPSMBFakultas/morfogenesis.png',
      nama: 'Morfogenesis',
      fakultas: 'Fakultas Kedokteran Kesehatan Masyarakat dan Keperawatan',
    },
    {
      image: '/assets/PPSMBFakultas/pelestari.png',
      nama: 'Pelestari',
      fakultas: 'Fakultas Kehutanan',
    },
    {
      image: '/assets/PPSMBFakultas/pascal.png',
      nama: 'Pascal',
      fakultas: 'Fakultas Matematika dan Ilmu Pengetahuan Alam',
    },
    {
      image: '/assets/PPSMBFakultas/organik.png',
      nama: 'Organik',
      fakultas: 'Fakultas Pertanian',
    },
    {
      image: '/assets/PPSMBFakultas/rancher.png',
      nama: 'Rancher',
      fakultas: 'Fakultas Peternakan',
    },
    {
      image: '/assets/PPSMBFakultas/prk.png',
      nama: 'Psikologi Rumah Kita',
      fakultas: 'Fakultas Psikologi',
    },
    {
      image: '/assets/PPSMBFakultas/kesatria.png',
      nama: 'Kesatria',
      fakultas: 'Fakultas Teknik',
    },
    {
      image: '/assets/PPSMBFakultas/agrophoria.png',
      nama: 'Agophoria',
      fakultas: 'Fakultas Teknologi Pertanian',
    },
    {
      image: '/assets/PPSMBFakultas/permadani.png',
      nama: 'Permadani',
      fakultas: 'Sekolah Vokasi',
    },
  ]
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
      <div className=" relative mx-[10px] mb-[5px] mt-[10px] w-fit overflow-hidden rounded-[12px] bg-pink-600 lg:mx-[30px] lg:mb-[15px] lg:mt-[30px]">
        <Image
          src="/assets/HiasanPink.png"
          alt=""
          width={1000}
          height={1000}
          className="absolute right-0 top-0 z-0 w-[400px] opacity-30"
        />
        <h1 className="relative z-10 mx-5 pt-5 font-rubik text-[24px] font-black text-white shadow-inner lg:text-[32px]">
          PPSMB Fakultas
        </h1>

        <h1 className="mx-5 font-rubik text-[14px] font-bold text-white lg:text-[18px]">
          Rabu-Kamis, 1-2 Agustus 2023
        </h1>
        <p className="relative z-10 p-5 text-justify text-[12px] text-white lg:pr-[269px] lg:text-[16px]">
          PPSMB Fakultas/Sekolah merupakan rangkaian kegiatan orientasi dan pengenalan lingkungan
          kampus tingkat fakultas dengan anggota yang terdiri dari mahasiswa fakultas tersebut.
          PPSMB Fakultas/Sekolah bertujuan mengajak mahasiswa untuk lebih mengenal sejarah,
          filosofi, nilai-nilai, visi, dan misi. Rangkaian kegiatan ini juga berfokus pada
          pengenalan kompetensi dan pengembangan diri mahasiswa terkait keilmuan setiap
          Fakultas/Sekolah.
        </p>
      </div>
      <div className="relative grid max-h-[70vh] grid-cols-2 overflow-y-scroll lg:max-h-[60vh] lg:grid-cols-3">
        {data.map(({ image, nama, fakultas }) => {
          return (
            <div className="mb-[10px] ml-[10px] flex flex-col items-center justify-between rounded-[20px] bg-neutral-50 px-[6px] py-[6px] font-rubik font-medium lg:mb-[15px] lg:ml-[30px] lg:mr-[15px] lg:mt-[16px] lg:px-[30px]">
              <Image
                src={image}
                alt=""
                width={100}
                height={100}
                className="mx-auto my-auto block py-[20px]"
              />
              <div className="flex flex-col">
                <h1 className="text-center text-[12px] font-medium text-green-900 lg:text-[16px]">
                  {nama}
                </h1>
                <h1 className="mb-[43px] text-center text-[10px] font-medium text-green-600 lg:text-[14px]">
                  {fakultas}
                </h1>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PpsmbFakultas
