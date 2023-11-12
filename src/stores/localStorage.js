// Sets an item with a Key to local storage
const saveStorage = function (key, data) {
    localStorage.setItem(key, JSON.stringify(data));
};

// Looks for a local storage item and returns if present
const getStorage = function (key) {
    if (localStorage.getItem(key)) {
        const data = JSON.parse(localStorage.getItem(key))
        return data
    }
};

// Clear a single item or the whole local storage
const clearStorage = function (key = 'false') {
    if (key) {
        localStorage.removeItem(key);
    } else {
        localStorage.clear();
    }
}
// Exports all avaliable functions on the script
export { getStorage, saveStorage, clearStorage }