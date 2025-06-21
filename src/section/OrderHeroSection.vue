<template>
    <section>
        <div class="hero-section">
            <h1>Pizza Order</h1>
        </div>
    </section>
</template>

<style scoped>
.hero-section {
    background-image: url('@/assets/img/hero.png');
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 100%;

    h1 {
        color: var(--primary-color);
        font-size: 4rem;
        text-align: center;
    }
}

@media screen and (max-width: 480px) {
    .hero-section h1 {
        font-size: 3rem;
    }
}
</style>