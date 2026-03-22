import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "white",
    "black",
];
const DEFAULT_COLOR = COLORS[0];
export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>(DEFAULT_COLOR);
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    const colorStyle: React.CSSProperties = {
        backgroundColor: color,
        padding: "2px 4px",
        borderRadius: "4px",
    };
    return (
        <div>
            <div>
                {COLORS.map((color: string) => (
                    <Form.Check
                        inline
                        type="radio"
                        name="colors"
                        onChange={updateColor}
                        id="colored-box"
                        label={color}
                        value={color}
                        key={color}
                        data-testid="colored-box"
                    />
                ))}
            </div>
            <div>
                you have chosen <span style={colorStyle}>{color}</span>
            </div>
        </div>
    );
}
