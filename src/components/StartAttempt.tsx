import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    function mulligan(): void {
        setAttempts(attempts + 1);
    }
    function startQuiz(): void {
        setAttempts(attempts - 1);
        setProgress(true);
    }
    function stopQuiz(): void {
        setProgress(false);
    }
    return (
        <div>
            <div>
                <span>{attempts}</span>
            </div>
            <div>
                <Button
                    onClick={startQuiz}
                    disabled={progress || attempts === 0}
                >
                    Start Quiz
                </Button>
            </div>
            <div>
                <Button onClick={stopQuiz} disabled={!progress}>
                    Stop Quiz
                </Button>
            </div>
            <div>
                <Button onClick={mulligan} disabled={progress}>
                    Mulligan
                </Button>
            </div>
        </div>
    );
}
