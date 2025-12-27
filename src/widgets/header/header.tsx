import { PRIVATE_ROUTES, PUBLIC_ROUTES } from '@src/shared/constants/routes'

import styles from './styles.module.scss'

const isAuth = true

export const Header = () => {
  return (
    <header className={styles.root}>
      <div>LOGO</div>
      <nav>
        <ul className={styles.list}>
          {PUBLIC_ROUTES.map(r => (
            <li key={r.path}>
              <a href={r.path}>{r.label}</a>
            </li>
          ))}
          {isAuth &&
            PRIVATE_ROUTES.map(r => (
              <li key={r.path}>
                <a href={r.path}>{r.label}</a>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  )
}
