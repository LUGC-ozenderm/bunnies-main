import Image from "next/image";

const BUNNIES = [
  { image: "/images/bunny1.png", alt: "1", name: "Beginner", price: "1 Coin" },
  { image: "/images/bunny2.png", alt: "2", name: "Grass", price: "5 Coins" },
  { image: "/images/bunny3.png", alt: "3", name: "Flower", price: "15 Coins" },
  { image: "/images/bunny4.png", alt: "4", name: "Dirt", price: "12 Coins" },
  { image: "/images/bunny5.png", alt: "5", name: "Forest", price: "18 Coins" },
];


export default function BunniesPage() {
  return (
    <section className="page-section">
      <div className="page-kicker">Bunny team</div>
      <h1 className="page-title">Meet the bunny heroes</h1>
      <p className="page-lead">Every bunny is special in its own way</p>

      <div className="card-grid card-grid-2">
        {BUNNIES.map((bunny) => (
          <article key={bunny.image} className="card bunny-card">
            <div className="bunny-portrait">
              <Image
                src={bunny.image}
                alt={bunny.alt}
                width={80}
                height={80}
              />
            </div>

            <div className="bunny-info">
              <h3 className="bunny-name">{bunny.name}</h3>
              <p className="bunny-price">{bunny.price}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
