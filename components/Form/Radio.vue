<template>
    <div :class="`jbForm ${cssClass}`">
        <label>
            <input type="radio" id="" name="" :value="value" @change="$emit('update:change', $event)" v-bind="$attrs" />
            <span class="lb">{{ label }}</span>
        </label>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        label: "",
        value: "",
        modelValue: {},
        cssClass: {
            type: String,
            default: "",
        },
    },
};
</script>

<style>

</style>