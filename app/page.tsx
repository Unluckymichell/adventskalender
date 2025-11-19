"use client";

import Link from "next/link";

export default function Home() {
  const now = new Date();
  const today = now.getDate(); 

  const days = Array.from({ length: 24 }, (_, i) => i + 1);

  return (
    <div className="relative min-h-screen p-6 text-center">

      <h1 className="text-4xl font-bold text-red-700 mb-8 drop-shadow-sm">
        Adventskalender 2025
      </h1>

      <div className="grid grid-cols-4 gap-4 max-w-xl mx-auto">
        {days.map((day) => {
          const isOpen = today >= day;

          return (
            <Link
              key={day}
              href={isOpen ? `/day/${day}` : "#"}
              className={`
                aspect-square rounded-xl flex items-center justify-center
                text-2xl font-semibold border shadow-md relative select-none
                transition duration-500 transform
                hover:rotate-y-12 hover:scale-105
                ${isOpen ? "bg-red-200 text-red-900" : "bg-red-600 text-white"}
              `}
              // className={`
              //   aspect-square rounded-xl flex items-center justify-center
              //   text-2xl font-semibold transition-transform duration-300
              //   border shadow-md relative select-none
              //   ${isOpen 
              //     ? "bg-red-200 text-red-900 border-red-300 hover:scale-105"
              //     : "bg-red-600 text-white border-red-700 hover:scale-105 hover:bg-red-500"
              //   }
              // `}
            >
              <span>{day}</span>

              {!isOpen && (
                <span className="absolute inset-0 bg-red-600 bg-opacity-40 backdrop-blur-sm rounded-xl"></span>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
