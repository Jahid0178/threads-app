import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <h1>Hello Next.js</h1>
      <UserButton afterSignOutUrl="/" />
    </main>
  );
}
