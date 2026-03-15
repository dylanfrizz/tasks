import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);

    function reveal(): void {
        setVisible(!visible);
    }

    return (
        <div>
            <div>
                <Button onClick={reveal}>Reveal Answer</Button>
            </div>
            <div>
                {visible ?
                    <span>42</span>
                :   <span></span>}
            </div>
        </div>
    );
}
