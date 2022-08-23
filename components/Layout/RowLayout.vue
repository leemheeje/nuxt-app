<template>
    <div :class="`jbLayoutLabs ${required ? 'required' : ''}`">
        <div class="jblabs">
            <span class="ints">
                {{ title }}
                <small class="sm" v-if="subtitle">{{ subtitle }}</small>
            </span>
        </div>
        <div class="jbDivs">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        subtitle: String,
        required: Boolean,
    },
};
</script>
