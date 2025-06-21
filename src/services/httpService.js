/**
 * Handles an HTTP response object and returns either the parsed JSON response
 * on success, or an Error object with a message including the status code on
 * failure.
 *
 * @param {Response} response - The HTTP response object from fetch.
 * @returns {Promise<Object|Error>} - A promise resolving to either a JSON object
 *   or an Error object.
 */
const handleResponse = async (response) => {
    if (!response.ok) {
        return new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
};


/**
 * Performs a GET request to the specified URL with the given configuration.
 *
 * @param {string} url - The URL to make the GET request to.
 * @param {Object} [config={}] - Optional configuration object to pass to the
 *   fetch function. Common options include `headers`, `mode`, `credentials`,
 *   etc.
 * @returns {Promise<Object|Error>} - A promise resolving to either the parsed
 *   JSON response on success, or an Error object with a message including the
 *   status code on failure.
 */
export const get = async (url, config = {}) => {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Cache-Control': 'no-cache',
            },
            ...config
        });

        return await handleResponse(response);
    } catch (error) {
        console.error('HTTP GET request failed:', error);
        throw error;
    }
}