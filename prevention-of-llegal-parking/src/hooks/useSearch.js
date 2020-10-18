import {useState, useRef, useEffect} from 'react';
import { getAddress } from "../api/address";

const getSearchList = async (text) => {
    const result = await getAddress(text);
    return result;
};

const useSearch = (text) =>{
    const [searchFocus, setSearchFocus] = useState(false);
    const searchList = useRef([]);
    const handleSearchToggle = () => setSearchFocus(!searchFocus);
    const setSearchList = async (text) =>{
        searchList.current = await getSearchList(text);
    }
    useEffect(() => {
        return () => setSearchList(text);
    }, [text]);
    return [searchFocus, searchList, handleSearchToggle];
}

export default useSearch;