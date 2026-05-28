"use client";

import { motion } from "framer-motion";

const UBER_EATS =
  "https://www.ubereats.com/ca/store/mikaku-udon-bar/zYO3gMWYUnOtK_hoZPBleQ";

type Item = {
  name: string;
  desc: string;
  price: string;
  rating?: string;
  tags?: Array<"signature" | "spicy" | "new" | "vegan">;
};

type Section = { name: string; items: Item[] };

const sections: Section[] = [
  {
    name: "Main Menu",
    items: [
      {
        name: "Chicken Curry Udon",
        desc: "Chewy udon noodles soaked in thick, creamy curry sauce, served with crispy chicken on top — our most ordered bowl.",
        price: "20.99",
        rating: "96% · 199",
        tags: ["signature"],
      },
      {
        name: "Maze Udon",
        desc: "Mixed udon with spicy meat, egg yolk and homemade special sauce in place of soup. Served with a bowl of rice — mix the leftover sauce in.",
        price: "17.99",
        rating: "97% · 114",
        tags: ["signature"],
      },
      {
        name: "Spicy Cream Udon",
        desc: "Our signature fusion. Mussels, shrimp, flying fish roe, bacon, cabbages and onions in a rich, spicy cream sauce. Served with 3pc baguette.",
        price: "21.99",
        rating: "93% · 105",
        tags: ["signature", "spicy"],
      },
      {
        name: "Buta Udon",
        desc: "Light and simple soy-sauce based udon with braised pork belly on top adding a savory depth.",
        price: "16.99",
        rating: "93% · 127",
        tags: ["signature"],
      },
      {
        name: "Seafood Udon",
        desc: "Spicy and rich seafood soup udon. Squid, baby octopus, mussels, shrimp and vegetables in harmony.",
        price: "20.99",
        rating: "89% · 28",
        tags: ["spicy"],
      },
      {
        name: "Oden Udon",
        desc: "Assorted oden, radish, rice cake and sausage skewer in a refreshing, comforting anchovy dashi broth.",
        price: "18.99",
        rating: "95% · 48",
        tags: ["new"],
      },
      {
        name: "Veggie Tofu Udon",
        desc: "Thick, creamy vegan soup. Various vegetables and fried tofu give a clean, fresh finish.",
        price: "16.99",
        rating: "95% · 23",
        tags: ["vegan"],
      },
    ],
  },
  {
    name: "Sides",
    items: [
      {
        name: "Chicken Karaage",
        desc: "Crispy chicken with our homemade karaage sauce. Garden salad served alongside.",
        price: "15.99",
        rating: "90% · 31",
        tags: ["signature"],
      },
      {
        name: "Takoyaki",
        desc: "Octopus balls with garlic mayo and special sauces. Garnished with dried bonito and parsley.",
        price: "13.99",
        rating: "100% · 27",
      },
      {
        name: "Geso Karaage",
        desc: "Crispy fried squid served with karaage sauce. House salad included.",
        price: "15.99",
        rating: "84% · 13",
      },
      {
        name: "Veggie Kakiage",
        desc: "Light, crispy Japanese vegetable tempura — onion, carrot, green bean and mushroom in a delicate batter.",
        price: "14.99",
        rating: "95% · 23",
      },
      {
        name: "Seared Buta",
        desc: "Pork belly seared to perfection.",
        price: "16.99",
        rating: "87% · 8",
      },
      {
        name: "Tako Wasabi",
        desc: "Diced octopus salad marinated in Japanese horseradish, served with dried seaweed.",
        price: "10.00",
        rating: "100% · 14",
      },
      {
        name: "Onigiri (1pc)",
        desc: "Triangular seasoned rice topped with minced pork, green onion, garlic mayo and spicy mayo.",
        price: "6.00",
        rating: "96% · 28",
      },
      {
        name: "Soft Tofu Salad",
        desc: "Cold soft tofu with homemade soy dressing.",
        price: "7.00",
        rating: "100% · 3",
      },
      {
        name: "House Salad",
        desc: "Fresh spring mix with two homemade fruit sauces — sweet and refreshing.",
        price: "6.00",
        rating: "66% · 9",
      },
    ],
  },
];

const drinks = [
  {
    name: "Pop",
    desc: "Coca-Cola · Coke Zero · Ginger Ale · Sprite · Nestea",
    price: "3.50",
  },
];

const addOns = [
  { name: "Extra Rice", price: "3.50" },
  { name: "Extra Baguette (4pc)", price: "3.00" },
  { name: "Extra Pickles", price: "2.50" },
];

