import Image from "next/image";

const CARDS = [
  {
    title: "Energy",
    text: "Neutrino contains B vitamins like B6 and B12 that support your energy metabolism and help reduce tiredness.",
    image: "/images/energy.webp",
  },
  {
    title: "Immune System",
    text: "Vitamin C from citrus fruits and minerals like zinc and selenium support your immune function.",
    image: "/images/immune.webp",
  },
  {
    title: "Focus",
    text: "Neutrino supports mental performance with pantothenic acid and cognitive function with zinc.",
    image: "/images/focus.webp",
  },
  {
    title: "Digestion",
    text: "Calcium supports digestive enzymes, while biotin contributes to the maintenance of the gut lining.",
    image: "/images/digest.webp",
  },
];

export default function CardList() {
  return (
    <div className="flex flex-col gap-4 md:gap-8">
      {CARDS.map(({ title, text, image }) => {
        return (
          <div key={title} className="flex gap-4">
            <div className="w-[72px] h-[72px] md:w-[134px] md:h-[134px]">
              <Image
                className="w-full h-full object-cover rounded-md"
                src={image}
                width={256}
                height={256}
                alt=""
              />
            </div>
            <div className="flex-1">
              <h3 className="md:font-medium text-lg md:text-3xl md:leading-12">
                {title}
              </h3>
              <p className="text-sm md:text-lg md:max-w-xl lg:max-w-2xl">
                {text}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
