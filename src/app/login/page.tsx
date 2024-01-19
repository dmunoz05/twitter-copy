import React from "react";
import { AuthButtonServer } from "../components/auth-button-server";

export default function page() {
  return (
    <section className="grid place-content-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold p-4">Inicia session en Twitter</h1>
      <div className="w-full grid justify-center">
        <AuthButtonServer />
      </div>
    </section>
  );
}
