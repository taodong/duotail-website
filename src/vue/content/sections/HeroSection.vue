<template>
    <!-- Heading Section -->
    <PageHeader :id="props.id"
                title="Duotail *Secured Email Service*"
                subtitle="Email addresses you can published anywhere without fear of spam or trolls."
                logo-url="images/logo/logo-128x128.png"
                :show-button="true"
                :buttons="[
                    { label: 'Get started — No Cost, No Catch', icon: 'fa-solid fa-arrow-right', url: 'https://my.duotail.com' },
                    { label: 'Find Out More', icon: 'fa-solid fa-search', url: '#faq' }
                ]"
                @click="_onHeaderClick"/>

    <NotificationPopup :notification="notification"
                       @close="_onPopupClose"/>
</template>

<script setup>
import { ref } from "vue"
import PageHeader from "/src/vue/components/layout/PageHeader.vue"
import NotificationPopup from "/src/vue/components/widgets/NotificationPopup.vue"

const props = defineProps({
    id: String,
    extra: Object
})

const notification = ref(null)

const _onHeaderClick = (url) => {
    if (url === 'get-started') {
        notification.value = {
            message: 'Thank you for your interest! The Get Started page is coming soon.',
            level: 'info'
        }
    } else {
        window.open(url, '_blank')
    }
}

const _onPopupClose = () => {
    notification.value = null
}
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";
</style>