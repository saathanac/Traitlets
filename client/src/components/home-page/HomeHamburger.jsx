import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { useNavigate } from "react-router-dom";
import { routes } from "./routes.ts";

export default function HomeHamburger() {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();

  useClickAway(ref, () => setOpen(false));

  const handleNavigation = (route) => {
    navigate(route);
    setOpen(false);
  };
  return (
    <div ref={ref}>
      <div>
        <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="left-0 fixed right-0 p-3 pt-3 bg-gray-800 border-b border-b-white/20"
          >
            <ul className="grid gap-2">
              {routes.map((route, idx) => {
                const { Icon } = route;

                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={route.title}
                    className="w-full p-[0.01rem] rounded"
                  >
                    <a
                      onClick={() => handleNavigation(route.href)}
                      className={
                        "flex items-center justify-between w-full p-5 rounded-lg bg-neutral-950"
                      }
                      href={route.href}
                    >
                      <span className="flex gap-1 text-lg">{route.title}</span>
                      <Icon className="text-lg" />
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
