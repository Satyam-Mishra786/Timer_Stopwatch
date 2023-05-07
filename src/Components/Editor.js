import React, { useState } from 'react'

const Editor = ({ setTime, setIsEditor }) => {
    const [editTime, setEditTime] = useState({
        h: 0,
        m: 0,
        s: 0,
        ms: 0,
    });

    const handleChange = (e) => {
        if (e.target.name === 'h' && e.target.value > 24) return;
        if (e.target.name === 'm' && e.target.value > 59) return;
        if (e.target.name === 's' && e.target.value > 59) return;
        if (e.target.name === 'ms' && e.target.value > 100) return;
        setEditTime((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    // Set the time for Timer & Close editor
    const closeEditor = () => {
        setIsEditor(false)
        setTime({
            hour: Number(editTime.h),
            minute: Number(editTime.m),
            second: Number(editTime.s),
            miliSecond: Number(editTime.ms),
        })

    }

    return (
        <>
            <div className="editor">
                <div className="inputContainer">
                    <label htmlFor='editHour' className="inputLabel">Hour:</label>
                    <input
                        id='editHour'
                        type="number"
                        className="timeInput"
                        value={editTime.h}
                        name="h"
                        onChange={handleChange}
                    />
                </div>

                <div className="inputContainer">
                    <label htmlFor="editMinute" className="inputLabel">Minute:</label>
                    <input
                        id="editMinute"
                        type="number"
                        className="timeInput"
                        value={editTime.m}
                        name="m"
                        onChange={handleChange}
                    />
                </div>

                <div className="inputContainer">
                    <label htmlFor="editSecond" className="inputLabel">Second:</label>
                    <input
                        id="editSecond"
                        type="number"
                        className="timeInput"
                        value={editTime.s}
                        name="s"
                        onChange={handleChange}
                    />
                </div>

                <div className="inputContainer">
                    <label htmlFor="editMili" className="inputLabel">MiliSecond:</label>
                    <input
                        id="editMili"
                        type="number"
                        className="timeInput"
                        value={editTime.ms}
                        name="ms"
                        onChange={handleChange}
                    />
                </div>
                <button className='sw-Btn' onClick={closeEditor}>Set</button>
            </div>
        </>
    )
}

export default Editor