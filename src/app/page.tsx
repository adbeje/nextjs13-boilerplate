"use client";
import Link from "next/link";
import { Button } from "@/components/atoms";
import { useAuthContext } from "@/hooks";
import { useEffect, useState } from "react";

export default function Home() {
  const {isLogged} = useAuthContext();
  const [authContent, setAuthContent] = useState("");
  useEffect(() => {
    isLogged() ? setAuthContent("logout") : setAuthContent("login");
  }, [isLogged]);
  
  return (
    <main className="flex flex-row justify-between">
      <div className="flex justify-center gap-3">
        <Link href={"/redux/state"}>
          <Button primary label="Ver estados redux"/>
        </Link>
      
        <Link href={"/redux/query"}>
          <Button primary={false} label="Ver querys redux"/>
        </Link>
      </div>
      <div>
        <Link href={`/${authContent}`} className="text-blue-300 hover:underline">
          {authContent}
        </Link>
      </div>
    </main>
  );
}
