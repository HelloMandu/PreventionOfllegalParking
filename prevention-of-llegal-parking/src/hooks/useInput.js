import { useState } from "react";

const useInput = (initialState) => {
    const [state, setState] = useState(initialState);
    const onChange = e => {
        setState(e.target.value);
    }
    return [state, onChange];
}

export default useInput;
