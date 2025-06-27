// Client Component (Child Component)
'use client';
// "use i18n";

import { useState } from 'react';
// import { LingoDotDevEngine } from "lingo.dev/sdk"; 

// const lingoDotDev = new LingoDotDevEngine({
//   apiKey: process.env.LINGODOTDEV_API_KEY
// })

// type Data = {
//   message: string;
//   time: string;
// };


type ClientComponentProps = {
  data: string; // Replace 'any' with a more specific type if known
};

export function ClientComponent({ data }: ClientComponentProps) {
  const [count, setCount] = useState(0); 
  // const api_result = await lingoDotDev.localizeText(JSON.stringify(data["message"]), {
  //   sourceLocale: "en", 
  //   targetLocale: "es",
  // });

  return (
    <div>
      <p>Data from server: {data}</p>
      <p>Client-side counter: {count}</p> 
      <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )

}