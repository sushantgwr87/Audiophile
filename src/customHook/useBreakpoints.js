// this is another hook which you should create in other file, same folder using prefix: useMediaQuery
import useMediaQuery from "./useMediaQuery";

export default function useBreakpoints() {
    
    const breakpoints = {
        isXs: useMediaQuery("(max-width: 640px)"),
        isSm: useMediaQuery("(min-width: 641px) and (max-width: 768px)"),
        isMd: useMediaQuery("(min-width: 900px)"),
    };

    return breakpoints;
}