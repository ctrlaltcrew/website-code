import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet";
import { handleError, USER_ERRORS } from "@/lib/errorHandler";

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

      <div className="min-h-screen bg-background font-sans flex flex-col">
        <Navigation />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-background border-b-2 border-border">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10 py-16">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 uppercase tracking-tighter text-foreground">
              Tech <span className="text-primary">Chronicles.</span>
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light tracking-wide">
              Exploring AI, innovation, and the absolute bleeding edge of the future.
            </p>
          </div>
        </section>

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 flex-grow">
          {loading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-32 px-4 border-2 border-dashed border-border bg-secondary">
              <p className="text-xl md:text-2xl text-muted-foreground font-black uppercase tracking-widest">
                No articles yet. The compiler is still running...
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col"
                >
                  <article className="bg-background border-2 border-border hover:border-primary transition-colors duration-300 h-full flex flex-col">
                    {post.cover_image ? (
                      <div className="relative h-64 overflow-hidden border-b-2 border-border">
                        <img
                          src={post.cover_image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="h-48 border-b-2 border-border bg-secondary flex items-center justify-center">
                         <span className="text-4xl font-black text-muted-foreground opacity-20">CTRL ALT</span>
                      </div>
                    )}

                    <div className="p-8 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                        <span>{post.author}</span>
                        <span className="text-primary">•</span>
                        <time>{formatDate(post.created_at)}</time>
                      </div>

                      <h2 className="text-2xl font-black mb-4 uppercase tracking-tight text-foreground group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-muted-foreground font-light flex-1 mb-8 leading-relaxed">
                        {getExcerpt(post.content)}
                      </p>

                      <div className="flex items-center text-foreground font-black uppercase tracking-widest text-sm group-hover:text-primary transition-colors">
                        Read Article <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
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
