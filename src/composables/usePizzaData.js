import { ref, onMounted } from 'vue'
import {
  getPizzaList,
  getPizzaSizeList,
  getPizzaToppingList,
} from '@/services/pizzaService'


/**
 * A composable that returns an object with the properties `pizzas`, `sizes`, and
 * `toppings`, each of which is an object with the properties `data`, `error`,
 * `loading`, and `reload`.
 *
 * @returns {Object} An object with the properties `pizzas`, `sizes`, and `toppings`.
 */
export default function usePizzaData() {
  const pizzas = getPizzaData('pizza')
  const sizes = getPizzaData('size')
  const toppings = getPizzaData('topping')

  return {
    pizzas,
    sizes,
    toppings,
  }
}


/**
 * Fetches pizza data of the given type and returns an object with the properties
 * `data`, `error`, `loading`, and `reload`.
 *
 * @param {string} type - The type of data to fetch, either 'pizza', 'size', or 'topping'.
 * @returns {Object} An object with the properties `data`, `error`, `loading`, and `reload`.
 */
function getPizzaData(type) {
  const data = ref([])
  const error = ref(null)
  const loading = ref(false)

  const load = async () => {
    loading.value = true
    error.value = null

    try {
      data.value = await fetchList(type)
    } catch (error) {
      error.value = error.message || 'Failed to load data'
    } finally {
      loading.value = false
    }
  }

  onMounted(async () => {
    await load();
  })

  return {
    data,
    error,
    loading,
    reload: load,
  }
}

/**
 * Fetches the list of pizzas, sizes, or toppings based on the given type
 * @param {string} type - The type of list to fetch, either 'pizza', 'size', or 'topping'
 * @returns {Promise<Array>} - An array of list items
 * @throws {Error} - If the type is unknown
 */
const fetchList = async (type) => {
  switch (type) {
    case 'pizza':
      return await getPizzaList()
    case 'size':
      return await getPizzaSizeList()
    case 'topping':
      return await getPizzaToppingList()
    default:
      throw new Error(`Unknown type: ${type}`)
  }
}
