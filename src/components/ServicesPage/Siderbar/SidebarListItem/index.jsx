import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import plus from "../../../../assets/icons/plus.svg";

const SidebarListItem = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <li
      className={`cursor-pointer w-[430px] bg-[#f5f5f7] rounded-xl border hover:shadow-md transition-all duration-300 ${
        isOpen ? "border-[#f7d000]" : "border-[#f5f5f7]"
      }`}
    >
      <div
        onClick={toggleDropdown}
        className="flex items-center justify-between p-5 text-2xl"
      >
        {title}
        <img
          src={plus}
          alt="plus"
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        />
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-lg overflow-hidden border-t border-[#646464]"
          >
            {items.map((item, index) => (
              <li
                key={index}
                className="px-5 py-3 text-[#646464] hover:bg-[#e9e9ec] transition"
              >
                {item}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
};

export default SidebarListItem;
