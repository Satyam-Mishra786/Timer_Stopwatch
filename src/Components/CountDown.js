import React from 'react'

const CountDown = ({ time }) => {
    return (
        <div className="countdown">
            <span>{(time.hour < 10) ? "0" + time.hour : time.hour}</span>
            :
            <span>{(time.minute < 10) ? "0" + time.minute : time.minute}</span>
            :
            <span>{(time.second < 10) ? "0" + time.second : time.second}</span>
            .
            <span className="ms">{(time.miliSecond < 10) ? "0" + time.miliSecond : time.miliSecond}</span>
        </div>
    )
}

export default CountDown