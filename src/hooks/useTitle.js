import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `Magic ToyBox | ${title}`;
    }, [title])
};
export default useTitle;