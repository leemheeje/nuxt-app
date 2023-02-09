
<template>
    <span>
        <input :id="id" v-model="localValue" type="checkbox" @change="onChange"/>
        <label :for="id">
            <span class="lb"><slot /></span>
        </label>
        <!-- <input type="checkbox" :id="id" :name="name || dataName" :value="value" @input="$emit('update:change', $event)" v-bind="$attrs" /> -->
        <!-- <input type="checkbox" :id="id" :name="name||dataName" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" v-bind="$attrs" /> -->
    </span>
</template>

<script>
export default {
    // inheritAttrs: false,
    // computed: {
    //     model: {
    //         get() {
    //             return this.value;
    //         },
    //         set(value) {
    //             this.$emit("input", value);
    //         },
    //     },
    // },
	model: {
		prop:'value',
		event: 'change'
	},
	data(){
		return{
			localValue:false
		}
	},
    props: {
        addSelectButton: {
            //선택Components 에서 "자주사용하는..." 사용UI props
            type: Boolean,
            default: false,
        },
        cssClass: "",
        modelValue: {},
        value: '',
        id: {},
        name: {},
        dataName: {},
        size: {
            type: String,
            default: "sm",
        },
    },
	methods:{
		onChange(e){
			//this.$emit('change', this.localValue)
			console.log(this.localValue);
		}
	},
};
</script>