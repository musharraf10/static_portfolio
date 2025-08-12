import { useState, useEffect } from "react";

export default function HeroName() {
    const texts = ["Hi, I'm Shaik Musharaf", "Welcome..."];
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopIndex, setLoopIndex] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(100);

    useEffect(() => {
        const handleTyping = () => {
            const currentText = texts[loopIndex % texts.length];

            if (!isDeleting) {
                // Typing
                setDisplayedText(currentText.substring(0, displayedText.length + 1));
                if (displayedText.length + 1 === currentText.length) {
                    setTimeout(() => setIsDeleting(true), 2000); // pause after complete
                }
            } else {
                // Deleting
                setDisplayedText(currentText.substring(0, displayedText.length - 1));
                if (displayedText.length === 0) {
                    setIsDeleting(false);
                    setLoopIndex((prev) => prev + 1);
                }
            }

            setTypingSpeed(isDeleting ? 50 : 100);
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, loopIndex, typingSpeed]);

    return (
        <h1 className="text-3xl md:text-6xl font-bold mb-6">
            {displayedText}
            <span className="animate-blink">|</span>
        </h1>
    );
}
