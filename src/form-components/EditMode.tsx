import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);
    const [student, setStudent] = useState<boolean>(true);
    const [name, setName] = useState<string>("Your Name");

    function fireEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setEdit(event.target.checked);
    }
    return (
        <div>
            <div>
                <Form.Check
                    type="switch"
                    id="edit-mode"
                    label="Edit"
                    checked={edit}
                    onChange={fireEdit}
                />
            </div>
            <div>
                {edit && (
                    <Form.Group>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            disabled={!edit}
                            value={name}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>,
                            ) => {
                                setName(event.target.value);
                            }}
                        />
                    </Form.Group>
                )}
            </div>
            <div>
                {edit && (
                    <Form.Check
                        type="checkbox"
                        disabled={!edit}
                        id="student"
                        label="Student"
                        checked={student}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            setStudent(event.target.checked);
                        }}
                    />
                )}
            </div>
            <div>
                {name} is {!student ? "not a student" : "a student"}
            </div>
        </div>
    );
}
