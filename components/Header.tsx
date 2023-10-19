import React from "react";
import Container from "./ui/container";
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./ui/mode-toggle";

const routes = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Example1",
    href: "/example1",
  },
  {
    label: "Example2",
    href: "/example2",
  },
  {
    label: "Example3",
    href: "/example3",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  return (
    <div className="sm:flex sm:justify-between py-3 px-4 border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center space-x-96">
            <Link
              href="/"
              className="ml-4 lg:ml-0"
            >
              <h1 className="text-xl font-bold">Site Name</h1>
            </Link>
            <nav className="mx-6  items-center space-x-4 lg:space-x-6 hidden md:block">
              {routes.map((route, idx) => (
                <Button
                  key={idx}
                  asChild
                  variant="ghost"
                >
                  <Link
                    href={route.href}
                    className="text-sm font-medium transition-colors"
                  >
                    {route.label}
                  </Link>
                </Button>
              ))}
            </nav>
            <ModeToggle />
          </div>
        </div>
      </Container>
    </div>
  );
}
