import { createContext } from "react";
import { useReducer } from "react";

function Movie(state, { type, payload }) {
    switch (type) {
        case "GetMovie":
            return { ...state, lsGetMovie: payload }
        case "GetNameLogin":
            return { ...state, lsNameLogin: payload }
        case "GetPassLogin":
            return { ...state, lsPassLogin: payload }
        default:
            return state
    }
}




//biến đại diện global state
export const StoreContext = createContext(null);

const Store = ({ children }) => {
    const [lsGetMovie, Dispatch] = useReducer(Movie, [])
    const [lsNameLogin, DispatchName] = useReducer(Movie, null)
    const [lsPassLogin, DispatchPass] = useReducer(Movie, null)

    const globalState = {
        MoviePr: lsGetMovie,
        abc: Dispatch,
        Name: lsNameLogin,
        FunName: DispatchName,
        Pass: lsPassLogin,
        FunPass: DispatchPass,
    }

    return <StoreContext.Provider value={globalState}>
        {children}
    </StoreContext.Provider>;
}

export default Store