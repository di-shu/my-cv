import styles from './button.module.css'

type ButtonParams = {
  children?: string
  primary?: boolean
  ghost?: boolean
  className?: string
}

export default function Button({ children, className, primary = false, ghost = false }: ButtonParams) {
  const setClassName = (): string => {
    return `${styles.default} ${primary && styles.primary} ${ghost && styles.ghost} ${className && className}`
  }

  return <button className={setClassName()}>
    {children}
  </button>
}
