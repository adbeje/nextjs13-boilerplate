"use client";
import Link from "next/link";
import { Button } from "@/components/atoms";
import { useAuthContext } from "@/hooks";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const {isLogged} = useAuthContext();
  const [authContent, setAuthContent] = useState("");
  const router = useRouter();
  useEffect(() => {
    isLogged() ? setAuthContent("logout") : setAuthContent("login");
  }, [isLogged]);
  
  return (
    <main className="flex flex-row justify-between">
      <div className="flex justify-center gap-3">
        <Button 
          primary 
          label="Ver estados redux"
          onClick={()=> {router.push("/redux/state");}}
        />
      
        
        <Button 
          primary={false} 
          label="Ver querys redux"
          onClick={()=> {router.push("/redux/query");}}
        />

      </div>
      <div>
        <Link href={`/${authContent}`} className="text-blue-300 hover:underline">
          {authContent}
        </Link>
      </div>
    </main>
  );
}