function TagPill({ tag }: { tag: NonNullable<Item["tags"]>[number] }) {
  const map = {
    signature: { label: "Signature", className: "text-accent border-accent/50" },
    spicy: { label: "Spicy", className: "text-[#c63a1f] border-[#c63a1f]/50" },
    new: { label: "New", className: "text-ink border-ink" },
    vegan: { label: "Vegan", className: "text-[#5e7a3a] border-[#5e7a3a]/50" },
  } as const;
  const m = map[tag];
  return (
    <span
      className={`align-middle label rounded-full border px-2.5 py-1 ml-3 ${m.className}`}
    >
      {m.label}
    </span>
  );
}

export default function Menu() {
  return (
    <section id="menu" className="px-6 py-28 lg:py-40">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="text-center"
        >
          <p className="label text-ink/50 mb-5">— The Menu</p>
          <h2 className="serif text-5xl md:text-6xl">A Short, Honest Menu</h2>
          <p className="serif italic text-ink/65 mt-6 text-lg max-w-xl mx-auto leading-relaxed">
            Hand-pulled noodles, signature sauces, and Mikaku originals. If you
            have an allergy or special request, please let your server know.
          </p>

          <a
            href={UBER_EATS}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-3 bg-ink text-paper px-7 py-4 serif text-lg hover:bg-accent transition-colors group"
          >
            Order on Uber Eats
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </motion.div>

        <div className="mt-24 space-y-24">
          {sections.map((sec, si) => (
            <div key={sec.name}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7 }}
                className="flex items-center justify-center gap-6 mb-14"
              >
                <div className="hairline flex-1 max-w-[120px]" />
                <span className="label text-ink/60">0{si + 1}</span>
                <h3 className="serif text-3xl md:text-4xl italic whitespace-nowrap">
                  {sec.name}
                </h3>
                <div className="hairline flex-1 max-w-[120px]" />
              </motion.div>

              <div className="space-y-8">
                {sec.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.04 }}
                    className="group"
                  >
                    <div className="flex items-baseline gap-4">
                      <h4 className="serif text-2xl md:text-3xl text-ink group-hover:text-accent transition-colors">
                        {item.name}
                        {item.tags?.map((t) => (
                          <TagPill key={t} tag={t} />
                        ))}
                      </h4>
                      <div className="flex-1 border-b border-dotted border-ink/30 translate-y-[-6px]" />
                      <span className="serif text-2xl text-ink/85">${item.price}</span>
                    </div>
                    <div className="mt-2 flex items-baseline gap-4 flex-wrap">
                      <p className="text-ink/65 leading-relaxed serif italic max-w-2xl flex-1 min-w-[260px]">
                        {item.desc}
                      </p>
                      {item.rating && (
                        <span className="label text-ink/45 whitespace-nowrap">
                          ★ {item.rating}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

          {/* Drinks */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="flex items-center justify-center gap-6 mb-14"
            >
              <div className="hairline flex-1 max-w-[120px]" />
              <span className="label text-ink/60">03</span>
              <h3 className="serif text-3xl md:text-4xl italic">Drink</h3>
              <div className="hairline flex-1 max-w-[120px]" />
            </motion.div>

            <div className="space-y-8">
              {drinks.map((item) => (
                <div key={item.name}>
                  <div className="flex items-baseline gap-4">
                    <h4 className="serif text-2xl md:text-3xl text-ink">{item.name}</h4>
                    <div className="flex-1 border-b border-dotted border-ink/30 translate-y-[-6px]" />
                    <span className="serif text-2xl text-ink/85">${item.price}</span>
                  </div>
                  <p className="mt-2 text-ink/65 serif italic">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 max-w-md mx-auto border-y border-ink/20 py-6"
        >
          <p className="label text-ink/50 text-center mb-4">Add</p>
          {addOns.map((a) => (
            <div key={a.name} className="flex items-baseline justify-between serif text-lg mt-2 first:mt-0">
              <span>{a.name}</span>
              <span className="flex-1 mx-3 border-b border-dotted border-ink/30 translate-y-[-6px]" />
              <span>${a.price}</span>
            </div>
          ))}
        </motion.div>

        <div className="mt-14 flex flex-col items-center gap-5">
          <a
            href={UBER_EATS}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-ink text-paper px-9 py-5 serif text-lg hover:bg-accent transition-colors group"
          >
            Order on Uber Eats
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <p className="label text-ink/40 text-center">
            Halal chicken · Vegetarian options · Please inform our server of any allergies
          </p>
        </div>
      </div>
    </section>
  );
}
