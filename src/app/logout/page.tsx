"use client";
import { useAuthContext } from "@/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Logout() {
  const {logout} = useAuthContext();
  const router = useRouter();
  useEffect(() => {
    logout();
    router.push("/");
    // Forzando el refresh para que las cookies se actualicen en el servidor
    //router.refresh();
  });
  return null;
}

export default Logout;