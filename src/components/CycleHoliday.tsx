import React, { useState } from "react";
import { Button } from "react-bootstrap";

export type Holiday = "🎃" | "🌺" | "❄️" | "🦃" | "🎂";

const Alphabetical: Record<Holiday, Holiday> = {
    "🌺": "🎂",
    "🎂": "❄️",
    "❄️": "🎃",
    "🎃": "🦃",
    "🦃": "🌺",
};
const Yearly: Record<Holiday, Holiday> = {
    "🌺": "🎃",
    "🎃": "🎂",
    "🎂": "🦃",
    "🦃": "❄️",
    "❄️": "🌺",
};
export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🌺");

    function byYear(): void {
        const newHoliday = Yearly[holiday];
        setHoliday(newHoliday);
    }
    function byAlphabet(): void {
        const newHoliday = Alphabetical[holiday];
        setHoliday(newHoliday);
    }

    return (
        <div>
            <div>
                <span>Holiday: {holiday}</span>
            </div>
            <div>
                <Button onClick={byAlphabet}>Advance by Alphabet</Button>
            </div>
            <div>
                <Button onClick={byYear}>Advance by Year</Button>
            </div>
        </div>
    );
}
