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
];
const DEFAULT_COLOR = COLORS[0];
export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>(DEFAULT_COLOR);
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    //let colorStyle: React.CSSProperties;
    const colorStyle: React.CSSProperties = {
        backgroundColor: color,
        padding: "2px 4px",
        borderRadius: "4px",
    };

    function createBackground(colorr: string): React.CSSProperties {
        let colorStyle: React.CSSProperties = {
            backgroundColor: colorr,
            padding: "2px 4px",
            borderRadius: "4px",
        };
        return colorStyle;
    }
    return (
        <div>
            <div>
                {COLORS.map((colorr: string) => (
                    <Form.Check
                        inline
                        type="radio"
                        name="colors"
                        onChange={updateColor}
                        id={colorr}
                        label={colorr}
                        value={colorr}
                        key={colorr}
                        checked={color === colorr}
                    />
                ))}
            </div>
            <span>
                you have chosen{" "}
                <span style={createBackground(color)} data-testid="colored-box">
                    {color}
                </span>
                .
            </span>
        </div>
    );
}
