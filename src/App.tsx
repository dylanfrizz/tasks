import React from "react";
import "./App.css";
import image from "./Screenshot 2026-02-07 171313.png";
import { Button } from "react-bootstrap";
function App(): React.JSX.Element {
    return (
        <div
            className="App"
            style={{ border: "1px solid red", padding: "20px" }}
        >
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript and dylan f:Hello
                World
            </header>
            <h1>Hello I am h1</h1>
            <img src={image} alt="image" />;
            <ul>
                <li>uno</li>
                <li>dos</li>
                <li>tres</li>
            </ul>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
