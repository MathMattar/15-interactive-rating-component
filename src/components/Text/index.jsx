import styles from './Text.module.scss'

export default function Text({ children }) {
  return (
    <section className={styles.text}>
        {children}
    </section>
  )
}
