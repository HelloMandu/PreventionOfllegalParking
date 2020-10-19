import { useState, useRef, useEffect } from "react";
import { getAddress } from "../api/Address";

const getSearchList = async (text) => {
    const result = await getAddress(text);
    return result;
};

const useSearch = (text) => {
    const [searchFocus, setSearchFocus] = useState(false);
    const [searchList, setSearchList] = useState([]);
    const handleSearchToggle = () => setSearchFocus(!searchFocus);
    const handleSearchList = async (text) => {
        const newSearchList = await getSearchList(text);
        setSearchList(newSearchList);
    };
    useEffect(() => {
        return () => handleSearchList(text);
    }, [text]);
    return [searchFocus, searchList, handleSearchToggle];
};

export default useSearch;
