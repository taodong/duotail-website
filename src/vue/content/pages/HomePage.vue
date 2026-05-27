<template>
    <div class="waterwheel-banner" role="region" aria-label="Waterwheel documentation notice">
        <span>Looking for documentation for our Waterwheel test agent?</span>
        <a href="https://waterwheel.duotail.com" target="_blank" rel="noopener noreferrer">Click here</a>
    </div>
    <PageWrapper id="duotail-home-page"
                 :no-padding="true"
                 :sections="sections"
                 :nav-links="navLinks"/>
</template>

<script setup>
import PageWrapper from "/src/vue/components/layout/PageWrapper.vue"
import SectionInfo from "/src/models/SectionInfo.js"
import FaqSection from "/src/vue/content/sections/FaqSection.vue"
import HeroSection from "/src/vue/content/sections/HeroSection.vue"
import SystemSection from "/src/vue/content/sections/SystemSection.vue"
import PriceSection from "/src/vue/content/sections/PriceSection.vue"
import NavLink from "/src/models/NavLink.js"

const sections = [
    new SectionInfo('hero',         HeroSection,            null,           null),
    new SectionInfo('system',       SystemSection,          'The System',   'fa-solid fa-shield-halved'),
    new SectionInfo('price',     PriceSection,        'Pricing',     'fa-solid fa-wrench'),
    new SectionInfo('faq',          FaqSection,             'Q&A',          'fa-solid fa-question-circle'),
]

const navLinks = [
    new NavLink('login', 'Login', 'https://my.duotail.com', 'fa-solid fa-user'),
    new NavLink('docs', 'Documentation', 'https://docs.duotail.com', 'fa-solid fa-book'),
]

</script>

<style lang="scss" scoped>
.waterwheel-banner {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    width: 100%;
    margin-top: 4.75rem;
    padding: 0.7rem 1rem;
    background: linear-gradient(90deg, #f4efe5 0%, #fff8ed 100%);
    border-bottom: 1px solid #eadfce;
    color: #2e2a24;
    font-size: 0.95rem;
    text-align: center;
    position: relative;
    z-index: 1;

    a {
        color: #9f4b00;
        font-weight: 700;
        text-decoration: underline;
    }

    a:hover,
    a:focus-visible {
        color: #7c3900;
    }
}

@media (max-width: 640px) {
    .waterwheel-banner {
        flex-direction: column;
        gap: 0.15rem;
        font-size: 0.9rem;
        margin-top: 4.25rem;
    }
}
</style>