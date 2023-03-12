import Porta from "@/components/porta"
import { atualizarPortas, criarPortas } from "functions/portas"
import { useState } from "react"
import styles from './styles.module.css'

export default function jogo() {
  const [portas, setPortas] = useState(criarPortas(3, 2))

  function renderizarPortas() {
    return portas.map( porta => {
      return <Porta key={porta.numero} value={porta} 
      onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}/>
    })
  }

  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>
        {renderizarPortas()}
      </div>
      <div className={styles.dotoes}>

      </div>
    </div>
  )
}