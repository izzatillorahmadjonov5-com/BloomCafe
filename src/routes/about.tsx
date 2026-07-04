import { createFileRoute } from "@tanstack/react-router";
import { Heart, Award, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Biz haqimizda - Bloom Cafe" },
      { name: "description", content: "Bloom Cafe haqida - eng sara desertlar va pitsalar markazi." },
      { property: "og:title", content: "Biz haqimizda - Bloom Cafe" },
      { property: "og:description", content: "Bloom Cafe haqida - eng sara desertlar va pitsalar markazi." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Biz haqimizda</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Bloom Cafe - bu nafaqat kafe, balki har bir mehmon uchun maxsus yaratilgan joy.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-6 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Heart className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mt-4 font-semibold text-card-foreground">Sevgi bilan</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Har bir taomimizda mehribonlik va g'amxo'rlik bilan tayyorlaymiz.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Award className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mt-4 font-semibold text-card-foreground">Sifatli mahsulotlar</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Faqat eng yaxshi va tabiiy ingredientlardan foydalanamiz.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Users className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mt-4 font-semibold text-card-foreground">Mehmonlarga hurmat</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Har bir mehmonimiz biz uchun maxsus va qadrlaymiz.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <img
          src="/images/cafe-hero.jpg"
          alt="Bloom Cafe interyeri"
          className="h-80 w-full rounded-2xl object-cover"
        />
      </div>
    </div>
  );
}
