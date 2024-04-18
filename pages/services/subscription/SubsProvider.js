import { useState } from 'react'

import SubsContext from '../Context'

function SubsProvider(props) {
  const [statusMessage, setStatusMessage] = useState([''])
  const CheckAndRequestPermission = async () => {
    // console.log('CheckAndRequestPermission')
    // request
    // setStatusMessage(() => [...statusMessage, 'Asking permission'])
    const permission = await Notification.requestPermission()
    // if (permission !== 'granted') {
    //   throw new Error('Notification not granted')
    // }
    // setStatusMessage(() => [...statusMessage, 'Permission ready to go!'])

    if (!('Notification' in window)) {
      throw new Error('No support from notification API')
    }
  }
  // Registering Service Worker
  const registerSW = async () => {
    if ('serviceWorker' in navigator) {
      // setStatusMessage(() => [...statusMessage, 'Registering...'])
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/',
      })
      // setStatusMessage(() => [...statusMessage, 'Success...'])
      return registration
    }
  }
  const init = async () => {
    // setStatusMessage(() => [...statusMessage, 'Starting process'])
    await CheckAndRequestPermission().then(async () => await registerSW())
    await registerSW()
  }

  const value = { init }
  return <SubsContext.Provider value={value}>{props.children}</SubsContext.Provider>
}

export default SubsProvider
