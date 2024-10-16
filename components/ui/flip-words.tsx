"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  const startAnimation = useCallback(() => {
    const currentIndex = words.indexOf(currentWord);
    const nextWord = words[(currentIndex + 1) % words.length];
    setCurrentWord(nextWord);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!hasStarted) {
      const timer = setTimeout(() => {
        setHasStarted(true);
        startAnimation();
      }, duration);
      return () => clearTimeout(timer);
    }

    if (!isAnimating && hasStarted) {
      const timer = setTimeout(() => {
        startAnimation();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isAnimating, duration, startAnimation, hasStarted]);

  return (
    <div className="relative inline-block overflow-hidden">
      <AnimatePresence
        onExitComplete={() => {
          setIsAnimating(false);
        }}
      >
        <motion.div
          initial={hasStarted ? { opacity: 0, y: 10 } : { opacity: 1, y: 0 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          exit={{
            opacity: 0,
            y: -40,
            filter: "blur(4px)",
            position: "absolute",
          }}
          className={cn(
            "z-10 inline-block text-left text-primary dark:text-neutral-100",
            className
          )}
          key={currentWord}
        >
          {currentWord.split(" ").map((word, wordIndex) => (
            <motion.span
              key={word + wordIndex}
              initial={
                hasStarted
                  ? { opacity: 0, y: 10, filter: "blur(4px)" }
                  : { opacity: 1, y: 0, filter: "blur(0px)" }
              }
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: hasStarted ? wordIndex * 0.3 : 0,
                duration: 0.3,
              }}
              className="inline-block whitespace-normal"
            >
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={word + letterIndex}
                  initial={
                    hasStarted
                      ? { opacity: 0, y: 10, filter: "blur(4px)" }
                      : { opacity: 1, y: 0, filter: "blur(0px)" }
                  }
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    delay: hasStarted
                      ? wordIndex * 0.3 + letterIndex * 0.05
                      : 0,
                    duration: 0.2,
                  }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
              <span className="inline-block">&nbsp;</span>
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
