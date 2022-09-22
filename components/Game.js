import { useState } from "react"

export default function Game({ select }) {
    const [transition, setTransition] = useState(false)

    const selectAndTransition = (pick) => {
        setTransition(transition => !transition)
        setTimeout(() => {
            select(pick)
        },300)
    }

    return (
        <section className={transition ? 'game opacity-0' : 'game'}>
            <button onClick={() => selectAndTransition('paper')} className='game__button paper'>
                <img className='game__button-img' src='/images/icon-paper.svg'></img>
            </button>
            <button onClick={() => selectAndTransition('scissors')} className='game__button scissors'>
                <img className='game__button-img' src='/images/icon-scissors.svg'></img>
            </button>
            <button onClick={() => selectAndTransition('rock')} className='game__button rock mx-auto'>
                <img className='game__button-img' src='/images/icon-rock.svg'></img>
            </button>
        </section>
    )
}