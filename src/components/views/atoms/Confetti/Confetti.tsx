/* eslint-disable @typescript-eslint/no-implied-eval */
import React from 'react'
import { confettiService } from './Confetti.service'

const Confetti: React.FC<{ visible: boolean }> = ({ visible }) => {
    const canvasRef = React.useRef(null)

    React.useEffect(() => {
        if (canvasRef?.current) {
            confettiService.run(canvasRef.current)
        }
    }, [canvasRef])

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: -1,
                display: visible ? 'block' : 'none',
            }}
        />
    )
}

export default Confetti
