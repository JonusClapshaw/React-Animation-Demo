import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./MegaMenu.css";
import { CodeBlock, dracula } from "react-code-blocks";

export default function MegaMenu({ code = "", language = "jsx" } = {}) {
  const [isOpen, setIsOpen] = useState(false);

  const codeToDisplay = code.trim().length > 0 ? code : megaMenuCode;

  return (
    <div className="megaMenuDemo">
      <div className="code">
        <CodeBlock
          text={codeToDisplay}
          language={language}
          showLineNumbers={true}
          theme={dracula}
          customStyle={{
            padding: "1rem",
            background: "transparent",
          }}
        />
      </div>
      <nav
        className="navbar"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className="navLinks">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Code Example</a>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="megaMenu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                duration: 0.25,
                stiffness: 200,
              }}
            >
              <div className="column">
                <h3>Example 1 List</h3>

                <ul>
                  <li>
                    <a href="#">Example 1 Item #1</a>
                  </li>
                  <li>
                    <a href="#">Example 1 Item #2</a>
                  </li>
                  <li>
                    <a href="#">Example 1 Item #3</a>
                  </li>
                </ul>
              </div>

              <div className="column">
                <h3>Example 2 List</h3>

                <ul>
                  <li>
                    <a href="#">Example 2 Item #1</a>
                  </li>
                  <li>
                    <a href="#">Example 2 Item #2</a>
                  </li>
                  <li>
                    <a href="#">Example 2 Item #3</a>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
const megaMenuCode = `
  // State variable that controls whether the mega menu is visible.
  // isOpen stores the current state (true/false).
  // setIsOpen updates that state.
  const [isOpen, setIsOpen] = useState(false);

  <nav
    className="navbar"

    // When the mouse enters the navbar area,
    // open the dropdown menu.
    onMouseEnter={() => setIsOpen(true)}

    // When the mouse leaves the navbar area,
    // close the dropdown menu.
    onMouseLeave={() => setIsOpen(false)}
  >
    {/* Main navigation links displayed in the navbar */}
    <div className="navLinks">
      <a href="#">Home</a>
      <a href="#">Products</a>
      <a href="#">Code Example</a>
    </div>

    {/* AnimatePresence allows exit animations to play
        when a component is removed from the DOM */}
    <AnimatePresence>

      {/* Render the mega menu only when isOpen is true */}
      {isOpen && (

        <motion.div
          className="megaMenu"

          // Starting animation state:
          // slightly transparent and moved upward
          initial={{ opacity: 0, y: -10 }}

          // Animation state after entering:
          // fully visible and in its normal position
          animate={{ opacity: 1, y: 0 }}

          // Animation state when leaving:
          // fade out and move upward again
          exit={{ opacity: 0, y: -10 }}

          // Controls animation timing and motion behavior
          transition={{
            duration: 0.25,
            stiffness: 200,
          }}
        >

          {/* First column of the dropdown menu */}
          <div className="column">
            <h3>Example 1 List</h3>
          </div>

          {/* Second column of the dropdown menu */}
          <div className="column">
            <h3>Example 2 List</h3>
          </div>

        </motion.div>
      )}
    </AnimatePresence>

  </nav>
`;
