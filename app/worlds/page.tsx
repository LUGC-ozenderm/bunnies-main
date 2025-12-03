import Image from "next/image";

const WORLDS = [
  {
    name: "Bunnyverse",
    difficulty: "Easy",
    description:
      "A soft grass clearing with slow vacuums, glowing flowers, and wide paths made for first-time players. Rarity of bunnies - Common",
    image: "/images/w1.png",
  },
  {
    name: "Magical Forest",
    difficulty: "Medium",
    description:
      "A valley filled with tiny cabins and a warm campfire circle. Vacuums patrol along dirt roads and bridges. Rarity of bunnies - Rare and higher",
    image: "/images/world2.png",
  },
];

export default function WorldsPage() {
  return (
    <section className="page-section">
      <div className="page-kicker">Worlds</div>
      <h1 className="page-title">Explore the Worlds</h1>
      <p className="page-lead">
        Each world has its own look. Start with easier world
        and move deeper into the forest as you gain confidence.
      </p>

<div className="worlds-grid">
        {WORLDS.map((world) => (
          <article key={world.name} className="card">
            <div className="image-frame world-image">
              <Image
                src={world.image}
                alt={`${world.name} overview`}
                width={360}
                height={220}
              />
            </div>
            <h2 className="card-title">{world.name}</h2>
            <div className="card-meta">
              Difficulty: <strong>{world.difficulty}</strong>
            </div>
            <p className="card-body">{world.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
