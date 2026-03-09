<template>
    <article class="duotail-system-feature-card h-100">
        <div class="duotail-system-feature-card-body">
            <div class="duotail-system-feature-card-heading">
                <span class="duotail-system-feature-card-icon"
                      aria-hidden="true">
                    <i :class="props.icon"/>
                </span>

                <h4 class="duotail-system-feature-card-title mb-0"
                    v-html="parsedTitle"/>
            </div>

            <p class="duotail-system-feature-card-detail mb-0"
               v-html="parsedDetail"/>
        </div>
    </article>
</template>

<script setup>
import { computed } from "vue"
import { useUtils } from "/src/composables/utils.js"

const utils = useUtils()

const props = defineProps({
    title: String,
    icon: String,
    detail: String
})

const parsedTitle = computed(() => {
    return utils.parseCustomText(props.title)
})

const parsedDetail = computed(() => {
    return utils.parseCustomText(props.detail)
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

article.duotail-system-feature-card {
    @include generate-dynamic-styles-with-hash((
        xxxl: (padding: 1.6rem),
        lg:   (padding: 1.35rem),
        md:   (padding: 1.25rem),
        sm:   (padding: 1.1rem),
    ));

    position: relative;
    display: flex;
    min-height: 100%;
    border-radius: 24px;
    border: 1px solid rgba($dark, 0.08);
    background: lighten($primary, 45%);
    box-shadow: 0 18px 40px rgba($dark, 0.08);
    overflow: hidden;
}

article.duotail-system-feature-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: $primary;
}

div.duotail-system-feature-card-body {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
}

div.duotail-system-feature-card-heading {
    display: flex;
    align-items: flex-start;
    gap: 0.85rem;
}

span.duotail-system-feature-card-icon {
    flex: 0 0 auto;
    width: 3rem;
    height: 3rem;
    border-radius: 1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: rgba($primary, 0.12);
    color: $primary;
    box-shadow: inset 0 0 0 1px rgba($primary, 0.08);

    i {
        font-size: 1.15rem;
    }
}

h4.duotail-system-feature-card-title {
    line-height: 1.25;
    color: $headings-color;
}

p.duotail-system-feature-card-detail {
    color: rgba($dark, 0.76);
    line-height: 1.7;
}

@include media-breakpoint-down(sm) {
    span.duotail-system-feature-card-icon {
        width: 2.75rem;
        height: 2.75rem;
    }
}
</style>