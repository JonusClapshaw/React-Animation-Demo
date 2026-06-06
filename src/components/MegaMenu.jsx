import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./MegaMenu.css";

export default function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
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
                  <a href="#">Example 1 Item #1</a>{" "}
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
                  <a href="#">Example 2 Item #1</a>{" "}
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
  );
}
