"use client";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { Moon, Sun1 } from "iconsax-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <Dropdown backdrop="blur">
        <DropdownTrigger>
          <Button>{theme == "light" ? <Sun1 /> : <Moon />}</Button>
        </DropdownTrigger>
        <DropdownMenu onAction={(key) => setTheme(key as string)}>
          <DropdownItem key={"light"} startContent={<Sun1 />}>
            Light
          </DropdownItem>
          <DropdownItem key={"dark"} startContent={<Moon />}>
            Dark
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
