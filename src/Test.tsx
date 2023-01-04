import { motion, AnimatePresence } from "framer-motion";
import { FC } from "react";

interface TestProps {
  isVisible: boolean;
  children: string;
}
export const Test: FC<TestProps> = ({ isVisible, children }) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);
