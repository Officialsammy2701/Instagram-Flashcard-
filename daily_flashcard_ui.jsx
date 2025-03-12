import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function DailyFlashcard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://your-api-url.com/api/daily-flashcard")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-96 bg-white shadow-xl rounded-2xl p-6 text-center">
        <CardContent>
          <p className="text-lg font-semibold">{data.day}, {data.date}</p>
          <h2 className="text-xl font-bold mt-4">{data.bible_verse.verse}</h2>
          <p className="italic text-gray-600">{data.bible_verse.text}</p>
          <hr className="my-4" />
          <p className="text-lg font-medium">❝ {data.quote} ❞</p>
          <hr className="my-4" />
          <p className="text-sm font-light text-green-600">{data.affirmation}</p>
        </CardContent>
      </Card>
    </div>
  );
}
