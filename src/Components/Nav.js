import React from 'react'

const Nav = ({ timerPage, setTimerPage }) => {
    return (
        <header>
            <div className="logoContainer">
                Timer & Stopwatch
            </div>
            <nav>
                <button className={(timerPage) ? "navBtn" : 'navBtn active'} onClick={() => setTimerPage(false)}>
                    Timer
                </button>
                <button className={(timerPage) ? "navBtn active" : 'navBtn'} onClick={() => setTimerPage(true)}>
                    Stopwatch
                </button>
            </nav>
        </header>
    )
}

export default Nav