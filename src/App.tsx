import React from "react";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <motion.div
        style={{ width: "100px", height: "100px", background: "blue" }}
        animate={{ x: 100 }}
      ></motion.div>
      <motion.div
        style={{ width: "100px", height: "100px", background: "blue" }}
        whileHover={{ x: 10, scale: 1.5 }}
      ></motion.div>
      <div style={{ width: "100px", height: "100px", background: "blue" }}>
        <motion.span
          style={{ color: "white" }}
          whileHover={{ scale: 2, color: "green" }}
        >
          Hello World
        </motion.span>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [50, 0] }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Hello, framer motion.
      </motion.div>
    </div>
  );
}

export default App;
