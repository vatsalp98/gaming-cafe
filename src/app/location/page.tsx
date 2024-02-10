import { Chip, Link, cn } from "@nextui-org/react";
import SiteLayout from "../_components/default-layout";
import { DirectUp, Gps } from "iconsax-react";

export default function LocationPage() {
  let walk_times = [
    "Waterfont station: 4mns",
    "Granville Station: 2mns",
    "Public Parking: 1mn",
    "7eleven: 1mn",
    "Burger King: 1mn",
    "Starbucks: 3mns",
    "Pacific Center Mall: 3mns",
    "Subway: 2mns",
    "Vancouver Lookout: 3mns",
    "Tim Hortons: 2mns",
    "Freshslice: 2mns",
    "Cartems Donuts: 1mn",
  ];

  return (
    <>
      <SiteLayout>
        <div className="w-full">
          <div className="mt-16 flex w-full flex-col items-center justify-center px-20">
            <div className="mb-10 w-full">
              <iframe
                src="https://www.google.com/maps/d/u/1/embed?mid=1xQ_YqcrNQQ6XsZPlz-3LMhpmQ98&ehbc=2E312F"
                width="100%"
                height="480"
                loading="lazy"
              ></iframe>
            </div>
            <h2 className="flex flex-row items-center gap-2 text-3xl font-bold">
              {" "}
              <Gps size={30} /> Location
            </h2>
            <Link
              className={"my-5 text-center"}
              href="https://maps.app.goo.gl/8Ek1XBPEjGJyMuE6A"
              target="_blank"
            >
              550 Seymour St, Vancouver, BC V6B 3H6
            </Link>
            <span className="text-center">
              Conveniently located in Downtown Vancouver. Close to the
              Restaurants,Fast Food, Skytrain, SeaBus and other facilities.
              Surrounded by schools and universities.
            </span>
            <span className="mt-2 font-semibold">
              Our Location is Downtown Vancouver
            </span>
            <div className="mt-10 flex flex-col items-center justify-center">
              <h3 className="flex flex-row items-center gap-2 text-3xl font-semibold">
                <DirectUp size={30} />
                Walk Time
              </h3>
              <ul className="mb-10 mt-10 grid grid-cols-2 gap-5">
                {walk_times.map((item) => (
                  <li key={item}>
                    <Chip variant="solid" color="warning">
                      {item}
                    </Chip>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SiteLayout>
    </>
  );
}
