export default function Score({score}) {
    return (
        <header className='score'>
            <div>
                <img className="score__img" src='/images/logo.svg'></img>
            </div>

            <div className='score__wrapper'>
                <p className='score__wrapper-title'>SCORE</p>
                <p className='score__wrapper-points'>{score}</p>
            </div>
        </header>
    )
}