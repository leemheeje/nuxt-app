<template>
    <div :class="`jbForm ${cssClass}`">
        <label>
            <input type="radio" id="" name="" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" v-bind="$attrs" />
            <span class="lb">{{ label }}</span>
        </label>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        label: "",
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