
import type { Metadata } from "next";
import Access from '@/components/access'

export const metadata: Metadata = {
  title: "Home - Studies - Next.Js",
  description: "Generated by create next app",
};

export default async function Home() {
  
  return (
    <main>
      <h1>Home</h1>
      <Access />
    </main>
  );
}
