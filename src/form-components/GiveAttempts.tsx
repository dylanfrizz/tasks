import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);

    const [requests, setRequests] = useState<string>("");

    const requestAmount = parseInt(requests) || 0;

    function updateRequests(event: React.ChangeEvent<HTMLInputElement>) {
        setRequests(event.target.value);
    }
    return (
        <div>
            <Form.Group>
                <Form.Label>GiveAttempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requests}
                    onChange={updateRequests}
                />
            </Form.Group>
            <div>{attempts}</div>
            <div>
                <Button
                    onClick={() => {
                        setAttempts(attempts - 1);
                    }}
                    disabled={attempts <= 0}
                >
                    use
                </Button>
            </div>
            <div>
                <Button
                    onClick={() => {
                        setAttempts(attempts + requestAmount);
                    }}
                >
                    gain
                </Button>
            </div>
        </div>
    );
}
