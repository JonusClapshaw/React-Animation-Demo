import { motion } from "motion/react";
import "./MegaMenu.css";

export default function MegaMenu() {
  return (
    <>
      <nav className="navbar">
        <div className="navCol">
          <li>
            <th>Example 1 List</th>
            <th>Example 2 List</th>
          </li>
        </div>

        <div className="navList">
          <ul className="ex">
            <li>Example 1 Item #1</li>
            <li>Example 1 Item #2</li>
            <li>Example 1 Item #3</li>
          </ul>
          <ul className="ex">
            <li>Example 2 Item #1</li>
            <li>Example 2 Item #2</li>
            <li>Example 2 Item #3</li>
          </ul>
        </div>
      </nav>
    </>
  );
}
