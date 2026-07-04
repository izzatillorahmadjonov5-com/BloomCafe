import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, Clock, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bloom Cafe - Bosh sahifa" },
      { name: "description", content: "Bloom Cafe - Mazali desertlar va pitsalar. Eng sara taomlar sizni kutmoqda." },
      { property: "og:title", content: "Bloom Cafe - Bosh sahifa" },
      { property: "og:description", content: "Bloom Cafe - Mazali desertlar va pitsalar. Eng sara taomlar sizni kutmoqda." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        <img
          src="/images/cafe-hero.jpg"
          alt="Bloom Cafe interyeri"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Bloom Cafe
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl">
            Mazali desertlar va xushbo'y pitsalar. Har bir taomda sevgi bilan tayyorlangan.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Menyuni ko'rish
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground">
          Bizning maxsus takliflar
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          Eng mashhur va sevimli taomlarimiz bilan tanishing
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Desserts */}
          <Link to="/menu" className="group relative overflow-hidden rounded-2xl">
            <img
              src="/images/desserts.jpg"
              alt="Desertlar"
              className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-2xl font-bold text-white">Desertlar</h3>
              <p className="mt-2 text-sm text-white/80">
                12+ turli shirinliklar
              </p>
            </div>
          </Link>

          {/* Pizza */}
          <Link to="/menu" className="group relative overflow-hidden rounded-2xl">
            <img
              src="/images/pizza.jpg"
              alt="Pitsalar"
              className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-2xl font-bold text-white">Pitsalar</h3>
              <p className="mt-2 text-sm text-white/80">
                Mazali va xushbo'y pitsalar
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Info Bar */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-3 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <Clock className="mt-1 h-6 w-6 shrink-0 text-primary" />
            <div>
              <h4 className="font-semibold text-foreground">Ish vaqti</h4>
              <p className="mt-1 text-sm text-muted-foreground">Dushanba - Yakshanba: 09:00 - 23:00</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="mt-1 h-6 w-6 shrink-0 text-primary" />
            <div>
              <h4 className="font-semibold text-foreground">Manzil</h4>
              <p className="mt-1 text-sm text-muted-foreground">Toshkent shahri, Bloom ko'chasi 1</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="mt-1 h-6 w-6 shrink-0 text-primary" />
            <div>
              <h4 className="font-semibold text-foreground">Telefon</h4>
              <p className="mt-1 text-sm text-muted-foreground">+998 90 123 45 67</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
