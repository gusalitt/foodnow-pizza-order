<script setup>

import Button from '@/components/ui/Button.vue';
const emit = defineEmits(['close']);
</script>

<template>
    <div class="overlay" @click.self="$emit('close')">
        <div class="modal">
            <img src="../../assets/img/success-note.png" alt="" width="100">
            <h2>Order Success</h2>
            <p>Thank you, we have received your order successfully</p>
            <Button style="width: 100%;" @click.self="$emit('close')">Close</Button>
        </div>
    </div>
</template>

<style scoped>
.overlay {
    position: fixed !important;
    inset: 0;
    width: 100%;
    height: 100vh !important;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999999999999999999999 !important;
    overflow: hidden;

    .modal {
        background-color: #fff;
        padding: 1.6rem;
        width: 22rem;
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        text-align: center;

        h2 {
            font-size: 1.3rem;
            margin-bottom: 1rem;
        }

        p {
            font-size: .9rem;
            margin-bottom: 2rem;
            color: var(--secondary-text-color);
        }
    }
}
</style>
