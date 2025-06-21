<script setup>
import { inject, watch, ref, computed } from 'vue';

const props = defineProps({
    sizes: {
        type: Object,
        required: true,
    },
    selectedSize: {
        type: Object,
        required: true
    }
});

const emit = defineEmits(['update:selectedSize']);

const isLoading = computed(() => props.sizes.loading.value || false);
const isError = computed(() => props.sizes.error.value || false);
const pizzaSizes = computed(() => props.sizes.data.value?.data || []);
</script>

<template>
    <p class="loading" v-if="isLoading">Loading...</p>
    <p class="error" v-else-if="isError">Failed to load data</p>
    <ul v-else>
        <li 
            v-for="(size, index) in pizzaSizes" 
            :key="index"
        >
            <label>
                <input
                    type="radio"
                    name="size"
                    @change="$emit('update:selectedSize', {
                        name: size.name,
                        extra_price: size.extra_price
                    })"
                    :checked="selectedSize.name === size.name"
                />
                <span class="radio-mark"></span>
                {{ size.name }}
                <span 
                    v-if="size.extra_price > 0" 
                    style="color: var(--secondary-text-color)"
                >
                    (+{{ size.extra_price }}$)
                </span>
            </label>
        </li>
    </ul>
</template>

<style scoped>
.pizza-sizes {
    margin-bottom: 1rem;

    ul {
        display: flex;
        justify-content: start;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
        list-style: none;
        padding: 0;

        label {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;

            & input[type="radio"] {
                display: none;
            }

            .radio-mark {
                width: 20px;
                height: 20px;
                border: 2px solid gray;
                display: inline-block;
                margin-right: 3px;
                position: relative;
                border-radius: 50%;
            }

            & input[type="radio"]:checked + .radio-mark {
                width: 19px;
                height: 19px;
                background-color: var(--primary-color);
                border: 3.5px solid #fff;
                outline: 2px solid var(--primary-color);
            }
        }
    }
}
</style>