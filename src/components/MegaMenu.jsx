import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./MegaMenu.css";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);

  const menuData = {
    products: [
      "Website Builder",
      "Analytics",
      "E-commerce",
      "Hosting"
    ],
    resources: [
      "Documentation",
      "Blog",
      "Tutorials",
      "Community"
    ]
  };

  return (
    <header className="header">
      <nav
        className="nav"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <button
          onMouseEnter={() => setActiveMenu("products")}
        >
          Products
        </button>

        <button
          onMouseEnter={() => setActiveMenu("resources")}
        >
          Resources
        </button>

        <AnimatePresence>
          {activeMenu && (
            <motion.div
              className="mega-menu"
              initial={{
                opacity: 0,
                y: -10
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              exit={{
                opacity: 0,
                y: -10
              }}
              transition={{
                duration: 0.2
              }}
            >
              {menuData[activeMenu].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}