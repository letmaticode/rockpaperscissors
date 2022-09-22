import { useState } from "react"
import Game from "../components/Game"
import Result from "../components/Result"
import Score from "../components/Score"
import Modal from "../components/Modal"
import Footer from "../components/Footer"

//TODO: 3.Gradiente glow up en boton ganador
//TODO: 4.LocalStorage
//TODO: 6.Revisar y arreglar js
//TODO: 7.Diseno responsive
//TODO: 8.TAP HIGHLIGHT DE BOTONES

export default function Home() {
  const [result, setResult] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [playerPick, setPlayerPick] = useState(null)
  const [score, setScore] = useState(0)

  const modal = () => {
    setShowModal(!showModal)
  }

  const select = (id) => {
    setResult(!result)
    setPlayerPick(id)
  }

  return (
    <main>
      <Modal modal={modal} showModal={showModal} />
      <Score score={score} />
      {!result ?
        <Game select={select} /> :
        <Result
          playerPick={playerPick}
          setResult={setResult}
          score={score}
          setScore={setScore}
        />}
      <Footer modal={modal} />
    </main>
  )
}