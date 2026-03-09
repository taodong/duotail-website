<template>
    <PageSection :id="props.id">
        <PageSectionHeader title="The *System*"
                           subtitle="A permission-based gateway designed for total identity control"/>

        <PageSectionContent>
            <article class="duotail-system-overview">
                <div v-if="isDesktopLayout"
                     class="duotail-system-grid">
                    <ItemSystemFeature v-for="(feature, index) in features"
                                       :key="feature.title"
                                       class="duotail-system-grid-card"
                                       :class="desktopCardClasses[index]"
                                       :title="feature.title"
                                       :icon="feature.icon"
                                       :detail="feature.detail"/>
                </div>

                <swiper v-else
                        class="duotail-system-swiper px-1"
                        :slidesPerView="1"
                        :spaceBetween="20"
                        :pagination="{clickable: true}"
                        :modules="[Pagination]"
                        :grab-cursor="true"
                        :prevent-clicks-propagation="true"
                        :breakpoints="{
                            0:   {slidesPerView: 1},
                            768: {slidesPerView: 2}
                        }">
                    <swiper-slide v-for="feature in features"
                                  :key="`${feature.title}-mobile`">
                        <ItemSystemFeature class="duotail-system-mobile-card"
                                           :title="feature.title"
                                           :icon="feature.icon"
                                           :detail="feature.detail"/>
                    </swiper-slide>
                </swiper>
            </article>
        </PageSectionContent>
    </PageSection>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue"
import PageSection from "/src/vue/components/layout/PageSection.vue"
import PageSectionHeader from "/src/vue/components/layout/PageSectionHeader.vue"
import PageSectionContent from "/src/vue/components/layout/PageSectionContent.vue"
import ItemSystemFeature from "/src/vue/components/articles/items/ItemSystemFeature.vue"
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules"
import { useUtils } from "/src/composables/utils.js"
import featureData from "/src/data/feature.json"

const utils = useUtils()

const props = defineProps({
    id: String
})

const viewportWidth = ref(typeof window !== "undefined" ? window.innerWidth : utils.BOOTSTRAP_BREAKPOINTS.lg)

const desktopCardClasses = [
    "system-card-hero",
    "system-card-tall",
    "system-card-top",
    "system-card-bottom",
    "system-card-wide"
]

const features = featureData.features ?? []

const isDesktopLayout = computed(() => {
    return viewportWidth.value >= utils.BOOTSTRAP_BREAKPOINTS.lg
})

const _onWindowResize = () => {
    viewportWidth.value = window.innerWidth
}

onMounted(() => {
    window.addEventListener("resize", _onWindowResize)
    _onWindowResize()
})

onUnmounted(() => {
    window.removeEventListener("resize", _onWindowResize)
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

div.duotail-system-grid {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    grid-template-areas:
        "hero hero hero hero hero hero tall tall tall top top top"
        "hero hero hero hero hero hero tall tall tall bottom bottom bottom"
        "wide wide wide wide wide wide tall tall tall bottom bottom bottom";
    grid-template-rows: repeat(3, minmax(150px, auto));
    grid-auto-flow: dense;
    gap: 1rem;
    align-items: stretch;

    @include media-breakpoint-down(xl) {
        grid-template-rows: repeat(3, minmax(170px, auto));
    }
}

.duotail-system-grid-card {
    min-height: 100%;
}

.system-card-hero,
.system-card-wide {
    box-shadow: 0 24px 55px rgba($dark, 0.12);
}

.system-card-hero {
    grid-area: hero;
    background: lighten($primary, 45%);
}

.system-card-tall {
    grid-area: tall;
    background: lighten($primary, 45%);
}

.system-card-top {
    grid-area: top;
}

.system-card-bottom {
    grid-area: bottom;
    background: lighten($primary, 45%);
}

.system-card-wide {
    grid-area: wide;
    background: lighten($primary, 45%);
}

.system-card-hero :deep(.duotail-system-feature-card-title),
.system-card-wide :deep(.duotail-system-feature-card-title) {
    font-size: 1.55rem;
}

.duotail-system-mobile-card {
    min-height: 100%;
}

.swiper {
    height: 100%;

    .swiper-slide {
        margin-bottom: 40px;
        height: auto!important;
    }
}

@include media-breakpoint-down(xl) {
    .system-card-hero :deep(.duotail-system-feature-card-title),
    .system-card-wide :deep(.duotail-system-feature-card-title) {
        font-size: 1.35rem;
    }
}
</style>