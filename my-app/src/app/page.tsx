import Card from "@/components/card";
import NavbarHome from "@/components/navbarHome";
import Link from "next/link";

interface Product {
  _id: string;
  bahan: string;
  name: string;
  imageUrl: string;
}
interface ResponseData {
  data: Product[];
  // other properties if any
}
async function getData() {
  const response = await fetch(
    "https://last-project-blue.vercel.app/api/clothes",
    {
      method: "GET", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const result = (await response.json()) as ResponseData;
  return result;
}

export default async function Home() {
  const { data } = await getData();

  return (
    <>
      <NavbarHome></NavbarHome>
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 text-center h-96 flex flex-col items-center justify-center">
        <h1 className="text-4xl mb-4">Welcome to Our Homepage</h1>
        <p className="text-lg mb-8">
          Explore the latest trends in fashion and find the perfect outfit for
          any occasion.
        </p>
        <Link
          href={"/products"}
          className="inline-block px-6 py-3 text-lg bg-white text-blue-500 rounded hover:bg-blue-700 hover:text-white transition"
        >
          Explore Products
        </Link>
      </div>
      <div className="flex flex-wrap gap-8 justify-center  bg-gradient-to-r from-blue-500 to-purple-500 p-8">
        {/* {data.map((el: Product) => (
          <div key={el._id} className="bg-white rounded-md p-4 shadow-md">
            <Card data={el}></Card>
          </div>
        ))} */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg ml-5">
          <img className="w-full" alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">PUma</div>
            <p className="text-gray-700 text-base">Katun</p>
          </div>
          <div className="px-6 py-4 flex gap-4">
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Detail
              </button>
            </div>
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
