import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

      {/* HERO */}
      <section className="text-center">
        <p className="text-sm font-medium text-purple-600">
           Modern Food Platform
        </p>

        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          Discover & Share <span className="text-purple-600">Delicious Recipes</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          YumHub is your modern food platform for exploring recipes, learning cooking techniques, and connecting with food lovers worldwide.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/meals"
            className="rounded-xl bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-purple-700 transition w-full sm:w-auto"
          >
            Explore Recipes
          </Link>

          <Link
            href="/posts"
            className="rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition w-full sm:w-auto"
          >
            Community Posts
          </Link>
        </div>
      </section>

      {/* STATS */}
      <section className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div className="rounded-2xl bg-white p-6 shadow-sm border">
          <p className="text-3xl font-bold text-purple-600">100+</p>
          <p className="mt-2 text-sm text-gray-600">Recipes Available</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm border">
          <p className="text-3xl font-bold text-indigo-600">50+</p>
          <p className="mt-2 text-sm text-gray-600">Community Posts</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm border">
          <p className="text-3xl font-bold text-emerald-600">10k+</p>
          <p className="mt-2 text-sm text-gray-600">Food Lovers</p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mt-24">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          Everything you need in one place
        </h2>

        {/* تم تعديل الجريد ليدعم 4 عناصر بشكل متناسق في الشاشات الكبيرة sm:grid-cols-2 lg:grid-cols-4 */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-900">
              🍗 Smart Recipes
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Browse structured recipes with ingredients, instructions, and video tutorials.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-900">
              👨‍🍳 Community Driven
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Share experiences, tips, and cooking secrets with other food lovers.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-900">
              📰 Food News
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Stay updated with the latest food trends, nutritional insights, and industry news.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-900">
              ⚡ Fast Experience
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Built with Next.js for ultra-fast performance and smooth UX.
            </p>
          </div>

        </div>
      </section>

      {/* NEW: LATEST NEWS SECTION */}
      <section className="mt-24">
        <div className="flex items-center justify-between border-b pb-4">
          <h2 className="text-2xl font-bold text-gray-900">Latest Food News</h2>
          <Link href="/news" className="text-sm font-semibold text-purple-600 hover:text-purple-700 transition">
            View all news →
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* News Item 1 */}
          <div className="group relative flex flex-col justify-between rounded-2xl border p-6 hover:bg-gray-50/50 transition">
            <div>
              <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-md">Trends</span>
              <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition">
                The Rise of Plant-Based Chicken in Modern Gastronomy
              </h3>
              <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                How top chefs worldwide are reforming their menus to include sustainable and innovative protein alternatives without losing the authentic taste.
              </p>
            </div>
            <Link href="/news/1" className="mt-4 text-xs font-medium text-gray-400 group-hover:text-purple-600 transition">
              Read article &rarr;
            </Link>
          </div>

          {/* News Item 2 */}
          <div className="group relative flex flex-col justify-between rounded-2xl border p-6 hover:bg-gray-50/50 transition">
            <div>
              <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">Nutrition</span>
              <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition">
                New Study Reveals Best Cooking Methods for Nutrient Retention
              </h3>
              <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                Recent nutritional research breaks down how steaming vs air-frying affects protein density and vitamin levels in everyday poultry meals.
              </p>
            </div>
            <Link href="/news/2" className="mt-4 text-xs font-medium text-gray-400 group-hover:text-purple-600 transition">
              Read article &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="mt-24 rounded-3xl bg-gradient-to-r from-purple-600 to-indigo-600 p-10 text-center text-white">
        <h2 className="text-3xl font-bold">
          Start exploring delicious recipes today
        </h2>
        <p className="mt-3 text-white/80">
          Join thousands of food lovers already using YumHub.
        </p>

        <Link
          href="/meals"
          className="mt-6 inline-block rounded-xl bg-white px-6 py-3 text-sm font-semibold text-purple-700 hover:bg-gray-100 transition"
        >
          Get Started
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="mt-24 border-t pt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} YumHub. Built with Next.js & Tailwind CSS.
      </footer>

    </main>
  );
}