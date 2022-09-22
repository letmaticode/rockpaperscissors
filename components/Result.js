import { useEffect, useState } from 'react'
import ImageAnimation from "../components/ImageAnimation"

export default function Result({ playerPick, setResult, score, setScore }) {
    const [housePick, setHousePick] = useState(null)
    const [transition, setTransition] = useState(false)

    const styling = (pick) => {
        if (pick == 'rock') {
            return 'border-[#de405c] shadow-[rgb(0,0,0,0.13)_0px_14px_1px_0px_inset,#9f1535_0px_14px_1px_0px]'
        } else if (pick == 'paper') {
            return 'border-[#5572f5] shadow-[rgb(0,0,0,0.13)_0px_14px_1px_0px_inset,#2945c1_0px_14px_1px_0px]'
        }
        return 'border-[#eba722] shadow-[rgb(0,0,0,0.13)_0px_14px_1px_0px_inset,#c76c1c_0px_14px_1px_0px]'
    }

    const result = (pick) => {
        if (playerPick === pick) return 'DRAW'
        else if (playerPick === 'rock' && pick === 'scissors') {
            return 'YOU WIN'
        }
        else if (playerPick === 'paper' && pick === 'rock') {
            return 'YOU WIN'
        }
        else if (playerPick === 'scissors' && pick === 'paper') {
            return 'YOU WIN'
        }
        return 'YOU LOSE'
    }

    const playAgain = () => {
        setTransition(transition => !transition)
        setTimeout(() => {
            setResult(res => !res)
        }, 500)
    }

    useEffect(() => {
        const scoreUpdate = (pick) => {
            if (playerPick === pick) return
            else if (playerPick === 'rock' && pick === 'scissors') {
                return setScore(score + 1)
            }
            else if (playerPick === 'paper' && pick === 'rock') {
                return setScore(score + 1)
            }
            else if (playerPick === 'scissors' && pick === 'paper') {
                return setScore(score + 1)
            } else {
                return setScore(score - 1)
            }
        }

        const randomPick = () => {
            const picks = ['paper', 'rock', 'scissors']
            const pick = picks[Math.floor(Math.random() * picks.length)]
            setHousePick(pick)
            scoreUpdate(pick)
        }

        setTimeout(() => {
            setTransition(transition => !transition)

        }, 300)

        setTimeout(() => {
            randomPick()
        }, 3000)
    }, [])

    return (
        <section className={transition ? 'result--visible' : 'result'}>
            <section className={housePick ? 'result__wrapper result__wrapper--transition' : 'result__wrapper'}>
                <article className='result__pick'>
                    <p className='result__pick-text'>YOU PICKED</p>
                    <div className={`result__pick-button ${styling(playerPick)}`}>
                        <img className='result__pick-img' src={`/images/icon-${playerPick}.svg`} />
                    </div>
                </article>

                {housePick &&
                    <aside className='result__play_again'>
                        <p className='result__play_again-text'>{result(housePick)}</p>
                        <button onClick={() => playAgain()} className='result__play_again-button'>
                            PLAY AGAIN
                        </button>
                    </aside>
                }

                {!housePick ?
                    <article className="result__pick">
                        <p className="result__pick-text">THE HOUSE PICKED</p>
                        <ImageAnimation />
                    </article>
                    :
                    <article className="result__pick">
                        <p className="result__pick-text">THE HOUSE PICKED</p>
                        <div className={`result__pick-button ${styling(housePick)}`}>
                            <img className='result__pick-img' src={`/images/icon-${housePick}.svg`} />
                        </div>
                    </article>
                }
            </section>
        </section>
    )
}