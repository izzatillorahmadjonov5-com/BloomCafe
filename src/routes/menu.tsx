import { createFileRoute } from "@tanstack/react-router";
import { Cake, Pizza } from "lucide-react";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menyu - Bloom Cafe" },
      { name: "description", content: "Bloom Cafe menyusi - Desertlar va pitsalar. Eng sara taomlar." },
      { property: "og:title", content: "Menyu - Bloom Cafe" },
      { property: "og:description", content: "Bloom Cafe menyusi - Desertlar va pitsalar. Eng sara taomlar." },
    ],
  }),
  component: MenuPage,
});

interface MenuItem {
  name: string;
  price: string;
  description?: string;
}

interface PizzaItem {
  name: string;
  size25: string;
  size35: string;
}

const desserts: MenuItem[] = [
  { name: "Tvarojniy", price: "16,000 so'm" },
  { name: "Tri shokolada", price: "20,000 so'm" },
  { name: "Cheescake", price: "22,000 so'm" },
  { name: "Snickers", price: "24,000 so'm" },
  { name: "Shokoladniy", price: "18,000 so'm" },
  { name: "Medoviy", price: "20,000 so'm" },
  { name: "Smarodina", price: "22,000 so'm" },
  { name: "Bloom", price: "24,000 so'm" },
  { name: "Damskiy Palchik", price: "20,000 so'm" },
  { name: "Oreo", price: "24,000 so'm" },
  { name: "Choco Bloom", price: "24,000 so'm" },
  { name: "Trayfl", price: "22,000 so'm" },
];

const pizzas: PizzaItem[] = [
  { name: "Peperoniy", size25: "55,000 so'm", size35: "77,000 so'm" },
  { name: "Gribnaya", size25: "55,000 so'm", size35: "77,000 so'm" },
];

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <div className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-sm">
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
          {index + 1}
        </span>
        <span className="font-medium text-card-foreground">{item.name}</span>
      </div>
      <span className="shrink-0 font-semibold text-primary">{item.price}</span>
    </div>
  );
}

function PizzaCard({ pizza }: { pizza: PizzaItem }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-sm">
      <h4 className="text-lg font-semibold text-card-foreground">{pizza.name}</h4>
      <div className="mt-3 space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">25 cm</span>
          <span className="font-semibold text-primary">{pizza.size25}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">35 cm</span>
          <span className="font-semibold text-primary">{pizza.size35}</span>
        </div>
      </div>
    </div>
  );
}

function MenuPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Menyu</h1>
        <p className="mt-3 text-muted-foreground">
          Eng sara desertlar va mazali pitsalar
        </p>
      </div>

      {/* Desserts */}
      <section className="mt-14">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <Cake className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Desertlar</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {desserts.map((item, i) => (
            <MenuCard key={item.name} item={item} index={i} />
          ))}
        </div>
      </section>

      {/* Pizza */}
      <section className="mt-16">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <Pizza className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Pitsalar</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {pizzas.map((pizza) => (
            <PizzaCard key={pizza.name} pizza={pizza} />
          ))}
        </div>
      </section>
    </div>
  );
}
