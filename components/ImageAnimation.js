import React, { useEffect, useRef } from 'react'

export default function ImageAnimation() {
    const imageRef = useRef('/images/icon-paper.svg')

    useEffect(() => {
        let index = 0
        const sources = ['/images/icon-paper.svg', '/images/icon-rock.svg', '/images/icon-scissors.svg']

        const changeImgSrc = setInterval(() => {
            imageRef.current.src = sources[index]
            index == 2 ? index = 0 : index++
        }, 150, index)

        return () => {
            clearInterval(changeImgSrc)
        }
    }, [])


    return (
        <div className='result__pick-button --undefined'>
            <img className='result__pick-img' src='/images/icon-paper.svg' ref={imageRef} />
        </div>
    )
}
