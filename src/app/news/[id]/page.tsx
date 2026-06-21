import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const NEWS_ARTICLES = [
  {
    id: "1",
    title:
      "5 Quick Tricks to Prevent Chicken Breast from Drying Out While Grilling",
    content:
      "Simple proven techniques used by chefs to keep chicken juicy, including marination timing, heat control, and resting methods.",
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=1200",
  },
  {
    id: "2",
    title: "Top 10 Healthy Foods to Boost Your Energy During the Day",
    content:
      "A detailed guide on nutrient-rich foods that help maintain energy levels throughout the day and improve focus.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200",
  },
  {
    id: "3",
    title: "Creative Ways to Present Food Like a Professional Chef",
    content:
      "Learn plating techniques used in restaurants to make dishes look visually appealing and professional.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200",
  },
];

export default async function NewsDetailsPage({ params }: Props) {
  const { id } = await params;

  const article = NEWS_ARTICLES.find((item) => item.id === id);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">
        {/* Image */}
        <div className="relative w-full h-64">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">{article.title}</h1>

          <p className="text-gray-600 leading-relaxed">{article.content}</p>
        </div>
      </div>
    </div>
  );
}
