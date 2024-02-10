import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { Windows } from "iconsax-react";
import { ReactNode } from "react";

type PricingCardProps = {
  icon: ReactNode;
  title: string;
  price: string;
};

export default function PricingCard({ icon, title, price }: PricingCardProps) {
  return (
    <>
      <Card className="h-[200px] w-[200px]">
        <CardHeader className="flex flex-col items-center justify-center gap-5">
          {icon}
          <h2 className="text-2xl font-semibold">{title}</h2>
          <span className="text-lg font-semibold">{price}</span>
        </CardHeader>
      </Card>
    </>
  );
}
