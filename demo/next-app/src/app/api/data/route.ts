import {NextResponse} from 'next/server';
// import { LingoDotDevEngine } from 'lingo.dev/sdk'; 

// const lingoDotDev = new LingoDotDevEngine({
//         apiKey: process.env.LINGODOTDEV_API_KEY!,
// }); 

export async function GET(){
    const res = await fetch('https://pokeapi.co/api/v2/pokemon-species/aegislash');
    const pokemon = await res.json();
    // const data = {
    //     message: "Hello from the API!",
    //     time: new Date().toISOString(), 

    // };
    // const result = await lingoDotDev.localizeText(pokemon.name, {
    //     sourceLocale: "en",
    //     targetLocale: "es",
    // });
    console.log(pokemon.form_descriptions)
    return NextResponse.json(pokemon.name + pokemon.form_descriptions[0]["description"])
}