import { useEffect,useState } from "react";


export function useFetch(url) {
const [finaldata , setFinaldata] = useState ({});


async function getDetails() {
    const response = await fetch (url);
    const json = await response.json();
    setFinaldata(json);
}

useEffect(()=> {
    getDetails ();
},[url]);

return {finaldata};

}