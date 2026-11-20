<template>
    <PageSection variant="primary"
                 :id="props.id">
        <PageSectionHeader title="Three steps. *No new mailbox.*"
                           subtitle="Set up in minutes and keep the email app you already love"/>

        <PageSectionContent>
            <article class="duotail-how-it-works">
                <div class="row row-cols-1 row-cols-lg-3 g-4">
                    <div v-for="step in steps"
                         :key="step.title"
                         class="col">
                        <ItemSystemFeature :title="step.title"
                                           :icon="step.icon"
                                           :detail="step.detail"/>
                    </div>
                </div>

                <div v-if="callout"
                     class="duotail-how-it-works-callout">
                    <i :class="callout.icon"
                       aria-hidden="true"/>
                    <div>
                        <p class="duotail-how-it-works-callout-title mb-1">{{ callout.title }}</p>
                        <p class="mb-0" v-html="callout.detail"/>
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
import ItemSystemFeature from "/src/vue/components/articles/items/ItemSystemFeature.vue"
import howItWorksData from "/src/data/how-it-works.json"

const props = defineProps({
    id: String
})

const steps = howItWorksData.steps ?? []
const callout = howItWorksData.callout
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

div.duotail-how-it-works-callout {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    max-width: 900px;
    margin: 2rem auto 0;
    padding: 1.25rem 1.5rem;
    border-left: 4px solid $primary;
    border-radius: 16px;
    background-color: $background-color;
    box-shadow: 0 18px 40px rgba($dark, 0.08);
    color: $light-7;

    i {
        color: $primary;
        font-size: 1.5rem;
        margin-top: 0.15rem;
    }
}

p.duotail-how-it-works-callout-title {
    font-weight: 700;
    color: $dark;
}
</style>
