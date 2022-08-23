<template>
    <div :class="`jbAutoSearchArea ${cssClass}`">
        <div class="inpArea">
            <input
                type="text"
                :value="modelValue"
                id=""
                name=""
                :placeholder="placeholder"
                @input="$emit('update:modelValue', $event.target.value)"
                @focus="isInputFocus = true"
                @blur="test"
                v-bind="$attrs"
            />
        </div>
        <div class="resArea" v-if="modelValue && isInputFocus">
            <div class="reSinner">
                <!-- 연관검색있을때:S -->
                <slot name="list" />
                <!-- 연관검색있을때:E -->
                <!-- 연관검색없을때:S -->
                <div class="asTps" v-if="!$slots.list.length">
                    <div class="asNutx">연관 검색어가 없습니다</div>
                </div>
                <!-- 연관검색없을때:E -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        placeholder: {
            default: "자격증명을 입력하세요.",
        },
        modelValue: "",
        cssClass: "",
        isInputFocus: false,
    },
    created() {},
    methods: {
        test() {},
    },
};
</script>

<style>

</style>