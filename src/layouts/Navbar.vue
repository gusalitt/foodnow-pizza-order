<script setup>
import Button from '@/components/ui/Button.vue';
import NavLink from '@/components/ui/NavLink.vue';
import Logo from '@/assets/img/logo.svg';
import LogoAlt from '@/assets/img/logo-alt.svg';
import { ref, computed } from 'vue';
import { currentView } from '@/utils/manualRouter';

const menuOpen = ref(false);
const linkColor = computed(() => {
    return currentView.value.__name === 'NotFound' ? '#000' : "#fff"
});

</script>

<template>
    <header>
        <nav class="navbar">
            <div class="navbar__brand">
                <a href="">
                    <img :src="linkColor === '#fff' ? Logo : LogoAlt" alt="" width="170">
                </a>

                <div class="navbar__toggle" @click="menuOpen = !menuOpen">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </div>
                <ul :class="{'navbar__links': true, 'active': menuOpen}">

                    <NavLink to="/" :style="`color: ${linkColor};`">Home</NavLink>
                    <NavLink to="/order" :style="`color: ${linkColor};`">Order</NavLink>
                    <NavLink to="/about" :style="`color: ${linkColor};`">About</NavLink>
                    <NavLink to="/blog" :style="`color: ${linkColor};`">Blog</NavLink>
                    <NavLink to="/contact-us" :style="`width: max-content; color: ${linkColor};`">Contact Us</NavLink>

                </ul>
                <div :class="{'navbar__actions': true, 'active': menuOpen}">
                    <Button variant="link" :style="`color: ${linkColor};`">Login</Button>
                    <Button variant="default">Register</Button>
                </div>
        </nav>
    </header>
</template>

<style scoped>
header {
    background-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}
.navbar {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: .8rem 4rem;

    .navbar__brand {
        font-size: 1.5rem;
        font-weight: bold;
        padding-top: 5px;

        .navbar__toggle {
            display: none;
            width: 50px;
            cursor: pointer;
        }
    }

    .navbar__links {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
    }
    
    .navbar__actions {
        display: flex;
        justify-content: end;
        align-items: center;
        gap: 1rem;
    }
}

@media screen and (max-width: 768px) {
    .navbar {
        padding: 0;
        display: block;
        position: relative;

        .navbar__brand {
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .navbar__toggle {
                display: block;
            }
        }

        .navbar__links {
            flex-direction: column;
            backdrop-filter: blur(20px);
            align-items: start;
            gap: 1rem;
            padding: 1rem;
            width: 100%;
            opacity: 0;
            position: absolute;
            top: 88px;
            left: 0;
            transform: translateX(-100%);
            transition: all .2s;
            
            a {
                color: var(--text-color);
            }

            &.active {
                transform: translateX(0);
                opacity: 1;
            }
        }
        .navbar__actions {
            padding: 1rem;
            backdrop-filter: blur(20px);
            justify-content: start;
            width: 100%;
            position: absolute;
            top: 360px;
            left: 0;
            transform: translateX(-100%);
            opacity: 0;
            transition: all .2s;

            &.active {
                transform: translateX(0);
                opacity: 1;
            }
        }
    }
    
}

</style>