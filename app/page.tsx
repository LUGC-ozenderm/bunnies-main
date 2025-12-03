import Link from "next/link";

export default function HomePage() {
  return (
    <>
<section
  className="home-hero"
  style={{
    backgroundImage: "url('/images/world1.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

        <div className="home-hero-overlay" />
        <div className="home-hero-inner">
          <div className="hero-pill">
            <span>Official Game Manual</span>
          </div>

          <h1 className="hero-main-title">Vacuum Bunnies</h1>

          <p className="hero-subtitle">
            Explore tiered worlds, vacuum magical bunnies,
            and sell them for coin or keep them to show them off.
          </p>

          <div className="home-hero-buttons">
            <Link href="/worlds" className="btn-primary">
              <span>Explore the Worlds</span>
            </Link>

            <Link href="/bunnies" className="btn-primary">
              <span>Meet the Bunny Team</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
