import { useEffect, useState, Suspense } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";
import { Helmet } from "react-helmet";
import { handleError, USER_ERRORS } from "@/lib/errorHandler";
import ParticlesBackground from "@/components/3D/ParticlesBackground";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  cover_image: string | null;
  author: string;
  created_at: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      handleError(error, USER_ERRORS.LOAD_FAILED);
    } finally {
      setLoading(false);
    }
  };

  const getExcerpt = (content: string) => {
    const plainText = content.replace(/<[^>]*>/g, "");
    return plainText.length > 150 ? plainText.substring(0, 150) + "..." : plainText;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <Helmet>
        <title>Blog - Ctrl Alt Crew | AI & Tech Insights</title>
        <meta
          name="description"
          content="Read the latest articles about AI, machine learning, software development, and tech innovations from Ctrl Alt Crew."
        />
      </Helmet>

      <div className="min-h-screen bg-black">
        <Navigation />

        {/* Hero Section with 3D Background */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <Suspense fallback={null}>
            <ParticlesBackground />
          </Suspense>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-fade-in">
              <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
                Tech Chronicles
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Exploring AI, innovation, and the future of technology
            </p>
          </div>
        </section>

        <main className="container mx-auto px-4 sm:px-6 lg:px-12 py-20">

          {loading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <Loader2 className="h-8 w-8 animate-spin text-white" />
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-20 px-4">
              <p className="text-lg sm:text-xl text-gray-300">
                No posts published yet. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
              {posts.map((post, index) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <article className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-white/50 transition-all duration-500 h-full flex flex-col animate-slide-up hover:shadow-2xl hover:shadow-white/10 relative">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-600 via-white to-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                    
                    {post.cover_image && (
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.cover_image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
                      </div>
                    )}

                    <div className="p-4 sm:p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 mb-3">
                        <span>{post.author}</span>
                        <span>•</span>
                        <time>{formatDate(post.created_at)}</time>
                      </div>

                      <h2 className="text-xl sm:text-2xl font-bold mb-3 bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                        {post.title}
                      </h2>

                      <p className="text-sm sm:text-base text-gray-300 flex-1 mb-4">
                        {getExcerpt(post.content)}
                      </p>

                      <span className="text-white font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all text-sm sm:text-base">
                        Read More
                        <span className="text-xl">→</span>
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
