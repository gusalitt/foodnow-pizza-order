/**
 * Combines a list of class names into a single string, filtering out any falsy values.
 * 
 * @param {...string} classes - A list of class names or falsy values.
 * @returns {string} A single string of space-separated class names.
 */

export default function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}