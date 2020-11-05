import { useState, useCallback, useRef } from "react";

const useToggle = () => {
    const [toggle, setToggle] = useState(true);
    const [type, setType] = useState(0);
    const all = useRef(null);
    const cctv = useRef(null);
    const [ref, setRef] = useState({
        all, cctv
    });
    const handleToggle = useCallback(
        (id) => {
            setToggle(!toggle);
            setType(id);
            console.log(id);
        },
        [toggle]
    );
    return [toggle, type, handleToggle];
};

export default useToggle;
