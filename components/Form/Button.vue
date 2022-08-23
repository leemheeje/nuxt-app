<template>
    <button class="jbbtns" v-bind="$attrs" v-if="!target">
        <span class="intxtsw"><slot/></span>
    </button>
    <a class="jbbtns" :target="target" v-bind="$attrs" v-else>
        <span class="intxtsw"><slot/></span>
    </a>
</template>

<script>
export default {
	props:{
		target:undefined
	}
};
</script>
