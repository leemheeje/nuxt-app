<template>
    <div :class="`jbForm ${isInlabel}`">
        <input
            :type="type || 'text'"
            :id="id"
            :class="cssClass"
            :placeholder="placeholder"
            :name="name"
            :value="value"
            @input="$emit('update:input', $event)"
            v-bind="$attrs"
        />
        <slot name="inl" />
    </div>
</template>

<script>
//model-value="inint value" , @update:model-value="test" attrs 넘겨받기(v-model 등 기타 내장객체 사용목적)
export default {
    props: ["modelValue", "type", "placeholder", "name", "id", "cssClass","value"],
    computed: {
        isInlabel() {
            return this.$slots.inl ? "inlabel" : "";
        },
    },
    inheritAttrs: false,
    created() {},
};
</script>