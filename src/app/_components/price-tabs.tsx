"use client";

import { Clock, Game, Windows } from "iconsax-react";
import PricingCard from "./pricing-card";
import { Chip, Tab, Tabs } from "@nextui-org/react";

export default function PricingTabs() {
  let tabs = [
    {
      id: "regular",
      label: "Regular",
      content: (
        <>
          <div className="flex w-full flex-row gap-5">
            <PricingCard
              title="PC"
              price="CAD$ 6.99 / Hour"
              icon={<Windows size={35} />}
            />

            <PricingCard
              title="XBOX / PS5"
              price="CAD$ 9.99 / Hour"
              icon={<Game size={35} />}
            />
          </div>
        </>
      ),
    },
    {
      id: "membership",
      label: "Membership",
      content: (
        <>
          <div className="flex w-full flex-row gap-5">
            <PricingCard
              title="Top Up $27"
              price="5 Hours"
              icon={<Clock size={35} />}
            />
            <PricingCard
              title="Top Up $50"
              price="10 Hours"
              icon={<Clock size={35} />}
            />
            <PricingCard
              title="Top Up $100"
              price="22 Hours"
              icon={<Clock size={35} />}
            />
            <PricingCard
              title="Top Up $200"
              price="46 Hours"
              icon={<Clock size={35} />}
            />
          </div>
          <div className="mt-10 flex w-full items-center justify-center text-lg">
            <Chip className="text-lg">
              Members can save money and keep their remaining time!
            </Chip>
          </div>
        </>
      ),
    },
  ];
  return (
    <>
      <Tabs
        aria-label="Dynamic tabs"
        items={tabs}
        variant="light"
        color="warning"
      >
        {(item) => (
          <Tab key={item.id} title={item.label} className="text-lg">
            <div className="mt-10">{item.content}</div>
          </Tab>
        )}
      </Tabs>
    </>
  );
}
