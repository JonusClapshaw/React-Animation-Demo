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
      <ul className="navLinks">
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
      </ul>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="megaMenu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
              duration: 0.25,
              type: "spring",
              stiffness: 200,
            }}
          >
            <div className="column">
              <h3>Example 1 List</h3>

              <a href="#">Example 1 Item #1</a>
              <a href="#">Example 1 Item #2</a>
              <a href="#">Example 1 Item #3</a>
            </div>

            <div className="column">
              <h3>Example 2 List</h3>

              <a href="#">Example 2 Item #1</a>
              <a href="#">Example 2 Item #2</a>
              <a href="#">Example 2 Item #3</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
