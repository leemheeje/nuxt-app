<template>
    <div class="asTps">
        <input :id="id" type="checkbox" class="HIDDEN" :name="name" :value="code" :data-label="dataLabel" v-bind="$attrs" />
        <label :for="id" v-html="nameEncKeyword"> </label>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        id: "",
        keyword: {
            type: String,
            default: "",
            required: true,
        },
        name: {
            type: String,
            default: "",
        },
        code: {
            type: String,
            default: "",
        },
        dataLabel: undefined,
    },
    computed: {
        nameEncKeyword() {
            let name = this.name;
            let spnm = name.replace(this.keyword, `<span style="color: red">${this.keyword}</span>`);
            return this.dataLabel ? this.dataLabel + spnm : spnm;
        },
    },
};
</script>

<style>

</style>