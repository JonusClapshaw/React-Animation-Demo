import { useRef } from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import amsterdam from '../assets/Amsterdam.jpg';
import japan from '../assets/Japan.webp';
import './Parallaptic-background.css';

export default function ParallapticBackground({ code = '', language = 'jsx' } = {}) {
    const scrollRef = useRef(null);
    const { scrollY, scrollYProgress } = useScroll({ container: scrollRef });
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 90,
        damping: 22,
        mass: 0.35
    });

    const foregroundY = useTransform(scrollY, [0, 1000], [0, 40], { clamp: false });
    const backgroundY = useTransform(scrollY, [0, 1000], [0, 18], { clamp: false });

    const amsterdamOpacity = useTransform(
        smoothProgress,
        [0, 0.36, 0.48, 0.62],
        [1, 1, 0.35, 0]
    );
    const amsterdamTitleY = useTransform(
        smoothProgress,
        [0, 0.36, 0.48, 0.62],
        [8, 0, -10, -20]
    );
    const japanOpacity = useTransform(
        smoothProgress,
        [0.44, 0.68, 1],
        [0, 1, 1]
    );
    const japanTitleY = useTransform(
        smoothProgress,
        [0.44, 0.68, 1],
        [14, 0, -4]
    );

    const displayCode = code.trim().length > 0 ? code : parallaxCode;

    return (
        <div className="anim-con-3">
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

            <div className="parallax-stage" aria-label="Parallax background demo">
                <div className="parallax-scroll" ref={scrollRef}>
                    <div className="parallax-viewport">
                        <div className="parallax-title-stack" aria-live="polite">
                            <motion.p className="parallax-title" style={{ opacity: amsterdamOpacity, y: amsterdamTitleY }}>
                                Amsterdam
                            </motion.p>
                            <motion.p className="parallax-title" style={{ opacity: japanOpacity, y: japanTitleY }}>
                                Japan
                            </motion.p>
                        </div>

                        <motion.img
                            src={amsterdam}
                            alt="Amsterdam"
                            className="parallax-image parallax-image-amsterdam"
                            loading="lazy"
                            decoding="async"
                            draggable={false}
                            style={{ y: backgroundY, opacity: amsterdamOpacity }}
                        />
                        <motion.img
                            src={japan}
                            alt="Japan"
                            className="parallax-image parallax-image-japan"
                            loading="lazy"
                            decoding="async"
                            draggable={false}
                            style={{ y: foregroundY, opacity: japanOpacity }}
                        />

                        <div className="parallax-content">Scroll inside this panel</div>
                    </div>
                    <div className="parallax-scroll-space" aria-hidden="true" />
                </div>
            </div>
        </div>
    );
}

const parallaxCode = `import amsterdam from '../assets/Amsterdam.jpg'
import japan from '../assets/Japan.webp'

const scrollRef = useRef(null)
const { scrollY, scrollYProgress } = useScroll({ container: scrollRef })
const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 22, mass: 0.35 })

const foregroundY = useTransform(scrollY, [0, 1000], [0, 40], { clamp: false })
const backgroundY = useTransform(scrollY, [0, 1000], [0, 18], { clamp: false })

const amsterdamOpacity = useTransform(smoothProgress, [0, 0.36, 0.48, 0.62], [1, 1, 0.35, 0])
const amsterdamTitleY = useTransform(smoothProgress, [0, 0.36, 0.48, 0.62], [8, 0, -10, -20])
const japanOpacity = useTransform(smoothProgress, [0.44, 0.68, 1], [0, 1, 1])
const japanTitleY = useTransform(smoothProgress, [0.44, 0.68, 1], [14, 0, -4])

<motion.p style={{ opacity: amsterdamOpacity, y: amsterdamTitleY }}>Amsterdam</motion.p>
<motion.p style={{ opacity: japanOpacity, y: japanTitleY }}>Japan</motion.p>

<div ref={scrollRef} className="parallax-scroll">
    <motion.img src={amsterdam} style={{ y: backgroundY, opacity: amsterdamOpacity }} />
    <motion.img src={japan} style={{ y: foregroundY, opacity: japanOpacity }} />
</div>`;
