<script setup>
import { defineProps, computed, ref, watch } from 'vue';
import Button from '@/components/ui/Button.vue';
import SuccessModal from '@/components/order/SuccessModal.vue';

const props = defineProps({
    pizza: {
        type: Object,
        required: true
    },
    size: {
        type: Object,
        required: true
    },
    toppings: {
        type: Array,
        default: () => []
    }
});

// Computed property to calculate the total price
const totalPrice = computed(() => {
    let total = 0;
    total += props.pizza.price || 0;
    total += props.size.extra_price || 0;
    
    props.toppings.forEach(el => {
        total += el.price;
    });

    if (total < 0 || isNaN(total) || !isFinite(total)) {
        total = 0;
    }

    return total.toFixed(2);
})

const isShowSuccessModal = ref(false);

// Function to handle the click event for the "Order Now" button
const handleClick = () => {
    if (props.pizza.name && props.size.name) { 
        isShowSuccessModal.value = true;
    }
};

// Watch the isShowSuccessModal value and update the body class for show or hide modal
watch(isShowSuccessModal, () => {
    document.body.classList = isShowSuccessModal.value ? 'modal-open' : '';
})

</script>

<template>
    <div class="card">
        <div class="payment-summary">
            <h2>Payment Summary</h2>
            <ul>
                <li v-if="pizza && pizza.name">
                    <span>{{ pizza.name }}</span>
                    <span>{{ pizza.price }}$</span>
                </li>
                <li v-if="size && size.name" class="size">
                    <span>Size - {{ size.name }}</span>
                    <span>{{ size.extra_price }}$</span>
                </li>
                <li v-for="topping in toppings" v-if="toppings.length > 0">
                    <span>{{ topping.name }}</span>
                    <span>{{ topping.price }}$</span>
                </li>
                <hr :style="{ 'margin': '1rem 0' }"/>
                <li class="total-price">
                    <span>Total Price</span>
                    <span>${{ totalPrice }}</span>
                </li>
            </ul>
            <Button :style="{ 'width': '100%' }" @click="handleClick">Order Now</Button>
        </div>
    </div>

    <SuccessModal v-show="isShowSuccessModal" @close="isShowSuccessModal = false"/>
</template>
<style scoped>
.card {
    background-color: #fff;
    color: var(--text-color);
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 1.4rem;
    transition: box-shadow 0.2s ease;
    display: flex;
    flex-direction: column;
    height: max-content;
    flex: 1;
    margin-top: 1rem;
    width: 100%;
}
.payment-summary {
    width: 100%;
    height: min-content;

    h2 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
        padding: 0 .6rem;
        color: var(--primary-color);
    }

    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1rem;
        color: var(--secondary-text-color);
        margin-bottom: 0.8rem;
        padding: 0 1rem;
    }

    .total-price {
        font-size: 1.3rem;
        font-weight: 500;
        color: var(--text-color);
        letter-spacing: 0.8px;
        margin-bottom: 1rem;

        span:last-child {
            font-weight: 600;
            color: var(--primary-color);
        }
    }
}
</style>