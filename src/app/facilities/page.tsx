"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";
import SiteLayout from "../_components/default-layout";
import { Add } from "iconsax-react";
import Image from "next/image";
import AccordionDetails from "../_components/accordion-details";

export default function FacilitiesPage() {
  return (
    <>
      <SiteLayout>
        <div className="w-full">
          <div className="mb-32 mt-10 flex min-h-screen w-full flex-col items-center justify-center">
            <Image
              src={"/gaming-facilities.svg"}
              alt="Facilites"
              width={350}
              height={350}
              className=""
            />
            <h2 className="mt-10 text-3xl font-bold">Facilities</h2>
            <div className="w-full px-32">
              <Accordion className="w-full" defaultExpandedKeys={["chairs"]}>
                <AccordionItem
                  key={"chairs"}
                  title="Our Chairs"
                  subtitle="DX Racer gaming chair"
                  indicator={<Add />}
                  className="w-full"
                >
                  <AccordionDetails
                    img="https://i0.wp.com/www.5fiftygame.ca/wp-content/uploads/2023/04/PNG-image-D726385021F4-1-300x300.png?resize=300%2C300&ssl=1"
                    title="DX Racer"
                    description="The Racing Series’ high-density cold cure foam filling makes these chairs comfortable for extended use, especially for durations of 8 hours and longer."
                    features={[
                      "High straight back",
                      "3D straight adjustable armrests with soft pad cover",
                      "Inlaid Color Bar Base with 2″ caster",
                      "Integrated headrest",
                      "Backrest adjustable down to a comfortable position",
                      "Conventional Tilt Mechanism",
                      "Adjustable seat flexibility",
                      "Lumbar cushion and headrest pillow included",
                    ]}
                  />
                </AccordionItem>

                <AccordionItem
                  key={"headsets"}
                  title="Our Headsets"
                  subtitle="HyperX Cloud II"
                  indicator={<Add />}
                  className="w-full"
                >
                  <AccordionDetails
                    img="https://i0.wp.com/www.5fiftygame.ca/wp-content/uploads/2023/04/PNG-image-2A6410621D38-1-300x169.png?resize=300%2C169&ssl=1"
                    title="HyperX Cloud II"
                    description="The HyperX Cloud was built to be an ultra-comfortable gaming headset with amazing sound. We put a lot of thought into the details of our HyperX signature memory foam, the premium leatherette, clamping force, and weight distribution to create a headset that's comfortable through long gaming sessions. It's no wonder that it's become the preferred gaming headset for millions of gamers. Whether you want to focus on the competition or relax with some of your favorite games, there's a Cloud that's perfect for you."
                    features={[
                      "HyperX Signature Memory Foam and Premium Leatherette",
                      "HyperX 7.1 Surround Sound",
                      "Built-in mic monitoring",
                      "53mm Drivers",
                      "Detachable Noise-cancelling Microphone",
                      "Durable aluminum frame",
                      "Multi-platform compatibility",
                      "Frequency Response 15Hz–25,000 Hz",
                    ]}
                  />
                </AccordionItem>

                <AccordionItem
                  key={"monitor"}
                  title="Our Monitors"
                  subtitle="Asus Tuf Gaming"
                  indicator={<Add />}
                  className="w-full"
                >
                  <AccordionDetails
                    img="https://i0.wp.com/www.5fiftygame.ca/wp-content/uploads/2021/11/P_setting_xxx_0_90_end_500-300x300.png?resize=300%2C300&ssl=1"
                    title="Asus TUF Gaming"
                    description="23.8-inch Full HD (1920×1080) IPS gaming monitor with fast 144Hz refresh rate designed for professional gamers and fast paced gameplay."
                    features={[
                      "ASUS Extreme Low Motion Blur (ELMB)",
                      "1ms MPRT",
                      "FreeSync™ technology",
                      "Features an ergonomically designed stand",
                      "Shadow Boost",
                      "Adaptive-Sync with NVIDIA GeForce* graphics cards and FreeSync with AMD",
                    ]}
                  />
                </AccordionItem>

                <AccordionItem
                  key={"keyboard"}
                  title="Our Keyboards"
                  subtitle="Corsair K70 RGB"
                  indicator={<Add />}
                  className="w-full"
                >
                  <AccordionDetails
                    img="https://i0.wp.com/www.5fiftygame.ca/wp-content/uploads/2017/06/CGK70_RGB_NA_01-300x211.png?resize=300%2C211&ssl=1"
                    title="Corsair K70 RGB"
                    description="The Corsair Gaming K70 RGB mechanical gaming keyboard begins with the performance of the legendary K70"
                    features={[
                      "Cherry MX RED Switches",
                      "104 full key rollover",
                      "100% anti-ghosting",
                      "Multicolor per-key backlighting",
                    ]}
                  />
                </AccordionItem>

                <AccordionItem
                  key={"mouse"}
                  title="Our Mouses"
                  subtitle="Razer DeathAdder v2"
                  indicator={<Add />}
                  className="w-full"
                >
                  <AccordionDetails
                    img="https://i0.wp.com/www.5fiftygame.ca/wp-content/uploads/2023/06/razer-mouse-v3-300x218.png?resize=300%2C218&ssl=1"
                    title="Razer DeathAdder v2"
                    description="With over 10 million Razer DeathAdders sold, the most celebrated and awarded gaming mouse in the world has earned its popularity through its exceptional ergonomic design. Perfectly suited for a palm grip, it also works well with claw and fingertip styles."
                    features={[
                      "Best In-Class ergonomics",
                      "Lightweigth",
                      "Precise Optical Sensor",
                      "Works with claw or fingertips Style",
                    ]}
                  />
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </SiteLayout>
    </>
  );
}
