"use client";

import React, { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/hooks";

function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();
  const { login } = useAuthContext();

  const handleForm = async (event: FormEvent) => {
    event.preventDefault();

    const response = await fetch(
      "https://dummyjson.com/auth/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      }
    )
      .then(res => res.json())
      .catch(() => console.log("Error"));

    //console.log({response});

    login({token: response.token, refreshToken: response.token});

    router.push("/");
  };
  return (
    <div >
      <div >
        <h1 >Sign up</h1>
        <form onSubmit={handleForm} className="form">
          <label htmlFor="email">
            <p>Username dummy: kminchelle </p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              name="email"
              id="email"
            />
          </label>
          <label htmlFor="password">
            <p>Password: 0lelplR</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </label>
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default Page;