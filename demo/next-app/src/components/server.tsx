"use server";
"use i18n";

import { LingoDotDevEngine } from 'lingo.dev/sdk';
import { LOCALE_COOKIE_NAME } from "../../../../packages/react/build/core/index.js";
import { cookies } from 'next/headers';
// import { NextResponse } from 'next/server';
// import { ClientComponent } from "./client";



const lingoDotDev = new LingoDotDevEngine({
        apiKey: process.env.LINGODOTDEV_API_KEY!,
}); 

// Server Component (Parent Component)
export async function ParentComponent(){
  const cookieStore = await cookies();
  const locale = cookieStore.get(LOCALE_COOKIE_NAME)?.value || "es";
  //Fetch data on the server 
  // const headersList = headers();
  // const host = (await headersList).get('host'); 
  // const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https'; 
  // const url = `${protocol}://${host}/api/data`;
  const res = await fetch('https://pokeapi.co/api/v2/pokemon-species/aegislash');
  const pokemon = await res.json();
  // const pokemon_data = NextResponse.json(pokemon.name + pokemon.form_descriptions[0]["description"])

  
  const result = await lingoDotDev.localizeText(pokemon.form_descriptions[0]["description"], {
    sourceLocale: "en",
    targetLocale: locale,
  });

  return (
    <div>
      {pokemon.name}
      <br />
      {result}
    </div>
  );

}