import { PencilSimpleLine } from 'phosphor-react'
import { Avatar } from '.'
import styles from './Sidebar.module.css'

export const Sidebar = () => (
  <aside className={styles.sidebar}>
    <img
      className={styles.cover}
      src='https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50'
    />
    <div className={styles.profile}>
      <Avatar
        hasBorder
        source='https://github.com/hakuunabatata.png'
      />
      <strong>User</strong>
      <span>Dev</span>
    </div>

    <footer>
      <a href='#'>
        <PencilSimpleLine size={20} />
        Editar seu perfil
      </a>
    </footer>
  </aside>
)
