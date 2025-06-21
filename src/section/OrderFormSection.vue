<script setup>
import { computed, ref, watch, watchEffect } from 'vue'
import PaymentSummary from '@/components/order/PaymentSummary.vue'
import usePizzaData from '@/composables/usePizzaData'
import usePizzaImage from '@/composables/usePizzaImage'
import PizzaList from '../components/order/PizzaList.vue'
import PizzaSize from '@/components/order/PizzaSize.vue'
import PizzaTopping from '@/components/order/PizzaTopping.vue'

const selectedPizza = ref({})
const selectedSize = ref({})
const selectedToppings = ref([])

const { pizzas, sizes, toppings } = usePizzaData()
const { getPizzaImage } = usePizzaImage()

// Watch the selected pizza to set the default size
watch(selectedPizza, () => {
    if (selectedPizza.value.name && !selectedSize.value.name) {
        selectedSize.value = sizes.data.value?.data.find((size) => size.name === 'Small')
    }

    // Reset selected toppings when a selected pizza changes
    selectedToppings.value = [];
})

// Computed property to get available toppings for the selected pizza.
const availableToppings = computed(() => selectedPizza.value.toppings || []);
</script>

<template>
    <section>
        <div class="container">
            <div class="row">
                <form class="pizza-form">
                    <!-- Pizza Choices -->
                    <h2>Choose your Pizza</h2>
                    <PizzaList 
                        :pizzas="pizzas" 
                        :selected-pizza="selectedPizza" 
                        @update:selectedPizza="selectedPizza = $event"
                    />

                    <!-- Pizza Sizes -->
                    <div class="pizza-sizes">
                        <h2 style="margin-bottom: 2rem">Custom Pizza</h2>
                        <p class="title">Size</p>
                        <PizzaSize 
                            :sizes="sizes" 
                            :selected-size="selectedSize" 
                            @update:selectedSize="selectedSize = $event"
                        />
                    </div>

                    <!-- Pizza Toppings -->
                    <div class="pizza-toppings">
                        <p class="title">Toppings</p>
                        <PizzaTopping 
                            :toppings="toppings" 
                            :selected-toppings="selectedToppings" 
                            :available-toppings="availableToppings"
                            @update:selectedToppings="selectedToppings = $event"
                        />
                    </div>
                </form>

                <!-- Payment Summary -->
                <PaymentSummary 
                    :pizza="selectedPizza" 
                    :size="selectedSize" 
                    :toppings="selectedToppings" 
                />
            </div>
        </div>
    </section>
</template>

<style scoped>
.container {
    justify-content: start;
    width: 100%;
}
h2 {
    font-size: 2rem;
    color: var(--primary-color);
    letter-spacing: 1px;
}
.loading {
    font-size: 1.1rem;
    color: var(--primary-color);
    letter-spacing: 1px;
}
.error {
    font-size: 1.1rem;
    color: red;
    letter-spacing: 1px;
}
.row {
    width: 100%;
    display: grid;
    grid-template-columns: 75% 25%;
    /* gap: 1.5rem; */

    .pizza-form {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;

        .title {
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--text-color);
            margin-bottom: 1rem;
        }
    }
}

@media screen and (max-width: 1024px) {
    .row {
        grid-template-columns: 60% 40%;
    }
}

@media screen and (max-width: 768px) {
    .row {
        grid-template-columns: 1fr;
    }
}
</style>

