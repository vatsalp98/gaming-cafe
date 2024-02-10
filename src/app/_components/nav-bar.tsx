import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "VIP Services",
    "Price",
    "Facilities",
    "Location",
    "Live Stream",
  ];

  return (
    <div className="flex w-full flex-row">
      <Navbar
        className="bg-red-500"
        isBordered
        position="sticky"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarContent className="items-center pr-3 sm:hidden" justify="center">
          <NavbarBrand>
            <Image src="/logo.png" alt="LOGO" width={200} height={75} />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden gap-4 sm:flex" justify="center">
          <NavbarBrand>
            <Image src="/logo.png" alt="LOGO" width={300} height={75} />
          </NavbarBrand>

          <NavbarItem className="ml-10">
            <Link color="foreground" href="/services">
              VIP Services
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/price">
              Price
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/facilities">
              Facilities
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/location">
              Location
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/live">
              Live Streams
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              as={Link}
              color="warning"
              target="_blank"
              href="https://fiftygame.booking.enes.tech/authentication"
              variant="shadow"
            >
              Reserve
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="w-full" href="#" size="lg">
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
