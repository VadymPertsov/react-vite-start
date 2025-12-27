import { Outlet } from 'react-router-dom'

import { Footer } from '@src/widgets/footer'
import { Header } from '@src/widgets/header'

import styles from './styles.module.scss'

export const AppLayout = () => {
  return (
    <div className={styles.root}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
