import React from "react";

interface Post {
  id: number;
  title: string;
  body: string;
  tags?: string[];
}

interface DummyJsonResponse {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}

async function getPosts(): Promise<Post[]> {
  const response = await fetch("https://dummyjson.com/posts", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  const data: DummyJsonResponse = await response.json();
  return data.posts;
}

function readingTime(body: string): string {
  const words = body.trim().split(/\s+/).length;
  const mins = Math.max(1, Math.round(words / 200));
  return `${mins} min read`;
}

const ACCENT_COLORS = [
  "before:bg-indigo-400",
  "before:bg-violet-400",
  "before:bg-sky-400",
  "before:bg-emerald-400",
  "before:bg-rose-400",
] as const;

function accentFor(id: number) {
  return ACCENT_COLORS[id % ACCENT_COLORS.length];
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50/30 py-16 px-4 sm:px-6 lg:px-8 font-sans antialiased">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-600 uppercase tracking-wider mix-blend-multiply">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            Live Feed
          </div>

          <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl bg-gradient-to-r from-slate-950 to-slate-700 bg-clip-text text-transparent">
            Our Latest Stories
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-slate-500 leading-relaxed">
            Explore insights, thoughts, and trends fresh from our API stream.
          </p>

          <p className="text-xs text-slate-400 font-medium tracking-wide">
            {posts.length} articles
          </p>
        </header>

        {posts.length === 0 && (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-white/60 py-24 text-center">
            <span className="text-4xl">📭</span>
            <p className="mt-4 text-sm font-semibold text-slate-600">
              No stories yet
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Check back soon — new posts are on the way.
            </p>
          </div>
        )}

        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={post.id}
              style={{ animationDelay: `${index * 35}ms` }}
              className={[
                "opacity-0 animate-fade-in",
                "relative before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:rounded-t-2xl",
                accentFor(post.id),
                "group bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-100 p-6 flex flex-col justify-between transition-all duration-300 ease-out hover:bg-white hover:border-indigo-100 hover:shadow-[0_20px_50px_rgba(99,102,241,0.08)] hover:-translate-y-1",
                "focus-within:ring-2 focus-within:ring-indigo-400 focus-within:ring-offset-2",
              ].join(" ")}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="bg-slate-100 text-slate-700 group-hover:bg-indigo-50 group-hover:text-indigo-700 transition-colors duration-300 text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md">
                    Post #{post.id}
                  </span>

                  <span className="text-[11px] text-slate-400 font-medium tabular-nums">
                    {readingTime(post.body)}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-slate-800 tracking-tight mb-3 capitalize line-clamp-2 group-hover:text-indigo-950 transition-colors duration-300">
                  {post.title}
                </h2>

                <p className="text-slate-500 text-sm leading-relaxed line-clamp-4 mb-6">
                  {post.body}
                </p>

                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold uppercase tracking-wide text-slate-500 bg-slate-100 rounded px-1.5 py-0.5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-100/60 mt-auto flex items-center justify-between">
                <button
                  className="font-semibold text-sm inline-flex items-center transition-colors gap-1.5"
                  style={{ color: "#8200db" }}
                >
                  Read Article
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300 ease-out"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>

                <button
                  aria-label="Save article"
                  className="text-slate-300 hover:text-indigo-400 transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </main>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease both;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in { animation: none; opacity: 1; }
        }
      `}</style>
    </div>
  );
}