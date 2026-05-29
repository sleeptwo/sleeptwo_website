import { redirect } from "next/navigation";

// Middleware handles locale detection → redirects to /en/blog.
// This is a server-side fallback in case middleware is bypassed.
export default function BlogPage() {
  redirect("/en/blog");
}
