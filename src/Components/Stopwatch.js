import React, { useState } from "react";
import CountDown from "./CountDown";

const Stopwatch = () => {
    const [time, setTime] = useState({
        hour: 0,
        minute: 0,
        second: 0,
        miliSecond: 0,
    });
    const [isStart, setIsStart] = useState(false);
    const [cancelInterval, setCancelInterval] = useState();
    const [splitTable, setSplitTable] = useState([]);

    var updatedHour = time.hour,
        updatedMinute = time.minute,
        updatedSecond = time.second,
        updatedMiliSecond = time.miliSecond;

    const start = () => {
        setIsStart((prev) => !prev);
        // run();
        setCancelInterval(setInterval(run, 10));
    };

    const pause = (status) => {
        setIsStart((prev) => !prev);
        split(status)
        clearInterval(cancelInterval);
    };

    const reset = () => {
        setTime({
            hour: 0,
            minute: 0,
            second: 0,
            miliSecond: 0,
        });
        setSplitTable([])
        clearInterval(cancelInterval);
    };

    const run = () => {
        console.log("run");
        if (updatedMinute === 60) {
            updatedHour++;
            updatedMinute = 0;
        }
        if (updatedSecond === 60) {
            updatedMinute++;
            updatedSecond = 0;
        }
        if (updatedMiliSecond === 100) {
            updatedSecond++;
            updatedMiliSecond = 0;
        }
        updatedMiliSecond++;

        setTime({
            hour: updatedHour,
            minute: updatedMinute,
            second: updatedSecond,
            miliSecond: updatedMiliSecond,
        });
    };

    const split = (status) => {
        let duplicate = splitTable.slice();
        duplicate.push({
            hour: time.hour < 10 ? "0" + time.hour : time.hour,
            minute: time.minute < 10 ? "0" + time.minute : time.minute,
            second: time.second < 10 ? "0" + time.second : time.second,
            miliSecond:
                time.miliSecond < 10 ? "0" + time.miliSecond : time.miliSecond,
            status: status
        });
        setSplitTable(duplicate);
    };

    const handleClick = (status) => {
        if (!isStart) start();
        else {
            pause(status);
        }
    };
    return (
        <>
            <div className="cd-Container">
                <CountDown time={time} />
                <div className="btnContainer">
                    <button className="sw-Btn" onClick={() => handleClick('Pause')}>
                        {!isStart ? "Start" : "Pause"}
                    </button>
                    <button className="sw-Btn" disabled={isStart} onClick={reset}>
                        Reset
                    </button>
                    <button className="sw-Btn" disabled={!isStart} onClick={() => split('Split')}>
                        Split
                    </button>
                </div>
            </div>
            <div className="timeTable">
                <div className="timeRow">
                    <div className="sNoHead">S.No.</div>
                    <div className="timeStampHead">Time Stamp</div>
                    <div className="statusHead">Status</div>
                </div>
                {splitTable.map((split, index) => {
                    return (
                        <div key={index} className="timeRow">
                            <div className="sNo"> {index + 1}</div>
                            <div className="timeStamp">
                                <span className="t-hr">{split.hour}</span>
                                :
                                <span className="t-min">{split.minute}</span>
                                :
                                <span className="t-sec">{split.second}</span>
                                .
                                <span className="t-ms">{split.miliSecond}</span>
                            </div>
                            <div className="status">{split.status}</div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Stopwatch;
