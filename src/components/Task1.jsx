import React, { useState } from "react";
import "../Task1.css";

const Task1 = () => {
    const [text, setText] = useState("");
    const [wordCount, setWordCount] = useState(0);

    const handleChange = (e) => {
        setText(e.target.value);
        setWordCount(e.target.value.split(" ").length);
      };
    return (
        <center>
        <div className="word-counter" style={{ "align-items": "center","justify-content": "center","marginTop":"10%"}} >
             <center><h1><b>Responsive Paragraph Word Counter</b></h1></center>
            <textarea
                className="word-counter__textarea"
                value={text}
                onChange={handleChange}
                rows={4}
                placeholder="Enter your text here..."
            />
            <br />
            <p className="word-counter__count">Word Count: {wordCount}</p>
        </div>
        </center>
    );
};

export default Task1;