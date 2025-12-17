<template>
    <!-- Navigation -->
    <Navigation logo="images/logo/logo-small.png"
                label="*DuoTail*"/>

    <!-- Content Display -->
    <router-view/>

    <!-- Footer -->
    <Footer>
        <FooterBlock :darken="false"
                     :row="true">
            <FooterColumn title="Credits"
                          faIcon="fa-solid fa-award me-1 d-none d-md-inline"
                          :description="[
                              `<i class='fa-solid fa-champagne-glasses'></i> This website uses Ryan Balieiro's <a href='https://github.com/ryanbalieiro/vue-agency-landing-page-template/' target='_blank'>Foxy - Vue Agency Landing Page</a> template.`,
                              `<i class='fa-solid fa-champagne-glasses'></i> Logo is designed by <a href='https://www.artstation.com/massivewei' target='_blank'>Wei Chen</a>.`,
                          ]"
                          :links="[]"
                          :displayLinksAsButtons="false"/>

            <FooterColumn title="Contact Us"
                          faIcon="fa fa-fax me-2"
                          :description="[
                              `For any support or suggestions, reach out to us at:`,
                              `<i class='fa-regular fa-envelope'></i> Support:&nbsp;<a href='mailto:support@duotail.com'>support@duotail.com</a>`,
                              `<i class='fa-regular fa-envelope'></i> Suggestions:&nbsp;<a href='mailto:contact@duotail.com'>contact@duotail.com</a>`
                          ]"
                          :links="[]"
                          :displayLinksAsButtons="false"/>
        </FooterBlock>

        <FooterBlock :darken="true"
                     :row="false">
            <FooterCopyright holder="duotail.com"
                             url="https://www.duotail.com"
                             />
        </FooterBlock>
    </Footer>
</template>

<script setup>
import Navigation from "/src/vue/components/nav/Navigation.vue"
import Footer from "/src/vue/components/footer/Footer.vue"
import FooterBlock from "/src/vue/components/footer/FooterBlock.vue"
import FooterCopyright from "/src/vue/components/footer/FooterCopyright.vue"
import FooterColumn from "/src/vue/components/footer/FooterColumn.vue"
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";
</style>