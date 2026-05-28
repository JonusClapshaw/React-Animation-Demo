import { useState } from 'react'
import { CodeBlock, dracula } from 'react-code-blocks';
import { motion } from "motion/react"
import { RotateCw } from 'lucide-react';
import './Simple-Box-Roll.css'


export default function Box({ code = '', language = 'jsx' } = {}) {
    const [rotation, setRotation] = useState(0)
    const displayCode = code.trim().length > 0 ? code : boxAnimationCode

    return (
        <div className="anim-con-1">
            <div className="code">
                <CodeBlock
                    text={displayCode}
                    language={language}
                    showLineNumbers={true}
                    theme={dracula}
                />
            </div>
            <div className="box-anim">
                <motion.div
                    style={box}
                    animate={{ rotate: rotation }}
                    transition={{ duration: 1.2, ease: "linear" }}
                />
                <button
                    type="button"
                    className="rotate-btn"
                    onClick={() => setRotation((prev) => prev + 90)}
                >
                    <RotateCw />
                </button>
            </div>
        </div>
    )
}

const box = {
    width: 100,
    height: 100,
    backgroundColor: "var(--hue-1, #ff7a18)",
    color: "black",
    borderRadius: 5,
    border: '2px solid #111',
}

const boxAnimationCode = `const [rotation, setRotation] = useState(0)

<motion.div
    style={box}
    animate={{ rotate: rotation }}
    transition={{ duration: 1.2, ease: "linear" }}
/>

<button onClick={() => setRotation((prev) => prev + 90)}>
    Rotate +90°
</button>`
