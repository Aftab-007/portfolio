import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ThemeToggle from "../ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-bg/80 backdrop-blur border-b border-muted/20">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Name */}
        <div className="text-lg font-semibold tracking-tight">
          Mohammad Aftab Arab
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted">
          <a href="#home" className="hover:text-text">
            Home
          </a>
          <a href="#what-i-do" className="hover:text-text">
            What I Do
          </a>
          <a href="#projects" className="hover:text-text">
            Projects
          </a>
          <a href="#contact" className="hover:text-text">
            Contact
          </a>
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-surface rounded-md"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <Bars3Icon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-muted/20 bg-bg">
          <nav className="px-6 py-4 flex flex-col gap-4 text-muted">
            <a href="#home" onClick={() => setOpen(false)}>
              Home
            </a>
            <a href="#what-i-do" onClick={() => setOpen(false)}>
              What I Do
            </a>
            <a href="#projects" onClick={() => setOpen(false)}>
              Projects
            </a>
            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
