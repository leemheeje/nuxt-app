<template>
    <!-- 팝업UI:S -->
    <div class="dialogJobPostArea" v-if="visible">
        <div class="dimm" @click="visibleToggle"></div>
        <div class="djGiContents">
            <div class="djGiInners">
                <div class="djHedAre">
                    <div class="dintx">
                        <span class="inw"
                            >{{ title }}<small class="sm">{{ subtitle }}</small></span
                        >
                    </div>
                </div>
                <div class="djConAre">
                    <slot />
                </div>
                <div class="djFotAre">
                    <div class="btwGrp">
                        <button type="button" class="jbbtns md outline" @click="visibleToggle">
                            <span class="intxtsw">취소</span>
                        </button>
                        <button type="button" class="jbbtns md" @click="visibleToggle">
                            <span class="intxtsw">확인</span>
                        </button>
                        <button tyep="button" class="diClse" title="팝업닫기" @click="visibleToggle"></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 팝업UI:E -->
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "타이틀",
        },
        subtitle: {
            type: String,
            default: "",
        },
        visible: {
            type: Boolean,
            deafult: false,
        },
    },
    methods: {
        visibleToggle() {
            this.$emit("click:dialogVisibleToggle", this.visible ? false : true);
        },
    },
};
</script>

<style>

</style>