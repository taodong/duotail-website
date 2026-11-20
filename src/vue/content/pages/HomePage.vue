<template>
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
import LeanInboxSection from "/src/vue/content/sections/LeanInboxSection.vue"
import FounderSection from "/src/vue/content/sections/FounderSection.vue"
import HowItWorksSection from "/src/vue/content/sections/HowItWorksSection.vue"
import SystemSection from "/src/vue/content/sections/SystemSection.vue"
import PriceSection from "/src/vue/content/sections/PriceSection.vue"
import NavLink from "/src/models/NavLink.js"

const sections = [
    new SectionInfo('hero',         HeroSection,            null,           null),
    new SectionInfo('lean',         LeanInboxSection,       'One Inbox',    'fa-solid fa-inbox'),
    new SectionInfo('how',          HowItWorksSection,      'How It Works', 'fa-solid fa-route'),
    new SectionInfo('benefits',     SystemSection,          'Why Duotail',  'fa-solid fa-shield-halved'),
    new SectionInfo('price',        PriceSection,           'Pricing',      'fa-solid fa-tags'),
    new SectionInfo('faq',          FaqSection,             'Q&A',          'fa-solid fa-question-circle'),
    new SectionInfo('founder',      FounderSection,         'Founder',      'fa-solid fa-user-pen'),
]

const navLinks = [
    new NavLink('login', 'Login', 'https://my.duotail.com', 'fa-solid fa-user'),
    new NavLink('docs', 'Documentation', 'https://docs.duotail.com', 'fa-solid fa-book'),
    new NavLink('waterwheel', 'Waterwheel', 'https://waterwheel.duotail.com', 'fa-solid fa-water'),
    new NavLink('register', 'Register', 'https://my.duotail.com/register', 'fa-solid fa-user-plus'),
]

</script>
