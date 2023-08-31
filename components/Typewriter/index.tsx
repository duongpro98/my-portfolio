import React, { useState, useEffect } from 'react';

interface TypewriterProps {
    texts: string[];
}

const Typewriter: React.FC<TypewriterProps> = ({ texts }) => {
    const [currentText, setCurrentText] = useState(' ');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentArrayIndex, setCurrentArrayIndex] = useState(0);
    const [generating, setGenerating] = useState(true);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        let timeoutId: any;
        if (generating) {
            if (currentIndex < texts[currentArrayIndex].length) {
                timeoutId = setTimeout(() => {
                    setCurrentText(prevText => prevText + texts[currentArrayIndex][currentIndex]);
                    setCurrentIndex(prevIndex => prevIndex + 1);
                }, 150); // Adjust the typing speed here
            } else {
                setTimeout(() => {
                    setGenerating(false);
                }, 1000)
            }
        } else {
            if (currentIndex > 0) {
                timeoutId = setTimeout(() => {
                    setCurrentText(prevText => prevText.slice(0, -1));
                    setCurrentIndex(prevIndex => prevIndex - 1);
                }, 150);
            } else {
                setGenerating(true);
                if(currentArrayIndex === texts.length - 1){
                    setCurrentArrayIndex(0);
                }else {
                    setCurrentArrayIndex(prevIndex => prevIndex + 1);
                }
            }
        }
        return () => {
            clearTimeout(timeoutId);
        }
    }, [currentIndex, texts, generating]);

    useEffect(() => {
        // Toggle the cursor every 500ms
        const cursorIntervalId = setInterval(() => {
            setShowCursor(prevShowCursor => !prevShowCursor);
        }, 500);

        return () => clearInterval(cursorIntervalId);
    }, []);

    return <>
        {currentText}
        {showCursor && '|'}
    </>;
};

export default Typewriter;