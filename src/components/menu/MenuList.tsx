import React from "react";

const menuItems = [
  {
    category: "Brews & Sips",
    items: [
      {
        name: "Herbal Tea",
        price: "$5",
        description: "A soothing blend of chamomile and lavender.",
        note: "Our herbal teas are brewed fresh, perfect for calming your mind."
      },
      {
        name: "Green Smoothie",
        price: "$7",
        description: "Spinach, kale, apple, and a hint of ginger."
      },
      {
        name: "Turmeric Latte",
        price: "$5",
        description: "Warm almond milk with turmeric and cinnamon."
      }
    ]
  },
  {
    category: "Nourishing Bowls & Toasts",
    items: [
      {
        name: "Quinoa Salad",
        price: "$9",
        description: "Fresh veggies tossed with lemon vinaigrette."
      },
      {
        name: "Avocado Toast",
        price: "$6",
        description: "Whole grain bread topped with ripe avocado and seeds."
      },
      {
        name: "Berry Bowl",
        price: "$8",
        description: "Mixed berries, nuts, and a drizzle of honey."
      }
    ]
  }
];

export function MenuList() {
  return (
    <section className="py-20 bg-vintage-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {menuItems.map((section, idx) => (
            <div key={idx} className="space-y-12">
              <h2 className="font-ultra text-3xl text-forest-green border-b-2 border-forest-green/20 pb-4 uppercase tracking-wider">
                {section.category}
              </h2>
              <div className="space-y-10">
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="group">
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="font-ultra text-xl md:text-2xl text-muted-brown group-hover:text-forest-green transition-colors duration-300 uppercase">
                        {item.name}
                      </h3>
                      <span className="font-ultra text-xl text-forest-green">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-muted-brown/70 font-medium leading-relaxed mb-2">
                      {item.description}
                    </p>
                    {item.note && (
                      <p className="text-sm italic text-muted-brown/50 border-l-2 border-muted-brown/20 pl-4 mt-2">
                        {item.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
