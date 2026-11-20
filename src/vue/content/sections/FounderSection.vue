<template>
    <PageSection variant="primary"
                 :id="props.id">
        <PageSectionHeader title="Who is *behind* Duotail"
                           subtitle="Built by a dad, for the next generation"/>

        <PageSectionContent>
            <article class="duotail-founder">
                <div class="duotail-founder-card">
                    <p v-for="(paragraph, index) in founder.paragraphs"
                       :key="index"
                       class="duotail-founder-text"
                       v-html="paragraph"/>

                    <div class="duotail-founder-email">
                        <i class="fa-solid fa-envelope-circle-check"
                           aria-hidden="true"/>
                        <div>
                            <p class="duotail-founder-email-title mb-1">{{ founder.emailTitle }}</p>
                            <p class="mb-0" v-html="founder.emailNote"/>
                        </div>
                    </div>

                    <div class="duotail-founder-links">
                        <Link v-for="(link, index) in founder.links"
                              :key="link.url"
                              :url="link.url">
                            <XLButton :label="link.label"
                                      :icon="link.icon"
                                      :class="index > 0 ? 'btn-light' : ''"/>
                        </Link>
                    </div>
                </div>
            </article>
        </PageSectionContent>
    </PageSection>
</template>

<script setup>
import PageSection from "/src/vue/components/layout/PageSection.vue"
import PageSectionHeader from "/src/vue/components/layout/PageSectionHeader.vue"
import PageSectionContent from "/src/vue/components/layout/PageSectionContent.vue"
import Link from "/src/vue/components/generic/Link.vue"
import XLButton from "/src/vue/components/widgets/XLButton.vue"
import founder from "/src/data/founder.json"

const props = defineProps({
    id: String
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

div.duotail-founder-card {
    max-width: 820px;
    margin: 0 auto;
    padding: 2rem;
    border-radius: 24px;
    background: lighten($primary, 45%);
    border: 1px solid rgba($dark, 0.08);
    box-shadow: 0 18px 40px rgba($dark, 0.08);

    @include media-breakpoint-down(md) {
        padding: 1.25rem;
    }
}

p.duotail-founder-text {
    color: $light-7;
    margin-bottom: 1rem;
}

div.duotail-founder-email {
    display: flex;
    align-items: flex-start;
    gap: 0.85rem;
    margin: 1.5rem 0;
    padding: 1rem 1.25rem;
    border-left: 4px solid $primary;
    border-radius: 12px;
    background-color: rgba($primary, 0.08);
    color: $light-7;

    i {
        color: $primary;
        font-size: 1.25rem;
        margin-top: 0.15rem;
    }

    p.duotail-founder-email-title {
        font-weight: 700;
        color: $dark;
    }
}

div.duotail-founder-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
}
</style>
