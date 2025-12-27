import { createRoot } from 'react-dom/client'

import { AppProvider } from './app/app-provider'

import './shared/styles/base.scss' // base styles

createRoot(document.getElementById('root')!).render(<AppProvider />)
