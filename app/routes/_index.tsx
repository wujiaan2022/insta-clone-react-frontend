import { redirect } from "react-router";

export async function loader() {
  return redirect("/profile/posts/grid");
}