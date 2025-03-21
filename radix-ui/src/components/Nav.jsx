import { Link } from "@radix-ui/themes";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-gray-900 backdrop-blur-sm border-b border-gray-800">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-white">Zenfusion</span>
        </Link>
        <nav className="hidden md:flex ml-auto gap-6">
          <Link
            href="#"
            className="text-sm font-medium text-gray-200 hover:text-white"
          >
            Products
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-gray-200 hover:text-white"
          >
            Solutions
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-gray-200 hover:text-white"
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-gray-200 hover:text-white"
          >
            Resources
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-gray-200 hover:text-white"
          >
            About
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-4 ml-4">
          <button
            variant="outline"
            className="text-white border-white hover:bg-white/10"
          >
            Log In
          </button>
          <button className="bg-white text-gray-900 hover:bg-gray-200">
            Get Started
          </button>
        </div>
        <button
          className="ml-auto md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-800">
          <div className="container py-4 px-4">
            <nav className="flex flex-col gap-4">
              <Link
                href="#"
                className="text-sm font-medium text-gray-200 hover:text-white"
              >
                Products
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-gray-200 hover:text-white"
              >
                Solutions
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-gray-200 hover:text-white"
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-gray-200 hover:text-white"
              >
                Resources
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-gray-200 hover:text-white"
              >
                About
              </Link>
            </nav>
            <div className="flex flex-col gap-2 mt-4">
              <button
                variant="outline"
                className="w-full text-white border-white hover:bg-white/10"
              >
                Log In
              </button>
              <button className="w-full bg-white text-gray-900 hover:bg-gray-200">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
