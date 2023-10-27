'use client'

import { useEffect } from "react"

export default function ClientComponents() {
  useEffect(() => {
    const cursor: HTMLElement = document.querySelector("#cursor") || document.createElement('div');
    const cursorPos = { x: 0, y: 0 };

    const listener = (e: any) => {
      cursorPos.x = e.clientX;
      cursorPos.y = e.clientY;

      if (cursor === null) return
      cursor.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
    }

    document.addEventListener("mousemove", listener);
    return () => {
      document.removeEventListener("mousemove", listener);
    }
  })
  return <>
    <span id="cursor" className="hidden lg:block fixed left-0 top-0 w-2 h-2 rounded-full border border-black duration-500 ease-out pointer-events-none"></span>
  </>
}