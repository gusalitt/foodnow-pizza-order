const images = import.meta.glob('@/assets/img/pizza/*.png', {
    eager: true,
    import: 'default',
});

/**
 * Composable function to manage pizza images.
 * 
 * This function provides a method to get the image URL of a pizza by its name.
 * It utilizes glob imports to dynamically load images from the assets folder.
 *
 * @returns {Object} An object containing:
 *   - getPizzaImage: A function that accepts a pizza name and returns the corresponding image URL.
 */

export default function usePizzaImage() {
    const getPizzaImage = (name) => {
        const entry = Object.entries(images).find(([path]) => path.includes(`/${name}.png`));

        return entry[1] || '';
    }

    return {
        getPizzaImage
    }
}