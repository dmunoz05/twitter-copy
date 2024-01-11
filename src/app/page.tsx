import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { AuthButtonServer } from "./components/auth-button-server";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const { data: posts } = await supabase.from("posts").select("*");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AuthButtonServer />
      <h1 className="flex min-h-screen flex-col items-center justify-between p-24">
        Hola Twitter 👉
        <pre>{JSON.stringify(posts, null, 2)}</pre>
      </h1>
    </main>
  );
}
