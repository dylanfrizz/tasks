import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [question, setQuestion] = useState<QuestionType>(
        "short_answer_question",
    );

    function change(): void {
        setQuestion(
            question === "short_answer_question" ?
                "multiple_choice_question"
            :   "short_answer_question",
        );
    }

    return (
        <div>
            <div>
                <Button onClick={change}>Change Type</Button>
            </div>
            <div>
                {question === "short_answer_question" ?
                    <span>Short Answer</span>
                :   <span>Multiple Choice</span>}
            </div>
        </div>
    );
}
