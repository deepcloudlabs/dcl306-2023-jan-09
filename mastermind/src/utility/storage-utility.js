export default function loadStateFromLocalStorage(key, initialState) {
    let localStorageState = localStorage.getItem(key);
    if (localStorageState === null || localStorageState === undefined) {
        localStorage.setItem(key, JSON.stringify(initialState));
        return initialState;
    }
    return JSON.parse(localStorageState);
}

export function saveStateToLocalStorage(key, state) {
    localStorage.setItem(key, JSON.stringify(state));
}