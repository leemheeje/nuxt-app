<template>
    <div :class="`jbAutoSearchArea ${cssClass}`">
        <div class="inpArea">
            <input
                type="text"
                :value="value"
                id=""
                name=""
                :placeholder="placeholder"
                @input="$emit('update:input', $event)"
                @focus="isInputFocus = true"
                @blur="test"
                v-bind="$attrs"
            />
        </div>
        <div class="resArea" v-if="value && isInputFocus">
            <div class="reSinner">
                <!-- 연관검색있을때:S -->
                <slot name="list" v-if="keywordData.length"/>
                <!-- 연관검색있을때:E -->
                <!-- 연관검색없을때:S -->
                <div class="asTps" v-else>
                    <div class="asNutx">연관 검색어가 없습니다</div>
                </div>
                <!-- <div class="asTps" v-if="!$slots.list.length">
                    <div class="asNutx">연관 검색어가 없습니다</div>
                </div> -->
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
        value: "",
        modelValue: "",
        cssClass: "",
        keywordData: {
			type: [Array, Object],
			default : ()=>[]
		},
    },
	data(){
		return {
			isInputFocus: false,
		}
	},
    created() {},
    methods: {
        test() {
			return new Promise(()=>{
				setTimeout(()=>{
					console.log(this.value);
					this.isInputFocus = false;
				},500);
			})
		},
    },
};
</script>

<style>

</style>