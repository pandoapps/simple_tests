```javascript
/**
 * src/services/localStorageService.js
 *
 * This module provides an abstraction layer for interacting with the browser's
 * localStorage API. It simplifies storing and retrieving JSON-serializable
 * data, adds basic error handling, and prevents direct localStorage access
 * throughout the application.
 */

const LOCAL_STORAGE_AVAILABLE = typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';

/**
 * Safely checks if localStorage is available and accessible.
 * This can prevent errors in environments where localStorage might be restricted
 * or not available (e.g., some sandboxed iframes, private browsing modes, or SSR).
 *
 * @returns {boolean} True if localStorage is available, false otherwise.
 */
function isLocalStorageAvailable() {
    if (!LOCAL_STORAGE_AVAILABLE) {
        console.warn('localStorage: Not available in this environment.');
        return false;
    }
    try {
        // Attempt to set and remove an item to test full functionality and quota issues
        const testKey = '__ls_test__';
        window.localStorage.setItem(testKey, testKey);
        window.localStorage.removeItem(testKey);
        return true;
    } catch (e) {
        console.error('localStorage: Access denied or quota exceeded.', e);
        return false;
    }
}

/**
 * Stores a value in localStorage under the given key.
 * The value is automatically stringified to JSON.
 *
 * @param {string} key - The key under which to store the value.
 * @param {*} value - The value to store. Can be any JSON-serializable type (object, array, string, number, boolean).
 * @returns {boolean} True if the operation was successful, false otherwise.
 */
function setItem(key, value) {
    if (!isLocalStorageAvailable()) {
        return false;
    }
    try {
        const serializedValue = JSON.stringify(value);
        window.localStorage.setItem(key, serializedValue);
        return true;
    } catch (e) {
        console.error(`localStorage: Error setting item for key "${key}".`, e);
        return false;
    }
}

/**
 * Retrieves a value from localStorage for the given key.
 * The retrieved value is automatically parsed from JSON.
 *
 * @param {string} key - The key for the item to retrieve.
 * @returns {*} The parsed value, or null if the item doesn't exist or an error occurs.
 */
function getItem(key) {
    if (!isLocalStorageAvailable()) {
        return null;
    }
    try {
        const serializedValue = window.localStorage.getItem(key);
        if (serializedValue === null) {
            return null; // Item does not exist
        }
        return JSON.parse(serializedValue);
    } catch (e) {
        console.error(`localStorage: Error getting or parsing item for key "${key}".`, e);
        return null;
    }
}

/**
 * Removes an item from localStorage for the given key.
 *
 * @param {string} key - The key of the item to remove.
 * @returns {boolean} True if the operation was successful, false otherwise.
 */
function removeItem(key) {
    if (!isLocalStorageAvailable()) {
        return false;
    }
    try {
        window.localStorage.removeItem(key);
        return true;
    } catch (e) {
        console.error(`localStorage: Error removing item for key "${key}".`, e);
        return false;
    }
}

/**
 * Clears all items from localStorage.
 * Use with caution, as this will remove all stored data for the origin.
 *
 * @returns {boolean} True if the operation was successful, false otherwise.
 */
function clearAll() {
    if (!isLocalStorageAvailable()) {
        return false;
    }
    try {
        window.localStorage.clear();
        return true;
    } catch (e) {
        console.error('localStorage: Error clearing all items.', e);
        return false;
    }
}

/**
 * Exports the localStorage service functions.
 */
export const localStorageService = {
    setItem,
    getItem,
    removeItem,
    clearAll,
    isAvailable: isLocalStorageAvailable // Expose availability check
};

// Example usage (for development/testing - remove from production build if not needed)
/*
if (process.env.NODE_ENV !== 'production') { // A common pattern to exclude dev code
    console.log('localStorageService loaded.');
    localStorageService.setItem('userSettings', { theme: 'dark', notifications: true });
    const settings = localStorageService.getItem('userSettings');
    console.log('Retrieved user settings:', settings);

    localStorageService.setItem('lastLogin', Date.now());
    console.log('Last login:', new Date(localStorageService.getItem('lastLogin')));

    localStorageService.removeItem('lastLogin');
    console.log('Last login after removal:', localStorageService.getItem('lastLogin')); // Should be null

    // Test non-existent key
    console.log('Non-existent key:', localStorageService.getItem('nonExistentKey')); // Should be null

    // Test clearing all
    // localStorageService.clearAll();
    // console.log('Settings after clear:', localStorageService.getItem('userSettings')); // Should be null
}
*/
```