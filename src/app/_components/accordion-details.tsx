import Image from "next/image";

type AccordionDetailsProps = {
  img: string;
  title: string;
  description: string;
  features: string[];
};

export default function AccordionDetails({
  img,
  title,
  description,
  features,
}: AccordionDetailsProps) {
  return (
    <>
      <div className="flex items-center justify-center">
        <Image src={img} width={350} height={350} alt="Chair" className="" />
      </div>
      <h2 className="text-lg font-bold text-primary">{title}</h2>
      <div>{description}</div>
      <div className="mt-3">
        <ul className="list-inside list-disc">
          {features.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
