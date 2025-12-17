<template>
    <div class="duotail-footer-col col-12 col-lg-6">
        <!-- Column Title -->
        <h5 class="duotail-footer-col-title">
            <i v-if="props.faIcon"
               :class="props.faIcon"/>

            <span>{{props.title}}</span>
        </h5>

        <!-- Description -->
        <div v-if="props.description.length > 0"
             class="duotail-footer-col-item">
            <div class="duotail-footer-col-description">
                <p v-for="(descriptionItem, index) in props.description" :key="index" class="text-2 m-0" v-html="descriptionItem"/>
            </div>
        </div>

        <!-- Circle Links -->
        <div v-if="props.links.length > 0 && props.displayLinksAsButtons"
             class="duotail-footer-col-item mt-3">
            <SocialLinks :items="props.links"
                         variant="dark"
                         size="3"/>
        </div>

        <!-- Inline Links -->
        <div v-if="props.links.length > 0 && !props.displayLinksAsButtons"
             class="duotail-footer-col-item mt-2 mt-lg-1">
            <InlineLinkList :items="props.links"/>
        </div>
    </div>
</template>

<script setup>
import SocialLinks from "/src/vue/components/widgets/SocialLinks.vue"
import InlineLinkList from "/src/vue/components/widgets/InlineLinkList.vue"

const props = defineProps(({
    title: String,
    faIcon: String,
    description: Array,
    links: Array,
    displayLinksAsButtons: Boolean
}))
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

p, span {
    color: $light-5;
}

div.duotail-footer-col {
    @include media-breakpoint-down(lg) {
        padding-top: 1.5rem;
        padding-bottom: 2rem;

        &:first-child {
            padding-top: 0;
        }

        &:not(:first-child) {
            border-top: 1px solid lighten($dark, 3%);
        }

        &:last-child {
            padding-bottom: 0;
        }
    }
}

h5.duotail-footer-col-title {
    i, span {
        color: $light-1;
        text-transform: uppercase;
    }
}

div.duotail-footer-col-item {
    @include generate-dynamic-styles-with-hash((
        xxxl: (padding-top:0.5rem),
        lg: (padding-top:0.3rem),
    ));

    margin: 0 auto;
    max-width: 380px;
    width: 100%; // Ensure items take full width
}

// Only center content for SocialLinks and InlineLinkList if needed
// You can add a class or use a deep selector if necessary, e.g.:
.duotail-footer-col-item :deep(.social-links),
.duotail-footer-col-item :deep(.inline-link-list) {
    display: flex;
    align-items: center;
    justify-content: center;
}

div.duotail-footer-col-description {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;

    p {
        text-align: left;
        width: 100%;
        text-transform: none !important;
    }
}
</style>