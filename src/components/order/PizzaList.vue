<script setup>
import { computed, onMounted, provide, ref } from 'vue';
import usePizzaImage from '@/composables/usePizzaImage';
import Button from '@/components/ui/Button.vue';

const props = defineProps({
    pizzas: {
        type: Object,
        required: true,
    },
    selectedPizza: {
        type: Object,
        required: true,
    },
});

const emit = defineEmits(['update:selectedPizza']);

const isLoading = computed(() => props.pizzas.loading.value || false);
const isError = computed(() => props.pizzas.error.value || false);
const pizzaList = computed(() => props.pizzas.data.value?.data || []);
const { getPizzaImage } = usePizzaImage();

</script>

<template>
    <p class="loading" v-if="isLoading">Loading...</p>
    <p class="error" v-else-if="isError">Failed to load data</p>
    <div class="pizza-choices" v-else>
        <label
            v-for="(pizza, index) in pizzaList"
            :key="index"
            :class="{ active: selectedPizza.name === pizza.name }"
        >
            <div class="pizza-choices__content">
                <img 
                    :src="getPizzaImage(pizza.name)" 
                    :alt="pizza.name" 
                />
                <div>
                    <h3 class="pizza-name">{{ pizza.name }}</h3>
                    <p class="price">
                        ${{ pizza.discount.final_price.toFixed(2) }}
                        <span
                            v-if="pizza.discount.is_active"
                            class="old-price"
                        >
                            ${{ pizza.price.toFixed(2) }}
                        </span>
                    </p>
                </div>
                <img
                    v-if="pizza.discount.is_active"
                    src="@/assets/img/ribbon.svg"
                    alt=""
                    class="ribbon"
                />
            </div>
            <input
                type="radio"
                name="pizza"
                @change="$emit('update:selectedPizza', {
                    name: pizza.name,
                    price: pizza.discount.final_price,
                    toppings: pizza.toppings,
                })"
                :checked="selectedPizza.name === pizza.name"
            />
        </label>
    </div>
</template>

<style scoped>
.pizza-choices {
    display: flex;
    justify-items: start;
    align-items: start;
    gap: 1.5rem;
    overflow: hidden;
    border-radius: 15px;
    margin-bottom: 2rem;
    
    label {
        border-radius: 15px;
        cursor: pointer;
        overflow: hidden;
    }

    label.active {
        background-color: var(--primary-color);
        color: var(--primary-text-color);

        .old-price {
            color: rgba(215, 215, 215, 0.7);
        }
    }

    input {
        display: none;
    }

    .pizza-choices__content {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #d5d5d5;
        background-color: transparent;
        border-radius: 15px;
        gap: 1rem;
        padding: 1.5rem 2.4rem;
        transition: all 0.2s ease;
        overflow: hidden;
        position: relative;

        img:first-child {
            width: 105px;
            height: 105px;
            object-fit: cover;
            border-radius: 20px;
            transition: all 0.2s ease;
        }

        .pizza-name {
            margin-bottom: 10px;
            font-size: 0.9rem;
        }

        .old-price {
            text-decoration: line-through;
            color: var(--secondary-text-color);
            font-size: .8rem;
        }

        img.ribbon {
            width: 85px !important;
            height: 85px !important;
            position: absolute;
            top: -5px;
            right: 0;
        }

        &:hover {
            background-color: rgba(231, 126, 34, 0.25);
            border: 1px solid rgba(231, 126, 34, 0.25);
        }

        &:hover img:first-child {
            transform: rotate(15deg);
        }
    }
}

@media screen and (max-width: 1024px) {
    .pizza-choices {
        flex-wrap: wrap;
    }
}

@media screen and (max-width: 768px) {
    .pizza-choices {
        flex-wrap: wrap;

        label {
            max-width: 20rem;
        }
    }
}

@media screen  and (max-width: 512px) {
    .pizza-choices, .pizza-choices label {
        width: 100%;
    }
}
</style>