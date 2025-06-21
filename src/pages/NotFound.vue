<script setup>
import Button from '@/components/ui/Button.vue';
import { navigateTo } from '@/utils/manualRouter';
</script>

<template>
    <div class="not-found">
        <h1 class="not-found__title">404</h1>
        <h2 class="not-found__subtitle">Page Not Found</h2>
        <p class="not-found__description">Oops! The page you're looking for doesn't exist.</p>
        <a href="/" @click.prevent="navigateTo('/')" style="color: #fff;">
            <Button variant="default">Back To Home</Button>
        </a>
    </div>
</template>

<style scoped>
.not-found {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
    height: 100vh;

    & .not-found__title {
        font-size: 6rem;
        font-weight: bold;
        margin-bottom: 1rem;
        color: var(--primary-color);
    }

    & .not-found__subtitle {
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    & .not-found__description {
        font-size: 1.2rem;
        margin-bottom: 2rem;
        color: var(--secondary-text-color);
    }
}
</style>