<template>
    <!-- 선택툴팁영역:S -->
    <div class="jbChikTotiArea">
        <div class="jbcGlInners">
            <div class="jbcHdAec">
                <div class="colst w5" v-for="(name, i) in titleName" :key="i">
                    <div class="intxs">
                        <span class="int">{{ name }}</span>
                    </div>
                </div>
            </div>
            <div class="jbcCtAec">
                <div class="colst w5">
                    <div class="jbcDepArea">
                        <!-- foreach:S -->
                        <slot name="slot-jc" />
                        <!-- foreach:E -->
                    </div>
                </div>
                <div class="colst w5">
                    <div class="jbcDepArea">
                        <!-- foreach:S -->
                        <slot name="slot-jg" />
                        <!-- foreach:E -->
                    </div>
                </div>
            </div>
            <div class="jbcBtAec">
                <div class="btwGrs">
                    <button class="jbbtns md outline" @click="visibleToggle">
                        <span class="intxtsw">취소</span>
                    </button>
                    <button class="jbbtns md" @click="visibleToggle">
                        <span class="intxtsw">확인</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- 선택툴팁영역:E -->
</template>

<script>
export default {
    props: ["titleName"],
    components: {},
    created() {},
    methods: {
        visibleToggle() {
            this.$emit("click:visibleToggle");
        },
    },
};
</script>

<style>

</style>