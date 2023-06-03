/* eslint-disable no-undef */
import Link from 'next/link'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

function Icon({ active = true }) {
  return (
    <div className={`toggle__container ${active ? 'active' : ''}`}>
      <div className={`toggle ${active ? 'no-animation active' : ''} toggle__one`} />
      <div className={`toggle ${active ? 'no-animation active' : 'active'} toggle__two`} />
      <div className={`toggle ${active ? 'no-animation active' : 'active'} toggle__three`} />
    </div>
  )
}
Icon.propTypes = {
  active: PropTypes.bool,
}

Icon.defaultProps = {
  active: true,
}

export function Navbar() {
  const [yOffset, setYOffset] = useState(typeof window !== 'undefined' ? window?.pageYOffset : 0)
  const [visible, setVisible] = useState(true)
  const [dropDown, setDropDown] = useState(false)
  const [dropDownChild, setdropDownChild] = useState(new Array(3).fill(false))
  const [routeNum, setRouteNum] = useState(0)

  function handleScroll() {
    const currentYOffset = window.scrollY
    const naik = yOffset >= currentYOffset

    setYOffset(currentYOffset)
    setVisible(naik)
    setDropDown(dropDown && visible)
    setdropDownChild(dropDownChild.map((item) => item && visible))
  }

  const router = useRouter()

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })
  const routes = [
    {
      path: '/',
      name: 'Beranda',
      key: 'Beranda',
    },
    {
      path: '/kegiatan',
      name: 'Kegiatan',
      key: 'Kegiatan',
      num: 0,
      children: [
        {
          name: 'Agenda',
          value: 'agenda',
          key: 'Agenda',
        },
        {
          name: 'Atribut',
          value: 'atribut',
          key: 'Atribut',
        },
        {
          name: 'Ketentuan',
          value: 'ketentuan',
          key: 'Ketentuan',
        },
        {
          name: 'Panduan',
          value: 'panduan',
          key: 'Panduan',
        },
      ],
    },
    {
      path: '/sesuatu',
      name: 'Sesuatu',
      key: 'Sesuatu',
    },
    {
      path: '/palapedia',
      name: 'Palapedia',
      key: 'Palapedia',
    },
    {
      path: '/AR',
      name: 'AR',
      key: 'AR',
    },
    {
      path: '/FAQ',
      name: 'FAQ',
      key: 'FAQ',
    },
  ]
  const styles = {
    active: {
      visibility: 'visible',
      transition: 'all 0.5s',
      position: 'fixed',
    },
    hidden: {
      visibility: 'hidden',
      transition: 'all 0.5s',
      transform: 'translateY(-100%)',
      position: 'fixed',
    },
  }
  return (
    <nav
      className={`border-c-01 bg-white px-2 py-2 sm:px-4 md:rounded-none lg:py-0 ${
        dropDown ? 'rounded-b-3xl' : ''
      } z-[9999] w-[100vw]`}
      style={visible ? styles.active : styles.hidden}
    >
      <div className=" mx-auto flex flex-wrap items-center justify-between lg:justify-around">
        <Link href="/" className="flex flex-row">
          {/* <div className="flex w-2/3 md:h-full md:w-full  ">
            <Image src="/PPSMB.png" alt="PPSMB Logo" width={146.33} height={43} />
          </div> */}
          <span className="text-2xl font-semibold text-blue-600">PPSMB PIONIR</span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 focus:outline-none lg:hidden "
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setDropDown(!dropDown)}
        >
          <Icon active={dropDown} />
        </button>
        <div
          className={`w-full items-center lg:flex lg:w-auto lg:flex-row ${
            dropDown ? '' : 'hidden'
          }`}
          id="menu_mobile"
        >
          <ul
            className="
                    item-center
                    relative
                    pt-4 text-base
                    text-gray-700
                    lg:flex 
                    lg:justify-between
                    lg:pt-0"
          >
            {routes.map((route) => {
              // untuk route yang dropdown
              if (route.children !== undefined) {
                return (
                  <li key={route.key}>
                    <button
                      type="submit"
                      id="dropdownNavbarLink"
                      data-dropdown-toggle="dropdownNavbar"
                      className="font-poppins text-md hover:text-c-01 flex w-full items-center justify-center rounded py-2 font-semibold text-white md:p-4"
                      onClick={() => {
                        setRouteNum(route.num)

                        setdropDownChild(
                          dropDownChild.map((item, index) => {
                            if (index === route.num) {
                              return !item
                            }
                            return false
                          }),
                        )
                      }}
                    >
                      <p
                        className={`hover:text-blue-600 ${
                          router.pathname.includes(route.path)
                            ? 'border-b-4 border-orange-500 text-blue-600'
                            : 'text-blue-600'
                        }`}
                      >
                        {route.name}
                      </p>
                      <svg
                        className="ml-1 h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    <div
                      id="dropdownNavbar"
                      className={`z-10 mx-auto w-44  items-center justify-center divide-y divide-gray-100 bg-black font-normal lg:fixed  ${
                        dropDownChild[routeNum] ? 'flex lg:flex' : 'hidden lg:hidden'
                      }`}
                    >
                      <ul className="py-1 text-sm text-white" aria-labelledby="dropdownLargeButton">
                        {route.children.map((child) => (
                          <li key={child.value}>
                            <Link
                              href={`${route.path}/${child.value}`}
                              className="hover:text-c-01 text-md font-poppins block px-4 py-2 font-semibold"
                              onClick={() => setdropDownChild(dropDownChild.map(() => false))}
                            >
                              {child.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                )
              }

              // untuk route yang tidak dropdown
              return (
                <li key={route.key}>
                  <Link href={route.path} className="flex justify-center py-2 md:p-4">
                    <div className="mx-5 flex">
                      <span
                        className={`font-poppins text-md hover:text-c-01 self-center whitespace-nowrap font-semibold  ${
                          router.pathname.includes(route.path)
                            ? 'border-b-4 border-orange-500 text-blue-600'
                            : 'text-blue-600'
                        }`}
                      >
                        {route.name}
                      </span>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
