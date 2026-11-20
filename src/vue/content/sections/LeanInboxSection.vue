<template>
    <PageSection :id="props.id">
        <PageSectionHeader title="One inbox. *Never out of control.*"
                           subtitle="You don't need seven Gmail accounts. You need one inbox that only gets the mail you want."/>

        <PageSectionContent>
            <article class="duotail-lean-inbox">
                <div class="row row-cols-1 row-cols-lg-2 g-4">
                    <div class="col">
                        <ItemSystemFeature class="duotail-lean-inbox-without"
                                           :title="data.without.title"
                                           :icon="data.without.icon"
                                           :detail="toRows(data.without.items, 'fa-solid fa-xmark duotail-lean-inbox-x')"/>
                    </div>
                    <div class="col">
                        <ItemSystemFeature :title="data.with.title"
                                           :icon="data.with.icon"
                                           :detail="toRows(data.with.items, 'fa-solid fa-check text-primary')"/>
                    </div>
                </div>
                <p class="duotail-lean-inbox-closing text-center mt-4 mb-0">
                    {{ data.closing }}
                </p>
            </article>
        </PageSectionContent>
    </PageSection>
</template>

<script setup>
import PageSection from "/src/vue/components/layout/PageSection.vue"
import PageSectionHeader from "/src/vue/components/layout/PageSectionHeader.vue"
import PageSectionContent from "/src/vue/components/layout/PageSectionContent.vue"
import ItemSystemFeature from "/src/vue/components/articles/items/ItemSystemFeature.vue"
import data from "/src/data/lean-inbox.json"

const props = defineProps({
    id: String
})

// ItemSystemFeature renders detail inside a <p>, so rows use inline-level <span>s.
const toRows = (items, iconClass) => items
    .map(item => `<span class="d-flex gap-2 mb-2"><i class="${iconClass} mt-1"></i><span>${item}</span></span>`)
    .join("")
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.duotail-lean-inbox-without {
    background: $background-color;

    &::before {
        background: $light-5 !important;
    }

    :deep(.duotail-system-feature-card-icon) {
        background-color: rgba($dark, 0.06);
        color: $light-7;
    }

    :deep(.duotail-lean-inbox-x) {
        color: $light-6;
    }
}

p.duotail-lean-inbox-closing {
    font-style: italic;
    color: $light-7;
}
</style>
