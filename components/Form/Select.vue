<template>
    <div class="jbForm">
        <select :value="value" :id="id" @change="$emit('update:change', $event)" :name="name" v-bind="$attrs">
            <slot />
        </select>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: ["modelValue", "vModel", "value", "name", "id"],
    created() {},
};
</script>
