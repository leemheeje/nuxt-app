<template>
    <div class="jbForm">
        <select :value="modelValue" id="" @change="$emit('update:modelValue', $event.target.value)" name="" v-bind="$attrs">
            <slot />
        </select>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: ["modelValue", "vModel"],
    created() {},
};
</script>
