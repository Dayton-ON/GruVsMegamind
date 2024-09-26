import Link from "next/link";
import { db } from "~/server/db"

/*const mockUrls = [
  "https://utfs.io/f/9a13ba76-f28f-489d-ac34-73ad87bcb692-5cfjin.jpg",
  "https://utfs.io/f/5e6dd6dc-d49e-4a33-b929-0ec1a8f47e17-ifz351.webp",
  "https://utfs.io/f/ea948937-224f-4e04-9ec5-e04d2de54c4c-ilbysz.webp",
  "https://utfs.io/f/61470a98-cc6a-4ca6-b287-e6235d99aabf-if1agd.webp",
  "https://utfs.io/f/4b11d7e4-71d7-4443-acc4-6964743273b5-inbbhk.webp",
  "https://utfs.io/f/7dda33c1-745d-4201-a229-501e2cb1bf21-in70d9.webp"
];

const mockImages = mockUrls.map((url, index) =>({
  id: index + 1,
  url,
}))
*/
export default async function HomePage() {
  const images = await db.query.images.findMany()
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">

        {images.map((image) =>(
          <div key={image.id} className="w-48">
            <img src={image.url} />
            <div>{image.name}</div>
      </div>
      ))}
      </div>
    </main>
  );
}
