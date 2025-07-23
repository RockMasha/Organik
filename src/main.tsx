import { StrictMode } from 'react'
import { render } from 'preact'
import { RouterProvider } from 'react-router-dom'
import '@/styles/index.css'
import type { NullableElement } from '@/types'
import router from '@/pages/routes/App'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { persistor, store } from '@/store'

const rootElement: NullableElement<HTMLDivElement> =
  document.querySelector('div#root')

if (!rootElement) throw new Error('Root element not found')

render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>,
  rootElement
)
