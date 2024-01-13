import Card from "./components/Card/Card";

export default function Home() {
  return (
    <div>
      <section className="section-main h-auto min-h-screen">
        <h1 className="title text-6xl">Rick & Morty</h1>
        <Card />
      </section>
    </div>
  );
}
