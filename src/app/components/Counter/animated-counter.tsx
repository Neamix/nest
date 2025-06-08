"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: number;
  onValueChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  showControls?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "outline" | "ghost";
}

export function AnimatedCounter({
  value,
  onValueChange,
  min = 0,
  max = 999,
  step = 1,
  showControls = true,
  className,
  size = "md",
  variant = "default",
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    setDisplayValue(value);
  }, [value]);

  const increment = () => {
    const newValue = Math.min(displayValue + step, max);
    setDisplayValue(newValue);
    onValueChange?.(newValue);
  };

  const decrement = () => {
    const newValue = Math.max(displayValue - step, min);
    setDisplayValue(newValue);
    onValueChange?.(newValue);
  };

  const sizeClasses = {
    sm: "h-6 w-6 text-xs",
    md: "h-8 w-8 text-sm",
    lg: "h-10 w-10 text-base",
  };

  const counterSizeClasses = {
    sm: "text-sm min-w-[2rem]",
    md: "text-base min-w-[2.5rem]",
    lg: "text-lg min-w-[3rem]",
  };

  if (!showControls) {
    return (
      <div className={cn("flex items-center justify-center", className)}>
        <AnimatePresence mode="wait">
          <motion.span
            key={displayValue}
            initial={{ y: 20 }}
            animate={{  y: 0 }}
            exit={{ y: -20 }}
            transition={{ duration: 0.2 }}
            className={cn("font-semibold", counterSizeClasses[size])}
          >
            {displayValue}
          </motion.span>
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Button
        variant={variant}
        size="icon"
        onClick={decrement}
        disabled={displayValue <= min}
        className={cn(sizeClasses[size])}
      >
        <Minus className="h-3 w-3" />
      </Button>

      <div className="flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={displayValue}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ 
              duration: 0.2,
              type: "spring",
              stiffness: 300,
              damping: 20
            }}
            className={cn(
              "font-semibold text-center",
              counterSizeClasses[size]
            )}
          >
            {displayValue}
          </motion.span>
        </AnimatePresence>
      </div>

      <Button
        variant={variant}
        size="icon"
        onClick={increment}
        disabled={displayValue >= max}
        className={cn(sizeClasses[size])}
      >
        <Plus className="h-3 w-3" />
      </Button>
    </div>
  );
}

// Alternative: Simple animated number display
export function AnimatedNumber({
  value,
  className,
  duration = 0.5,
}: {
  value: number;
  className?: string;
  duration?: number;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayValue(value);
    }, 50);

    return () => clearTimeout(timer);
  }, [value]);

  return (
    <motion.span
      key={value}
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration }}
      className={className}
    >
      <motion.span
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: duration * 0.8 }}
      >
        {displayValue}
      </motion.span>
    </motion.span>
  );
}

// Badge Counter with animation
export function AnimatedBadge({
  count,
  showZero = false,
  className,
}: {
  count: number;
  showZero?: boolean;
  className?: string;
}) {
  if (count === 0 && !showZero) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1,}}
        exit={{ scale: 0}}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
        className={cn(
          "absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full min-w-[1.25rem] h-5 flex items-center justify-center px-1",
          className
        )}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={count}
            initial={{ y: -10 }}
            animate={{ y: 0 }}
            exit={{ y: 10 }}
            transition={{ duration: 0.15 }}
            className="font-medium"
          >
            {count > 99 ? "99+" : count}
          </motion.span>
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
