import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import {router} from './routes/router'
import { RecoilRoot } from 'recoil'
import './index.css'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
        <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>,
)
