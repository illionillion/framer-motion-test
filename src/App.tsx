import React, { useRef } from "react";
import { motion, useDragControls } from "framer-motion";

function App() {
  const constraintsRef = useRef(null);
  const controls = useDragControls();
  const startDrag = (event: MouseEvent | TouchEvent | PointerEvent | React.MouseEvent<Element, MouseEvent> | React.TouchEvent<Element> | React.PointerEvent<Element>) => {
    controls.start(event)
    console.log(event);
    
  }
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
      <motion.div
        ref={constraintsRef}
        style={{ width: "100px", height: "100px", background: "#000" }}
      >
        <motion.div
          drag
          dragConstraints={constraintsRef}
          style={{ width: "20px", height: "20px", background: "#fff" }}
        />
        <motion.div
          drag
          dragConstraints={constraintsRef}
          style={{ width: "20px", height: "20px", background: "#fff" }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [50, 0] }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Hello, framer motion.
      </motion.div>
      <div onPointerDown={startDrag} />
      <motion.div
        drag="x"
        dragDirectionLock
        dragControls={controls}
        style={{ width: "20px", height: "20px", background: "#000" }}
        onDrag={(event, info)=>{
          console.log(event);
          console.log(info);
          
        }}
        // dragListener={true}
      />
      <motion.div
        drag="y"
        style={{ width: "20px", height: "20px", background: "#000" }}
      />
    </div>
  );
}

export default App;
