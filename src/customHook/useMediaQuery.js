import { useEffect, useState } from "react";
// working: useMediaQuery("(max-width: 640px)")
// return true or false;
// this can be combine with other hook prefix:useBreakpoints for more features
export default function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);
    
    useEffect(() => {
        const mediaQuery = window.matchMedia(query);
        setMatches(mediaQuery.matches);

        const handler = (event) => setMatches(event.matches);

        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
    }, [query]);
    
    return matches;
}