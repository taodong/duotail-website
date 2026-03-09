<template>
    <PageSection :id="props.id">
        <PageSectionHeader title="The *System*"
                           subtitle="A permission-based gateway designed for total identity control"/>

        <PageSectionContent>
            <article class="duotail-system-overview">
                <div class="duotail-system-grid d-none d-lg-grid">
                    <ItemSystemFeature v-for="(feature, index) in features"
                                       :key="feature.title"
                                       class="duotail-system-grid-card"
                                       :class="desktopCardClasses[index]"
                                       :title="feature.title"
                                       :icon="feature.icon"
                                       :detail="feature.detail"/>
                </div>

                <swiper
                    class="duotail-system-swiper d-lg-none"
                    :slidesPerView="1.08"
                    :spaceBetween="16"
                    :pagination="{ clickable: true, dynamicBullets: true }"
                    :modules="[Pagination]"
                    :grab-cursor="true"
                    :prevent-clicks-propagation="true"
                    :breakpoints="{
                        576: { slidesPerView: 1.2, spaceBetween: 18 },
                        768: { slidesPerView: 1.5, spaceBetween: 20 }
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
import PageSection from "/src/vue/components/layout/PageSection.vue"
import PageSectionHeader from "/src/vue/components/layout/PageSectionHeader.vue"
import PageSectionContent from "/src/vue/components/layout/PageSectionContent.vue"
import ItemSystemFeature from "/src/vue/components/articles/items/ItemSystemFeature.vue"
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules"
import featureData from "/src/data/feature.json"

const props = defineProps({
    id: String
})

const desktopCardClasses = [
    "system-card-hero",
    "system-card-tall",
    "system-card-top",
    "system-card-bottom",
    "system-card-wide"
]

const features = featureData.features ?? []
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

div.duotail-system-grid {
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
    background:
        radial-gradient(circle at top right, rgba($primary, 0.24), transparent 40%),
        linear-gradient(160deg, rgba($white, 1) 0%, rgba(lighten($primary, 42%), 0.94) 100%);
}

.system-card-tall {
    grid-area: tall;
    background:
        radial-gradient(circle at bottom left, rgba($primary, 0.18), transparent 46%),
        linear-gradient(180deg, rgba($white, 1) 0%, rgba(lighten($primary, 46%), 0.92) 100%);
}

.system-card-top {
    grid-area: top;
}

.system-card-bottom {
    grid-area: bottom;
    background:
        radial-gradient(circle at top left, rgba($primary, 0.14), transparent 38%),
        linear-gradient(180deg, rgba($white, 1) 0%, rgba(lighten($primary, 47%), 0.88) 100%);
}

.system-card-wide {
    grid-area: wide;
    background:
        radial-gradient(circle at left center, rgba($primary, 0.18), transparent 42%),
        linear-gradient(135deg, rgba($white, 1) 0%, rgba(lighten($primary, 44%), 0.9) 100%);
}

.system-card-hero :deep(.duotail-system-feature-card-title),
.system-card-wide :deep(.duotail-system-feature-card-title) {
    font-size: 1.55rem;
}

.duotail-system-swiper {
    overflow: visible;
    padding: 0.25rem 0.15rem 2.75rem;
}

.duotail-system-mobile-card {
    min-height: 100%;
}

.duotail-system-swiper :deep(.swiper-slide) {
    height: auto;
    padding-bottom: 0.5rem;
}

.duotail-system-swiper :deep(.swiper-pagination) {
    bottom: 0;
}

.duotail-system-swiper :deep(.swiper-pagination-bullet) {
    background: rgba($primary, 0.35);
    opacity: 1;
}

.duotail-system-swiper :deep(.swiper-pagination-bullet-active) {
    background: $primary;
}

@include media-breakpoint-down(xl) {
    .system-card-hero :deep(.duotail-system-feature-card-title),
    .system-card-wide :deep(.duotail-system-feature-card-title) {
        font-size: 1.35rem;
    }
}
</style>