<script setup>
import Button from '@/components/ui/Button.vue';
import NavLink from '@/components/ui/NavLink.vue';

const additionalStyles = `
    color: var(--secondary-text-color);
    padding-left: 0 !important;
    font-weight: 500;
`; 

</script>

<template>
    <footer>
        <div class="container">
            <div class="footer--content">
                <div class="footer__links">
                    <img src="../assets/img/logo-alt.svg" alt="">
                    <p>Find Us :</p>
                    <ul>
                        <li>
                            <a href="">
                                <Button variant="outline" size="icon" class="active">
                                    <img src="../assets/img/icons/facebook.svg" alt="">
                                </Button>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <Button variant="outline" size="icon" class="active">
                                    <img src="../assets/img/icons/instagram.svg" alt="">
                                </Button>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <Button variant="outline" size="icon" class="active">
                                    <img src="../assets/img/icons/youtube.svg" alt="">
                                </Button>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="footer__navigation">
                    <h2>Navigation</h2>
                    <div>
                        <ul>
                            <NavLink to="/" :style="additionalStyles">Home</NavLink>
                            <NavLink to="/order" :style="additionalStyles">Order</NavLink>
                            <NavLink to="/about" :style="additionalStyles">About</NavLink>
                            <NavLink to="/blog" :style="additionalStyles">Blog</NavLink>
                            <NavLink to="/contact-us" :style="additionalStyles">Contact Us</NavLink>
                        </ul>
                        <ul>
                            <NavLink to="" :style="additionalStyles">Contact</NavLink>
                            <NavLink to="" :style="additionalStyles">Login</NavLink>
                            <NavLink to="" :style="additionalStyles">Register</NavLink>
                        </ul>
                    </div>
                </div>

                <div class="footer__contact">
                    <h2>Contact Us</h2>
                    <ul>
                        <li>
                            <a href="">
                                <img src="../assets/img/icons/mail.svg" alt="">
                                <p>Food.now@mail.com</p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../assets/img/icons/phone.svg" alt="">
                                <p>+62848477102943</p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../assets/img/icons/whatsapp.svg" alt="">
                                <p>+628184938494</p>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="footer__location">
                    <h2>Location</h2>
                    <span>
                        <a href="">
                            <img src="../assets/img/icons/location.svg" alt="">
                            <p>Kerobokan</p>
                        </a>
                    </span>
                    <p>Jl. Raya Kerobokan Br Taman, Kuta No.98, Kerobokan Kelod, Kec. Kuta Utara, Kabupaten Badung, Bali 80361</p>
                </div>
            </div>

            <div class="footer--bottom">
                <hr>
                <p>Copyright &copy; 2022 Foodnow. All Rights Reserved. Powered by PT. Timedoor Indonesia. | <a href="">Privacy Policy</a></p>
                <p>This site is protected by reCaptcha and the Google Privacy Policy and Terms of Service apply.</p>
            </div>
        </div>
    </footer>
</template> 

<style scoped>
footer {
    width: 100%;

    .container {
        flex-direction: column;
        padding-bottom: 2rem !important;
    }

    h2 {
        color: var(--primary-color);
        font-size: 1.3rem;
        margin-bottom: 1rem;
    }

    .footer--content {
        border-top: 1px solid #e7e7e7;
        padding-top: 4rem;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;

        .footer__links  {
            img:not(:last-child) {
                margin-bottom: 2rem;
            }
            p {
                color: var(--primary-color);
                font-size: 1.2rem;
                margin-bottom: 1rem;
                font-weight: bolder;
            }
            ul {
                display: flex;
                align-items: center;
                gap: 1rem;
            }
        }

        .footer__navigation div {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            padding: 0;
        }

        .footer__contact ul {
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: start;
            gap: 1rem;

            li a {
                display: inline-flex;
                justify-content: center;
                align-items: center;
                gap: 8px;

                p {
                    color: var(--secondary-text-color);
                    font-size: 0.9rem;
                }
            }
        }

        .footer__location {
            span a {
                display: flex;
                align-items: center;
                gap: 8px;
                margin-bottom: 10px;
                
                p {
                    color: #000;
                    font-weight: 700;
                    font-size: 1rem;
                }
            }
            p {
                color: var(--secondary-text-color);
                font-size: 0.9rem;
                line-height: 1.5;
            }
        }
    }

    .footer--bottom {
        width: 100%;
        text-align: center;
        color: var(--secondary-text-color);
        font-size: 0.8rem;
        line-height: 1.5;

        a {
            color: var(--primary-color);
            text-decoration: none;
            font-weight: bold;
        }
    }
}

@media screen and (max-width: 1024px) {
    .footer--content {
        grid-template-columns: repeat(2, 1fr) !important;
    }
}

@media screen and (max-width: 480px) {
    .footer--content {
        grid-template-columns: repeat(1, 1fr) !important;
    }
    .footer--bottom {
        width: 100% !important;
    }
}
</style>