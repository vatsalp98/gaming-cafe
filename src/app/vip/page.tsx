import { Card, CardBody, CardHeader } from "@nextui-org/react";
import SiteLayout from "../_components/default-layout";
import Image from "next/image";

export default function VipPage() {
  return (
    <>
      <SiteLayout>
        <div className="w-full">
          <div className="mb-32 mt-10 flex min-h-screen w-full flex-col items-center justify-center gap-10">
            <h2 className="text-3xl font-bold">Our VIP Services</h2>
            <div className="flex flex-col gap-10 px-20">
              <Card className="p-4">
                <CardHeader className="flex flex-col items-center justify-center text-2xl font-semibold">
                  <Image
                    src={
                      "https://i0.wp.com/www.5fiftygame.ca/wp-content/uploads/2021/10/Alienware-pc-for-website-copy.png?resize=210%2C212&ssl=1"
                    }
                    width={200}
                    height={200}
                    alt="PC GAME"
                    className="mb-3"
                  />
                  <h3>Pc Game</h3>
                </CardHeader>
                <CardBody>
                  <span>We are using High-end PC in our gaming setups.</span>
                  <div>
                    <ul className="list-inside list-disc">
                      <li>
                        GPU: NVIDIA GeForce RTX 3080 10GB/ NVIDIA GeForce RTX
                        2070 Super 8GB/NVIDIA GeForce RTX 4070 Ti 12GB
                      </li>
                      <li>
                        CPU: AMD Ryzen 7 5800x 4.8 GHz 8 Core Processor /
                        Intel® Core™ i7-12700KF 5.00 GHz 12 Core
                        Processor/Intel® Core™ i7-13700K 5.4 GHz 16 Core
                        Processor
                      </li>
                      <li>
                        RAM: Corsair Vengeance RGB Pro 32 GB DDR4/CORSAIR
                        Dominator Platinum RGB 32GB DDR5
                      </li>
                    </ul>
                  </div>
                </CardBody>
              </Card>

              <Card className="p-4">
                <CardHeader className="flex flex-col items-center justify-center text-2xl font-semibold">
                  <Image
                    src={
                      "https://i0.wp.com/www.5fiftygame.ca/wp-content/uploads/2023/06/XBOX-X-PS5-5-copy.png?resize=210%2C212&ssl=1"
                    }
                    width={200}
                    height={200}
                    alt="XBOX"
                    className="mb-3"
                  />
                  <h3>Xbox X & PS5</h3>
                </CardHeader>
                <CardBody>
                  <span className="text-center">
                    Play Xbox/PlayStation on 75 inch QLED TV for more fun
                  </span>
                </CardBody>
              </Card>

              <Card className="p-4">
                <CardHeader className="flex flex-col items-center justify-center text-2xl font-semibold">
                  <Image
                    src={
                      "https://i0.wp.com/www.5fiftygame.ca/wp-content/uploads/2017/03/tip3-HIGH-SPEED-INTERNET.png?resize=210%2C212&ssl=1"
                    }
                    width={200}
                    height={200}
                    alt="Internet"
                    className="mb-3"
                  />
                  <h3>High speed Internet</h3>
                </CardHeader>
                <CardBody>
                  <span className="text-center">
                    3 Gbps to play lowest ping game online
                  </span>
                </CardBody>
              </Card>

              <Card className="p-4">
                <CardHeader className="flex flex-col items-center justify-center text-2xl font-semibold">
                  <Image
                    src={
                      "https://i0.wp.com/www.5fiftygame.ca/wp-content/uploads/2017/04/tip2-Printer-2.png?resize=210%2C212&ssl=1"
                    }
                    width={200}
                    height={200}
                    alt="Printer"
                    className="mb-3"
                  />
                  <h3>Printing</h3>
                </CardHeader>
                <CardBody>
                  <div>
                    <ul className="list-inside list-disc">
                      <li>
                        High Quality Text & Photo with Laser Printer in letter
                        size
                      </li>
                      <li>
                        Adobe Reader (PDF) , Microsoft Office 365
                        (Word,PowerPoint,Excel,… )
                      </li>
                      <li>Printing in one side or Both side</li>
                      <li>
                        VLC Media Player : Plays most multimedia files as well
                        as DVDs, Audio CDs, VCDs, and various streaming
                        protocols, etc Except Blu-Ray Discs
                      </li>
                      <li>
                        KMPlayer 64X: Plays CD, HDML, DVD, AVI, MKV, Ogg, OGM,
                        RTS, 3GP, MPEG-1/2/4, AAC, WMA 7, 8, WMV, TS, MP4, WEBM,
                        MOV, 3G2, FLV, RM, AAC, MP3 ,RealMedia and QuickTime and
                        aslo Blu-Ray Discs, etc.
                      </li>
                    </ul>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </SiteLayout>
    </>
  );
}
