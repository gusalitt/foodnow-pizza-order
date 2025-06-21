<script setup>
import Navbar from '@/layouts/Navbar.vue';
import Footer from '@/layouts/Footer.vue';

</script>

<template>
    <div class="main-layout">
        <Navbar />
        <main>
            <slot />
        </main>
        <Footer />
    </div>
</template>

<style scoped>
.main-layout {
    width: 100%;
    margin: 0 auto;
}
</style>