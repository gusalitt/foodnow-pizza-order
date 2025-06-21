// Manual Router Implementation
// This is a simple manual router implementation for Vue.js without using Vue Router.

import { ref, computed } from 'vue';
import Order from '@/pages/Order.vue'
import NotFound from '@/pages/NotFound.vue';

// Define your routes here
const routes = {
    '/': Order, // Example component for the '/' route
    '/order': Order,
    '/about': Order, // Example component for the '/about' route
    '/blog': Order, // Example component for the '/blog' route
    '/contact-us': Order // Example component for the '/contact-us' route
}

// Current path state
const currentPath = ref(window.location.pathname || '/');

// Function to update the current path based on the browser's URL
const updateRoute = () => {
    currentPath.value = window.location.pathname || '/';
}

// Computed property to get the current view component based on the current path
const currentView = computed(() => {
    return routes[currentPath.value] || NotFound;
});

/**
 * Initialize the router by setting the current path
 * and setting up the popstate event listener for back/forward navigation.
 */
function initRouter() {
    updateRoute();
    window.addEventListener('popstate', updateRoute);
}

/**
 * Navigate to a specific path.
 * This function updates the browser's URL and the current view.
 * @param {string} path  - The path to navigate to (e.g., '/order'). 
 * 
 * @example
 * navigateTo('/order');
 */
function navigateTo(path) {
    if (routes[path]) {
        window.history.pushState({}, '', path);
        updateRoute();
    } else {
        console.warn(`Route ${path} does not exist.`);
    }
}

export {
    initRouter,
    currentView,
    currentPath,
    navigateTo
}