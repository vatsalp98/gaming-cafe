import SiteLayout from "../_components/default-layout";
import Image from "next/image";
import PricingTabs from "../_components/price-tabs";

export const metadata = {
  title: "5FiftyGaming | Pricing",
  description:
    "Best gaming cafe in the heart of Vancouver Downtown. Open to reservations and game requests.",
  icons: [
    {
      rel: "icon",
      url: "https://i0.wp.com/5fiftygame.ca/wp-content/uploads/2022/08/cropped-5Fiftygame-logo-4.6-icon-2-small.png?fit=32%2C32&ssl=1",
    },
  ],
};

export default function PricingPage() {
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
            <PricingTabs />
          </div>
        </div>
      </SiteLayout>
    </>
  );
}
