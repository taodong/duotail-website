<template>
    <div class="navigation">
        <!-- In-page Navigation -->
        <InPageNavbar v-if="shouldDisplayInPageNavBar"
                      :logo="logo"
                      :label="label"/>

        <!-- Router Navigation -->
        <RouteNavbar v-else
                     :logo="logo"
                     :label="label"/>
    </div>
</template>

<script setup>
import {useRoute, useRouter} from "vue-router"
import {computed} from "vue"
import RouteNavbar from "/src/vue/components/nav/navbar-wrappers/RouteNavbar.vue"
import InPageNavbar from "/src/vue/components/nav/navbar-wrappers/InPageNavbar.vue"

const route = useRoute()
const router = useRouter()


defineProps({
    logo: String,
    label: String
})

const shouldDisplayInPageNavBar = computed(() => {
    const routeInfo = router.getRoutes().find(r => r.name === route.name)
    if(!routeInfo || !routeInfo.props || !routeInfo.props.default)
        return true

    return routeInfo.props.default['inPageNavbar']
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";
</style>