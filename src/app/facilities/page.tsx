import SiteLayout from "../_components/default-layout";
import Image from "next/image";
import AccordionFacilities from "../_components/facilities-accordion";

export const metadata = {
  title: "5FiftyGaming | Facilities",
  description:
    "Best gaming cafe in the heart of Vancouver Downtown. Open to reservations and game requests.",
  icons: [
    {
      rel: "icon",
      url: "https://i0.wp.com/5fiftygame.ca/wp-content/uploads/2022/08/cropped-5Fiftygame-logo-4.6-icon-2-small.png?fit=32%2C32&ssl=1",
    },
  ],
};

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
              <AccordionFacilities />
            </div>
          </div>
        </div>
      </SiteLayout>
    </>
  );
}
