import { redirect } from "next/navigation";

export default function ControlLoginRedirect() {
  redirect("/admin");
}
