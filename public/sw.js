const baseUrl = 'http://localhost:1337/api'
const fetchUrl = (url) => baseUrl + url

const vapidKeys = {
  public: 'BISepn_tS0HuaBYCKaxktfE3mgO9uQeAUkHwIf_DFAN--0kq_zYShtXTDKp1ZAnT30K7Md6hZ8oE1w_QqLwxQxU',
  private: 'oHoh2oreyXnfL42HwohppCdqlYDxDd8JIeRDse8SH_A',
}

const urlBase64ToUint8Array = (base64String) => {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/')
  const rawData = atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }

  return outputArray
}

const saveSubscription = async (subscription) => {
  const response = await fetch(fetchUrl('/subscribes'), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data: JSON.stringify(subscription) }),
  })
  return response
}

// self.addEventListener('install', (e) => {
//   self.skipWaiting() // always activate updated SW immediately
// })

// self.addEventListener('waiting', (e) => {
//   console.log(e.type)
// })

self.addEventListener('message', (e) => console.log(e.type, e.data))

self.addEventListener('activate' || 'redundant', async (e) => {
  // console.log('Active | Resurrection')
  const subscription = await self.registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(vapidKeys.public),
  })
  console.log('subs', subscription)
  const response = await saveSubscription(subscription)
  console.log('SAVING', response)
})

// ngepush notif ke dari sw ke app
self.addEventListener('push', (e) => {
  // titlle, {object}
  const data = e.data.json()
  // console.log('Ealah', data)
  self.registration.showNotification(data.title, {
    body: data.body,
  })
})
