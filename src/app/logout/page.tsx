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
  });
  return null;
}

export default Logout;