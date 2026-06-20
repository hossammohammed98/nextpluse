import Link from "next/link";
import Image from "next/image";

const NEWS_ARTICLES = [
  {
    id: "1",
    title: "5 Quick Tricks to Prevent Chicken Breast from Drying Out While Grilling",
    excerpt:
      "Simple and proven methods used by top chefs to keep chicken juicy and tender in the kitchen.",
    category: "Tips",
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800",
  },
  {
    id: "2",
    title: "Top 10 Healthy Foods to Boost Your Energy During the Day",
    excerpt:
      "A list of nutritious foods that help improve performance and increase daily energy levels.",
    category: "Health",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
  },
  {
    id: "3",
    title: "Creative Ways to Present Food Like a Professional Chef",
    excerpt:
      "Learn how to make your dishes look like restaurant-quality meals using simple techniques.",
    category: "Cooking",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800",
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Latest News
        </h1>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {NEWS_ARTICLES.map((article) => (
            <Link
              key={article.id}
              href={`/news/${article.id}`}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition group"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-4 space-y-2">
                <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
                  {article.category}
                </span>

                <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
                  {article.title}
                </h2>

                <p className="text-sm text-gray-500 line-clamp-3">
                  {article.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}