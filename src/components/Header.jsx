import './Header.css'

export default function Header() {
    return (
        <header className="header-shell">
            <section className="header-panel">
                <div className="header-copy">
                    <p className="header-kicker">React + Motion Demo</p>
                    <h1>Jonus and Kevin Example name</h1>
                    <p className="header-intro">
                        Motion is a React library for creating animations and interactive
                        UI effects in modern web applications.
                    </p>
                </div>

                <section className="header-details">
                    <div className="detail-group">
                        <h2>What is Motion?</h2>
                        <p>
                            Motion is a React library for creating animations and interactive
                            UI effects in modern web applications.
                        </p>
                    </div>

                    <div className="detail-grid">
                        <div className="detail-group">
                            <h3>Common uses</h3>
                            <ol>
                                <li>Page Transitions</li>
                                <li>Hover Animations</li>
                                <li>Scroll Animations</li>
                                <li>Layout Animations</li>
                            </ol>
                        </div>

                        <div className="detail-group">
                            <h3>Benefits</h3>
                            <ol>
                                <li>Decent documentation</li>
                                <li>Easy-ish to learn</li>
                                <li>Built to work with react</li>
                                <li>Great to use with a minmal understanding</li>
                                <li>Ai plugins built with motion</li>
                            </ol>
                        </div>

                        <div className="detail-group">
                            <h3>Cons</h3>
                            <ol>
                                <li>Decent documentation</li>
                                <li>Cost of motion</li>
                                <li>Understanding of css</li>
                                <li>High Skill Ceiling</li>
                            </ol>
                        </div>
                    </div>
                </section>
            </section>
        </header>
    )
}