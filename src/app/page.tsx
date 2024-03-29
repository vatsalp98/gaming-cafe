import Link from "next/link";
import SiteLayout from "./_components/default-layout";
import Image from "next/image";
import { Button } from "@nextui-org/react";

export default function HomePage() {
  return (
    <>
      <SiteLayout>
        <div>
          <div className="flex w-full flex-col items-center justify-center px-6 lg:px-8">
            <div
              className="absolute inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
            {/* <div className="mx-auto max-w-2xl py-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Unlock the Ultimate Gaming Experience!
              </h1>
              <p className="mt-6 text-lg leading-8 ">
                Welcome to 5FiftyGame, where gaming meets community in an
                unparalleled fusion of entertainment and camaraderie. Step into
                a world of immersive gaming, cutting-edge technology, and a
                vibrant atmosphere that caters to both casual players and
                hardcore enthusiasts.
              </p>
            </div>
          </div> */}
            <div className="flex w-full flex-col items-center justify-between pb-16 pt-32">
              <div className="w-1/2 md:w-full">
                <Image
                  src="/gaming_hero.svg"
                  alt="Profile Picture"
                  width={450}
                  height={450}
                  className="mb-10 h-[300px] w-full md:inline-block md:w-full"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 50vw"
                />
              </div>
              <div className="flex flex-col items-center self-center text-center lg:w-full">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                  Unlock the Ultimate Gaming Experience!
                </h1>
                <p className="mt-6 text-center text-lg leading-8">
                  Welcome to 5FiftyGame, where gaming meets community in an
                  unparalleled fusion of entertainment and camaraderie. Step
                  into a world of immersive gaming, cutting-edge technology, and
                  a vibrant atmosphere that caters to both casual players and
                  hardcore enthusiasts.
                </p>
              </div>
            </div>
            <div
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
          <div className="py-52 ">
            <h1 className="mb-10 text-center text-4xl font-bold tracking-tight sm:text-6xl">
              Games Collection
            </h1>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-center text-2xl font-semibold leading-8 ">
                PC Games
              </h2>
              <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                <Image
                  className="col-span-2 w-full rounded-lg object-contain lg:col-span-1"
                  src="/games/cs2.jpg"
                  alt="CS2"
                  width={258}
                  height={100}
                />
                <Image
                  className="col-span-2 w-full rounded-lg object-contain lg:col-span-1"
                  src="/games/lol.jpeg"
                  alt="Reform"
                  width={258}
                  height={100}
                />
                <Image
                  className="col-span-2 w-full rounded-lg object-contain lg:col-span-1"
                  src="/games/dota2.jpg"
                  alt="Tuple"
                  width={258}
                  height={100}
                />
                <Image
                  className="col-span-2 w-full rounded-lg object-contain sm:col-start-2 lg:col-span-1"
                  src="/games/wow.jpeg"
                  alt="SavvyCal"
                  width={258}
                  height={100}
                />
                <Image
                  className="col-span-2 col-start-2 w-full rounded-lg object-contain sm:col-start-auto lg:col-span-1"
                  src="/games/overwatch.jpeg"
                  alt="Statamic"
                  width={258}
                  height={100}
                />
                <Image
                  className="col-span-2 col-start-2 w-full rounded-lg object-contain sm:col-start-auto lg:col-span-1"
                  src="/games/hearthstone.jpeg"
                  alt="Statamic"
                  width={258}
                  height={100}
                />
                <Image
                  className="col-span-2 col-start-2 w-full rounded-lg object-contain sm:col-start-auto lg:col-span-1"
                  src="/games/warzone.jpeg"
                  alt="Statamic"
                  width={258}
                  height={100}
                />
                <Image
                  className="col-span-2 col-start-2 w-full rounded-lg object-contain sm:col-start-auto lg:col-span-1"
                  src="/games/diablo2.jpg"
                  alt="Statamic"
                  width={258}
                  height={100}
                />
                <Image
                  className="col-span-2 col-start-2 w-full rounded-lg object-contain sm:col-start-auto lg:col-span-1"
                  src="/games/valorant.jpg"
                  alt="Statamic"
                  width={258}
                  height={100}
                />
                <Image
                  className="col-span-2 col-start-2 w-full rounded-lg object-contain sm:col-start-auto lg:col-span-1"
                  src="/games/apex.jpg"
                  alt="Statamic"
                  width={258}
                  height={100}
                />
                <Image
                  className="col-span-2 col-start-2 w-full rounded-lg object-contain sm:col-start-auto lg:col-span-1"
                  src="/games/rocket.jpg"
                  alt="Statamic"
                  width={258}
                  height={100}
                />
                <Image
                  className="col-span-2 col-start-2 w-full rounded-lg object-contain sm:col-start-auto lg:col-span-1"
                  src="/games/pubg.jpg"
                  alt="Statamic"
                  width={258}
                  height={100}
                />
                <Image
                  className="col-span-2 col-start-2 w-full rounded-lg object-contain sm:col-start-auto lg:col-span-1"
                  src="/games/fortnite.jpeg"
                  alt="Statamic"
                  width={258}
                  height={100}
                />
                <Image
                  className="col-span-2 col-start-2 w-full rounded-lg object-contain sm:col-start-auto lg:col-span-1"
                  src="/games/gta5.jpg"
                  alt="Statamic"
                  width={258}
                  height={100}
                />
                <Image
                  className="col-span-2 col-start-2 w-full rounded-lg object-contain sm:col-start-auto lg:col-span-1"
                  src="/games/source.jpeg"
                  alt="Statamic"
                  width={258}
                  height={100}
                />
              </div>
              <div className="mt-10 flex w-full flex-row items-center justify-center">
                <Button
                  as={Link}
                  href="/facilities"
                  variant="ghost"
                  color="primary"
                >
                  View All
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SiteLayout>
    </>
  );
}
