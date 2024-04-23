"use client";

import { cn } from "@/lib/utils";
import { Menu, MenuItem } from "./navbar-menu";

function Navbar({ className }: { className?: string }) {
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu>
        <MenuItem item="Password change"></MenuItem>

        <MenuItem item="Logout"></MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;
