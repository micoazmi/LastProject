import { ObjectId } from "mongodb";
import type { Metadata } from "next";

export let metadata: Metadata = {
  title: "Detail",
};
interface Detail {
  id: ObjectId;
  bahan: string;
  imageUrl: string;
  name: string;
  // Add other properties as needed
}
interface Data {
  data: [];
}
interface CardDetailProps {
  data: number;
  data1: Data | null; // Assume Detail is your type for productData
}

const CardDetail: React.FC<CardDetailProps> = ({ data, data1 }) => {
  console.log(data1);
  return (
    <>
      {data1 ? (
        data1.data.map((el: Detail) => {
          return (
            <>
              <div className="max-w-sm rounded overflow-hidden shadow-lg ml-5">
                <h1>Card id = {data}</h1>
                <img className="w-full" src={el.imageUrl} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{el.name}</div>
                  <p className="text-gray-700 text-base">{el.bahan}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  {/* Your other details here */}
                </div>
              </div>
            </>
          );
        })
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default CardDetail;
