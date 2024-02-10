"use client";

import { Card, CardBody, CardHeader, Chip, Tab, Tabs } from "@nextui-org/react";
import SiteLayout from "../_components/default-layout";
import PricingCard from "../_components/pricing-card";
import Image from "next/image";
import { Clock, Game, Windows } from "iconsax-react";

export default function PricingPage() {
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
      <SiteLayout>
        <div className="w-full">
          <div className="flex min-h-screen w-full flex-col items-center justify-center">
            <Image
              src="/price.svg"
              width={400}
              height={400}
              alt="pricing"
              className="mb-10"
            />
            <h2 className="mb-10 text-3xl font-bold">Pricing at 5FiftyGame</h2>
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
          </div>
        </div>
      </SiteLayout>
    </>
  );
}
