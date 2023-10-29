/*
Basado y simplificado desde 
- https://youtu.be/PEMfsqZ2-As?si=nyzsgZ35PzEVSWXD
- https://github.com/Godsont/auth-with-credentials

Otro tutorial
- https://youtu.be/w2h54xz6Ndw?si=VNp_hnIZFv-QN97I
- https://github.com/gitdagray/next-auth-intro

*/

import LoginForm from "@/components/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");

  return (
    <main>
      <LoginForm />
    </main>
  );
}
