import {
  Button,
  Kbd,
  Link,
  Input,
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  Navbar,
} from "@nextui-org/react";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
} from "@/components/icons";

import { Logo } from "@/components/icons";
import { useState } from "react";

export const NavbarHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [meActive, setMenuActive] = useState("");

  const menuItems = ["Dữ liệu cầu thủ", "Top tier", "Sắp xếp đội hình"];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      isBlurred={false}
      className="font-semibold font-sans"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="middeLaptop:hidden"
        />
        <NavbarBrand>
          <Link href="/">
            <p className="font-bold text-inherit">VINA FC</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="xss:max-middeLaptop:hidden flex gap-4"
        justify="center"
      >
        <NavbarItem
          isActive={meActive === "/du-lieu-cau-thu-fc-online"}
          onClick={() => setMenuActive("/du-lieu-cau-thu-fc-online")}
        >
          <Link
            color="foreground"
            href="/du-lieu-cau-thu-fc-online"
            className=" text-[17px]"
          >
            Dữ liệu cầu thủ
          </Link>
        </NavbarItem>
        <NavbarItem isActive={meActive === "/top-tier"}>
          <Link
            href="/top-tier"
            aria-current="page"
            color="foreground"
            className=" text-[17px]"
          >
            Top Tier
          </Link>
        </NavbarItem>
        <NavbarItem isActive={meActive === "/sap-xep-doi-hinh"}>
          <Link
            color="foreground"
            href="/sap-xep-doi-hinh"
            className=" text-[17px]"
          >
            Sắp xếp đội hình
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="middeLaptop:hidden">
        <NavbarMenuItem>
          <Link color="foreground" href="/du-lieu-cau-thu-fc-online">
            Dữ liệu cầu thủ
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" href="/top-tier">
            Top Tier
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" href="/sap-xep-doi-hinh">
            Sắp xếp đội hình
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};
