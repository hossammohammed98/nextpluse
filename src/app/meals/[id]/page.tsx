import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function MealDetailsPage({ params }: PageProps) {
  const resolvedParams = await params;
  const mealId = resolvedParams.id;

  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  );
  const result = await response.json();

  if (!result.meals || result.meals.length === 0) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h1 className="text-xl font-semibold text-gray-900">Recipe not found</h1>
        <Link href="/meals" className="mt-4 inline-block text-purple-600 hover:underline">
          ← Back to meals
        </Link>
      </main>
    );
  }

  const meal = result.meals[0];

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${measure ? measure.trim() : ""} ${ingredient.trim()}`);
    }
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        href="/meals"
        className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-700 mb-6"
      >
        ← Back to Chicken Meals
      </Link>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
          <Image
            src={meal.strMealThumb}
            alt={meal.strMeal}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="flex flex-col justify-center">
          <span className="inline-flex self-start items-center rounded-md bg-purple-50 px-2.5 py-0.5 text-xs font-medium text-purple-700 mb-3">
            {meal.strCategory}
          </span>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {meal.strMeal}
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Origin:{" "}
            <span className="font-medium text-gray-700">{meal.strArea}</span>
          </p>

          {meal.strYoutube && (
            <a
              href={meal.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex justify-center items-center rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 transition"
            >
              Watch Video Tutorial
            </a>
          )}
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="md:col-span-1">
          <h2 className="text-xl font-semibold text-gray-900 border-b pb-2">
            Ingredients
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm text-gray-600">
            {ingredients.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 text-purple-500">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold text-gray-900 border-b pb-2">
            Instructions
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 whitespace-pre-line">
            {meal.strInstructions}
          </p>
        </div>
      </div>
    </main>
  );
}