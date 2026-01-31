import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Plus, LogOut, Edit, Trash2, MessageSquare } from "lucide-react";
import KeyboardLogo from "@/components/KeyboardLogo";
import BlogPostForm from "@/components/BlogPostForm";
import { handleError, USER_ERRORS } from "@/lib/errorHandler";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  author: string;
  created_at: string;
  published: boolean;
}

const AdminDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState<string | null>(null);
  const [deletePostId, setDeletePostId] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    checkAdminAccess();
  }, []);

  const checkAdminAccess = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/admin");
        return;
      }

      // Check if user has admin role
      const { data: roleData } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", session.user.id)
        .eq("role", "admin")
        .single();

      if (!roleData) {
        toast({
          title: "Access Denied",
          description: "You don't have admin permissions.",
          variant: "destructive",
        });
        await supabase.auth.signOut();
        navigate("/admin");
        return;
      }

      setIsAdmin(true);
      fetchPosts();
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error("Dev Error - Admin access check:", error);
      }
      navigate("/admin");
    } finally {
      setLoading(false);
    }
  };

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("posts")
        .select("id, title, slug, author, created_at, published")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      handleError(error, USER_ERRORS.LOAD_FAILED);
    }
  };

  const handleDelete = async () => {
    if (!deletePostId) return;

    try {
      const { error } = await supabase
        .from("posts")
        .delete()
        .eq("id", deletePostId);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Post deleted successfully.",
      });

      fetchPosts();
    } catch (error) {
      handleError(error, USER_ERRORS.DELETE_FAILED);
    } finally {
      setDeletePostId(null);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/admin");
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  if (showForm) {
    return (
      <BlogPostForm
        postId={editingPost}
        onClose={() => {
          setShowForm(false);
          setEditingPost(null);
          fetchPosts();
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="container mx-auto px-3 md:px-4 py-3 md:py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 md:gap-4">
              <KeyboardLogo size="sm" />
              <h1 className="text-lg md:text-2xl font-bold font-mono">Admin Dashboard</h1>
            </div>
            <div className="flex gap-2 md:gap-3 w-full sm:w-auto">
              <Button variant="outline" asChild size="sm" className="flex-1 sm:flex-none">
                <Link to="/admin/service-requests">
                  <MessageSquare className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                  <span className="text-xs md:text-sm">Requests</span>
                </Link>
              </Button>
              <Button variant="outline" onClick={handleSignOut} size="sm" className="flex-1 sm:flex-none">
                <LogOut className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                <span className="text-xs md:text-sm">Sign Out</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-3 md:px-4 py-4 md:py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 md:gap-0 mb-4 md:mb-8">
          <h2 className="text-xl md:text-3xl font-bold font-mono">Manage Posts</h2>
          <Button onClick={() => setShowForm(true)} size="sm" md:size="default">
            <Plus className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
            <span className="text-xs md:text-sm">New Post</span>
          </Button>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12 md:py-20 bg-card rounded-lg border border-border">
            <p className="text-base md:text-xl text-muted-foreground mb-4">
              No posts yet. Create your first one!
            </p>
            <Button onClick={() => setShowForm(true)} size="sm" md:size="default">
              <Plus className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
              <span className="text-xs md:text-sm">Create Post</span>
            </Button>
          </div>
        ) : (
          <div className="grid gap-3 md:gap-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-card p-3 md:p-6 rounded-lg border border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-3 hover:border-primary transition-colors"
              >
                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                    <h3 className="text-base md:text-xl font-bold font-mono break-words">{post.title}</h3>
                    <span
                      className={`text-xs px-2 py-1 rounded w-fit ${
                        post.published
                          ? "bg-primary/20 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {post.published ? "Published" : "Draft"}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground break-all">
                    By {post.author} • {formatDate(post.created_at)} • /{post.slug}
                  </p>
                </div>

                <div className="flex gap-2 w-full md:w-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setEditingPost(post.id);
                      setShowForm(true);
                    }}
                    className="flex-1 md:flex-none"
                  >
                    <Edit className="h-3 w-3 md:h-4 md:w-4 md:mr-0" />
                    <span className="md:hidden ml-1">Edit</span>
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => setDeletePostId(post.id)}
                    className="flex-1 md:flex-none"
                  >
                    <Trash2 className="h-3 w-3 md:h-4 md:w-4 md:mr-0" />
                    <span className="md:hidden ml-1">Delete</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <AlertDialog open={!!deletePostId} onOpenChange={() => setDeletePostId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the blog post.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AdminDashboard;
