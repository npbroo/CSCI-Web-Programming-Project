import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
    logged_in: false,
    user:null,
});

export { useGlobalState, setGlobalState};