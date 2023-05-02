import '../presentation/styles/global.scss'

import React from 'react'
import ReactDOMClient from 'react-dom/client'
import Router from './routes/router'

const rootElement = document.getElementById('main') as Element

const root = ReactDOMClient.createRoot(rootElement)

root.render(<Router />)
