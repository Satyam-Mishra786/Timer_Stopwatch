import React, { useState } from "react";
import Editor from "./Editor";
import CountDown from "./CountDown";

const Timer = () => {
    const [time, setTime] = useState({
        hour: 0,
        minute: 0,
        second: 0,
        miliSecond: 0,
    });

    const [cancelInterval, setCancelInterval] = useState();
    const [isStarted, setIsStarted] = useState(false);
    const [isEditor, setIsEditor] = useState(false);

    let updatedHour = time.hour,
        updatedMinute = time.minute,
        updatedSecond = time.second,
        updatedMiliSecond = time.miliSecond;

    const start = () => {
        if (
            updatedHour === 0 &&
            updatedMinute === 0 &&
            updatedSecond === 0 &&
            updatedMiliSecond === 0
        ) {
            return;
        }
        setIsStarted(true);
        setCancelInterval(setInterval(run, 10));
    };

    const pause = () => {
        setIsStarted(false);
        clearInterval(cancelInterval);
    };

    const run = () => {
        if (
            updatedHour === 0 &&
            updatedMinute === 0 &&
            updatedSecond === 0 &&
            updatedMiliSecond === 0
        ) {
            clearInterval(cancelInterval);
            return;
        }

        if (
            updatedMiliSecond === 0 &&
            updatedSecond === 0 &&
            updatedMinute === 0 &&
            updatedHour !== 0
        ) {
            updatedMinute = 59;
            updatedSecond = 59;
            updatedMiliSecond = 100;
            updatedHour--;
        } else if (
            updatedMiliSecond === 0 &&
            updatedSecond === 0 &&
            updatedMinute !== 0
        ) {
            updatedMinute--;
            updatedSecond = 59;
            updatedMiliSecond = 100;
        } else if (updatedMiliSecond === 0 && updatedSecond !== 0) {
            updatedSecond--;
            updatedMiliSecond = 100;
        } else if (updatedMiliSecond !== 0) {
            updatedMiliSecond--;
        }

        setTime({
            hour: updatedHour,
            minute: updatedMinute,
            second: updatedSecond,
            miliSecond: updatedMiliSecond,
        });
    };

    return (
        <>
            {!isEditor ? (
                <div className="cd-Container">
                    <CountDown time={time} />

                    <div className="btnContainer">
                        {!isStarted ? (
                            <button className="sw-Btn" onClick={start}>
                                Start
                            </button>
                        ) : (
                            <button className="sw-Btn" onClick={pause}>
                                Pause
                            </button>
                        )}
                        <button
                            className="sw-Btn"
                            disabled={isStarted}
                            onClick={() => setIsEditor(true)}
                        >
                            Edit
                        </button>
                    </div>
                </div>
            ) : (
                <Editor
                    setTime={setTime}
                    isEditor={isEditor}
                    setIsEditor={setIsEditor}
                />
            )}
        </>
    );
};

export default Timer;
