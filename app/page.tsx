"use client";
import { useState } from "react";
import userStore from "../src/stores/user.store";
import { redirect } from "next/navigation";

export default async function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { addUser } = userStore();

  function handleSubmit() {
    addUser({ email, name });
    redirect("/notes");
  }
  return (
    <div>
      <h1>Hello World</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullname">
          FullName:
          <input
            type="text"
            placeholder="Write your name and surname"
            id="fullname"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            placeholder="Write your email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
