import Image from "next/image";
import Link from "next/link";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export default async function MealsPage() {
  let meals: Meal[] = [];

  try {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast",
      { next: { revalidate: 3600 } }
    );

    if (response.ok) {
      const result = await response.json();
      meals = result.meals ?? [];
    }
  } catch (error) {
    console.error("Failed to fetch meals:", error);
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">
          Chicken Breast Meals
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          {meals.length} recipes found
        </p>
      </div>

      {meals.length === 0 ? (
        <p className="text-gray-500 text-center py-10">No meals found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {meals.map((meal) => (
            <Link
              key={meal.idMeal}
              href={`/meals/${meal.idMeal}`}
              className="group overflow-hidden rounded-xl border border-gray-100 bg-white transition hover:border-gray-200 hover:shadow-sm"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                <Image
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              <div className="p-4">
                <h2 className="text-sm font-medium text-gray-900 leading-snug line-clamp-2">
                  {meal.strMeal}
                </h2>

                <div className="mt-3 flex items-center justify-between">
                  <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-0.5 text-xs font-medium text-purple-700">
                    Chicken
                  </span>

                  <span className="text-xs text-gray-400 group-hover:text-purple-600 transition">
                    View recipe →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}