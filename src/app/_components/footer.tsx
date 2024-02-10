import {
  BookSquare,
  Call,
  Clock,
  Facebook,
  Instagram,
  Location,
  Sms,
  Twitch,
} from "iconsax-react";
import { ThemeSwitcher } from "./theme-switcher";
import { Chip } from "@nextui-org/react";

export default function SiteFooter() {
  return (
    <div className="flex w-full flex-col border-t-2 border-gray-600 lg:px-44">
      <div className="flex flex-col justify-between gap-2 px-10 pt-5 md:flex-row">
        <div className="flex flex-row gap-2">
          <Chip startContent={<Location />} color="primary" variant="light">
            550 Seymour St, Vancouver, BC, Canada, V6B 3J5
          </Chip>
        </div>

        <div className="flex flex-row gap-2">
          <Chip startContent={<Clock />} color="primary" variant="light">
            Everyday Noon to Midnight
          </Chip>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-2 px-10 pt-5 md:flex-row">
        <div className="flex flex-row gap-2">
          <Chip startContent={<Facebook />} color="primary" variant="light" />

          <Chip startContent={<Instagram />} color="primary" variant="light" />

          <Chip startContent={<Twitch />} color="primary" variant="light" />
        </div>

        <div className="flex flex-row gap-2">
          <Chip startContent={<Call />} color="primary" variant="light">
            (604) 565-5505
          </Chip>

          <Chip startContent={<Sms />} color="primary" variant="light">
            Info@5FiftyGame.ca
          </Chip>
        </div>
      </div>
      <div className="flex h-[75px] w-full flex-row items-center justify-between px-10">
        <div className="flex flex-row items-center gap-2 font-semibold text-gray-400">
          5Fifty Gaming | All rights reserved {new Date().getFullYear()}
        </div>
        {/* <ModeToggle /> */}
        <ThemeSwitcher />
      </div>
    </div>
  );
}
