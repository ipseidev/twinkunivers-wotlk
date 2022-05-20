import React, { useState, useEffect } from 'react'

export default function useScreenSize() {
    const [windowDimenion, detectHW] = useState({
        width: 1000,
        height: 1000,
        breakMobile:900
    })

    React.useEffect(() => {
        detectHW({
            ...windowDimenion,
            width: window.innerWidth,
            height: window.innerHeight,
        })
    }, [])


    useEffect(() => {
        window.addEventListener('resize', detectSize)

        return () => {
            window.removeEventListener('resize', detectSize)
        }
    }, [windowDimenion])

    const detectSize = () => {
        detectHW({
            ...windowDimenion,
            width: window.innerWidth,
            height: window.innerHeight,
        })
    }



    return windowDimenion
}
