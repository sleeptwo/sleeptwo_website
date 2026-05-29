import { redirect } from "next/navigation";

// The middleware handles locale detection and redirects — this is a fallback.
export default function RootPage() {
  redirect("/en");
}
