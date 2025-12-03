import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="about-page">

      <section className="about-section">
        <div className="page-kicker">Game overview</div>
        <h1 className="page-title">How Vacuum Bunnies Works</h1>
        <p className="page-lead">
          Vacuum Bunnies is a collecting and adventure game built around a
          simple loop: explore worlds, capture bunnies, and sell the bunnies you dont need to unlock even more content.
        </p>
      </section>

      <section className="about-section about-layout">
        <div className="about-text">
          <div className="about-pill-heading">Core Gameplay Loop</div>
          <ul className="about-list">
            <li>
              <strong>Explore Worlds:</strong> Every world has its own theme, difficulty level, and rarity tiers of bunnies.
              so come explore, collect and have fun!
            </li>
          </ul>
        </div>

        <div className="about-image">
          <div className="image-frame">
            <Image
              src="/images/vacuum1.png"
              alt="Vacuum catching bunnies in a flower field"
              width={640}
              height={320}
            />
          </div>
          <p className="about-image-caption">
          Players need determination to catch the special bunnies which spawn in every world
          </p>
        </div>
      </section>

      <section className="about-section about-layout">
        <div className="about-image">
          <div className="about-bunny-row">
            <div className="about-bunny-portrait">
              <Image src="/images/bunny1.png" width={90} height={90} />
            </div>
            <div className="about-bunny-portrait">
              <Image src="/images/bunny2.png" width={90} height={90} />
            </div>
            <div className="about-bunny-portrait">
              <Image src="/images/bunny3.png" width={90} height={90} />
            </div>
            <div className="about-bunny-portrait">
              <Image src="/images/bunny4.png" width={90} height={90} />
            </div>
            <div className="about-bunny-portrait">
              <Image src="/images/bunny5.png" width={90} height={90} />
            </div>
          </div>
        </div>

        <div className="about-text">
          <div className="about-pill-heading">Bunny price and Rarity</div>
          <ul className="about-list">
            <li>
              <strong>Rarity Tier:</strong> Common → Rare → Epic → Legendary.
              Higher tiers are harder to find but much more valuable.
            </li>
          </ul>
        </div>
      </section>

      <section className="about-section">
        <div className="page-kicker">Roadmap</div>
        <h2 className="page-title">The Future of Vacuum Bunnies</h2>
        <p className="page-lead">
          We are just getting started. Here are the features we are currently building 
          to take the game to the next level.
        </p>

        <div className="card-grid card-grid-2" style={{ marginTop: '3rem' }}>
          
          <article className="card">
            <h3 className="card-title">Bunny Battling</h3>
            <p className="card-body">
              Your collection isn't just for show. Soon, you will be able to 
              train your strongest bunnies to compete in the <strong>Arena</strong>. 
              Battle against wild bosses or challenge other players to see who 
              has the strongest team.
            </p>
          </article>

          <article className="card">
            <h3 className="card-title">Trading System</h3>
            <p className="card-body">
              Missing a Legendary bunny? We are implementing a secure trading 
              system so you can swap duplicates with friends or buy rare variants 
              from the global marketplace.
            </p>
          </article>

          <article className="card">
            <h3 className="card-title">Vacuum Upgrades</h3>
            <p className="card-body">
              Spend your coins on new vacuum parts. Increase range, suction power, 
              and battery life to capture high-level bunnies that are currently 
              too fast to catch.
            </p>
          </article>

          <article className="card">
            <h3 className="card-title">The Void Biome</h3>
            <p className="card-body">
              A dangerous new world is opening soon. Low gravity, dark physics, 
              and "Corrupted" bunnies await only the bravest players.
            </p>
          </article>

        </div>
      </section>

    </div>
  );
}