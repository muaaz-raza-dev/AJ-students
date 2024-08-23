"use client";
import React from 'react'
import { motion } from "framer-motion";

export default function DragabbleLogo() {
  return (
    <motion.div
    animate={{ scale: 1 }}
    drag
    whileDrag={{ scale: 1 }}
    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
    transition={{ type: "spring" }}
    whileTap={{ scale: 1.2 }}
    initial={{ scale: 0.5 }}
  >
    <div
      className="w-32 cursor-pointer border-[var(--light)]  text-primary-foreground shadow-md aspect-square rounded-full center text-5xl font-black bg-primary"
    >
      AJ
    </div>
  </motion.div>
  )
}
