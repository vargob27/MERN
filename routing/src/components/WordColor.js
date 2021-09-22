import React from "react";

const WordColor = (props) => {
    const {word, fontColor, background} = props;
    if (isNaN(word)) {
        return (
            <h1 style={{color: fontColor, backgroundColor: background}}>{word}</h1>
        );
    } else {
        return (
            <h1>You must enter a word... You typed the number: {word}</h1>
        );
    }
};

export default WordColor;