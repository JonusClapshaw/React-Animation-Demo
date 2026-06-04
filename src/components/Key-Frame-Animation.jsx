import { CodeBlock, dracula } from 'react-code-blocks';
import { motion } from "motion/react"
import './Key-Frame-Animation.css'

export default function Keyframes({ code = '', language = 'jsx' } = {}) {
    const displayCode = code.trim().length > 0 ? code : keyFrameAnimCode
    return (
        <div className="anim-con-2">
            <div className="code">
                <CodeBlock
                    text={displayCode}
                    language={language}
                    showLineNumbers={true}
                    theme={dracula}
                    customStyle={{
                        background: 'transparent',
                        margin: 0,
                        boxShadow: 'none'
                    }}
                />
            </div>
            <div className="anim-shapes">
                <motion.div
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 180, 180, 0],
                        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 1,
                    }}
                    style={box}
                    
                />
            </div>
        </div>
    )
}

const box = {
    width: 100,
    height: 100,
    backgroundColor: "var(--white, #f97316)",
    borderRadius: 5,
    border: '2px solid #111827',
}

const keyFrameAnimCode = `<motion.div
animate={{
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 180, 180, 0],
    borderRadius: ["0%", "0%", "50%", "50%", "0%"],
}}
transition={{
    duration: 2,
    ease: "easeInOut",
    times: [0, 0.2, 0.5, 0.8, 1],
    repeat: Infinity,
    repeatDelay: 1,
}}
style={box}

/>`
