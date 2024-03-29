"use client";
import {
  type Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { GithubIcon } from "./icons";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/button";

export function AuthButton({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    });
  };

  const handelSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <div className="w-full flex justify-center">
      <header>
        {session === null && (
          <button
            onClick={handleSignIn}
            type="button"
            className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#24292F]/30 me-2 mb-2"
          >
            <GithubIcon />
            Iniciar sesión con Github
          </button>
        )}

        {session !== null && (
          <Button className="text-white" onClick={handelSignOut}>
            Cerrar sesión
          </Button>
        )}
      </header>
    </div>
  );
}
