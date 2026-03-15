import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [die1, changeDie1] = useState<number>(1);
    const [die2, changeDie2] = useState<number>(6);
    /*
    function initial(): void {
        changeDie1(d6);
        changeDie2(d6);

        {
            changeDie1 === changeDie2 ? initial() : die1, die2;
        }
    } */

    function rollOne(): void {
        changeDie1(d6);
    }
    function rollTwo(): void {
        changeDie2(d6);
    }

    return (
        <div>
            <div>
                <span data-testid="left-die">{die1}</span>
            </div>
            <div>
                <span data-testid="right-die">{die2}</span>
            </div>
            <div>
                <Button onClick={rollOne}>Roll Left</Button>
            </div>
            <div>
                <Button onClick={rollTwo}>Roll Right</Button>
            </div>
            <div>
                {die1 === die2 && die1 === 1 ?
                    <span>You Lose</span>
                :   <span></span>}
            </div>
            <div>
                {die1 === die2 && die1 !== 1 ?
                    <span>You Win</span>
                :   <span></span>}
            </div>
        </div>
    );
}
