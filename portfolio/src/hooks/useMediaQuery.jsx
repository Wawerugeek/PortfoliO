import { useState, useEffect } from "react";

/**check whether a specified media query matches the current screen size
and provide a reactive interface for updating the state whenever the screen size changes.**/

const useMediaQuery = (query) => {
    const [matches, setMatches ] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        window.addEventListener("resize", listener);
        return () => window.removeEventListener("resize", listener);
    }, [matches, query]);
    return matches;
}

export default useMediaQuery;