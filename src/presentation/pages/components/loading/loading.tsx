import React from 'react'
import Styles from './loading-styles.scss'

type Props = {
  message?: string
}

const Loading: React.FC<Props> = ({ message = 'Carregando...' }: Props) => (
  <div className={Styles.loadingOverlay}>
    <div className={Styles.loadingSpinner}></div>
    <div className={Styles.loadingMessage}>{message}</div>
  </div>
)

export default Loading
