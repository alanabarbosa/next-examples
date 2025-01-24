import ServerFetch from "@/components/server-fetch";

  export default async function Products() {  
  
    return (
      <main>
        <h1>Products</h1>
        <ServerFetch />
      </main>
    );
  }