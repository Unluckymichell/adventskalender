import Coupon from "@/components/Coupon";
import Letter from "@/components/Letter";
import Mystery from "@/components/Mystery";
import { daysData } from "@/data/days";

export default async function DayPage(props: { params: Promise<{ day: string }> }) {

  const params = await props.params;

  const day = parseInt(params.day, 10);
  const data = daysData[day];

  console.log(params);

  return (
    <div className="min-h-screen p-6 text-center">
      <h1 className="text-3xl font-bold mb-2 text-red-700">
        Türchen {day}
      </h1>
      <h2 className="text-md text-red-400 font-semibold mb-8 underline">{(() => {
        switch (data.type) {
          case "letter": return "Ein Brief für dich!";
          case "coupon": return "Gutschein";
          case "digital": return "Digital";
          case "mystery": return "Mystery Pack";
          case "final": return "Finale";
        }
      })()}</h2>

      <div className="max-w-lg mx-auto">
        <div className=" text-red-900 whitespace-pre-line">
          {(() => {
            switch (data.type) {
              case "letter": return <Letter content={data.content} />
              case "mystery": return <Mystery message={data.message} />
              case "coupon": return <Coupon content={data.content} />
            }
          })()}
        </div>
      </div>
    </div>
  );
}
