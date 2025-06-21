<script setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
    toppings: {
        type: Object,
        required: true,
    },
    selectedToppings: {
        type: Array,
        required: true,
    },
    availableToppings: {
        type: Array,
        required: true
    }
});

const isLoading = computed(() => props.toppings.loading.value || false);
const isError = computed(() => props.toppings.error.value || false);
const pizzaToppings = computed(() => props.toppings.data.value?.data || []);

// Function to toggle the selection of a topping
const toggleTopping = (topping) => {
    const index = props.selectedToppings.indexOf(topping.id);
    if (index > -1) {
        props.selectedToppings.splice(index, 1);
    } else {
        props.selectedToppings.push(topping);
    }

    return props.selectedToppings;
};

</script>

<template>
    <p class="loading" v-if="isLoading">Loading...</p>
    <p class="error" v-else-if="isError">Failed to load data</p>
    <div v-else>
        <label
            v-for="(topping, index) in pizzaToppings"
            :key="index"
            :class="{
                'active': selectedToppings.some((el) => el.name === topping.name),
                'disabled': !availableToppings.includes(topping.id),
            }"
        >
            {{ topping.name }}
            <input
                type="checkbox"
                @change="$emit('update:selectedToppings', toggleTopping(
                    {
                        id: topping.id, 
                        name: topping.name,
                        price: topping.price
                    }
                ))"
                :checked="selectedToppings.some((el) => el.name === topping.name)"
            />
        </label>
    </div>
</template>

<style scoped>
.pizza-toppings div {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    justify-content: start;
    gap: 1rem;
    width: 90%;
    margin-bottom: 1rem;

    label {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.8rem 1.2rem;
        font-size: 0.9rem;
        cursor: pointer;
        border: 1px solid var(--border);
        border-radius: 20px;

        &:hover {
            border: 1px solid var(--primary-color);
            color: var(--primary-color);
        }

        &.active {
            background-color: rgba(231, 126, 34, 0.25);
            color: var(--text-color);
            border: 1px solid var(--primary-color);
        }

        &.disabled {
            opacity: 0.5;
            cursor: not-allowed;
            pointer-events: none;
            user-select: none;
            box-shadow: none;
            filter: grayscale(100%);
            background-color: #c1c1c1;
        }

        input {
            display: none;
        }
    }
}

@media screen and (max-width: 768px) {
    .pizza-toppings div {
        display: flex;
        justify-content: start;
        flex-wrap: wrap;
        gap: 1rem;
    }
}
</style>