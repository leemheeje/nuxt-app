<template>
    <div :class="`tpws ${cssClass}`" v-if="addSelectButton">
        <label class="tweb_bt">
            <input type="checkbox" :id="id" :name="name || dataName" :value="value" @input="$emit('update:change', $event)" v-bind="$attrs" />
            <!-- <input type="checkbox" :id="id" :name="name||dataName" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" v-bind="$attrs" /> -->
            <span class="lb">+<slot /></span>
        </label>
    </div>
    <div :class="`jbForm ${size !== 'default' ? size : ''} ${cssClass}`" v-else>
        <label>
            <input type="checkbox" :id="id" :name="name || dataName" :value="value" @input="$emit('update:change', $event)" v-bind="$attrs" />
            <!-- <input type="checkbox" :id="id" :name="name||dataName" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" v-bind="$attrs" /> -->
            <span class="lb"><slot /></span>
        </label>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    computed: {
        model: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
            },
        },
    },
    props: {
        addSelectButton: {
            //선택Components 에서 "자주사용하는..." 사용UI props
            type: Boolean,
            default: false,
        },
        cssClass: "",
        modelValue: {},
        value: {},
        id: {},
        name: {},
        dataName: {},
        size: {
            type: String,
            default: "sm",
        },
    },
};
</script>