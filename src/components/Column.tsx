import React from 'react'
import '../style.css'

interface ColumnProps {
    colSize: number
}

const Column = (props: ColumnProps) => {

    return (
        <>
            <div 
                style = {{
                    width: '40px',
                    height: props.colSize + 150,
                    backgroundColor: `#3${props.colSize}e${props.colSize}`,
                    transitionDuration: '3s',
                    transitionTimingFunction: 'ease',
                    transform: 'scale(1)'
                }} 
                className="columnArr__item"
            >
            </div>
        </>
    )
}

export default React.memo(Column)