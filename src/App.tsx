import React from "react";
import "./App.css";
//import image from "./Screenshot 2026-02-07 171313.png";
//import { Button } from "react-bootstrap";
import { Counter } from "./components/Counter";
import { RevealAnswer } from "./components/RevealAnswer";
import { ChangeType } from "./components/ChangeType";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
function App(): React.JSX.Element {
    return (
        <div>
            <div>CISC275</div>
            <div>
                <Counter></Counter>
            </div>

            <div>
                <RevealAnswer></RevealAnswer>
            </div>
            <div>
                <ChangeType></ChangeType>
            </div>
            <div>
                <StartAttempt></StartAttempt>
            </div>
            <div>
                <TwoDice></TwoDice>
            </div>
            <div>
                <CycleHoliday></CycleHoliday>
            </div>
        </div>
    );
}

export default App;
