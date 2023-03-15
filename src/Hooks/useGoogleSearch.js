import { useEffect, useState } from "react"
import { API_KEY } from "../keys";

export const useGoogleSearch = (term) => {

    const CONTEXT_KEY = "d0e01571b0220429c";
    const [data, setData] = useState(null);
    
    useEffect(() => {

        const fetchData = async () => {
              fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`).
             then(response => response.json()).
             then(res=>{ setData(res)} );
        }

        fetchData();
    }, [term]);
    
    return {data};
}
