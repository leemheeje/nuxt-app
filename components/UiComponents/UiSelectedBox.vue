<template>
    <!-- 선택영역UI:S -->
    <div :class="`jbChicCmArea`">
        <!-- 툴팁 확장시 extend-->
        <div class="tmATInn">
                <!-- 선택된영역이있을때:S -->
                <div class="fbOriStvsArea" v-if="Object.keys(selected).length">
                    <!-- foreach:S -->
                    <FormSelected v-for="({ code, name, label, ...props }, index) in selected" :key="index" :value="code" @update:click="selectBindDelete">{{
                        label ? label + name : name
                    }}</FormSelected>
                    <!-- foreach:E -->
                </div>
                <!-- 선택된영역이있을때:E -->
                <!-- 선택된영역이없을때:S -->
                <FormNullmsg v-else>{{ title }}을(를) 선택해주세요.</FormNullmsg>
                <!-- 선택된영역이없을때:E -->
            <slot name="UiSelectedBox-tooltip" />
        </div>
        <div class="btnwArea">
            <button type="button" class="jbbtns sm" @click="selectBoxBindExtend">
                <span class="intxtsw">전체보기</span>
            </button>
        </div>
        <slot name="UiSelectedBox-favorite" />
        <!-- 점수 입력 영역:S -->
        <div class="jbAddFormArea mdlb MT10" v-if="isJumsuTemplate && Object.keys(jumsuList).length">
            <div class="jbaFormInners">
                <!-- foreach:S -->
                <div class="jbTps" v-for="({ code, name, required, rate, ...props }, index) in jumsuList" :key="index">
                    <div class="jblts">
                        <span class="intx">ㆍ{{ name }}</span>
                    </div>
                    <div class="jbcots">
                        <LayoutRow class="FLEX ALIGN_ITEM_CENTER">
                            <LayoutCol class="col00" style="width: 200px">
                                <FormInput :name="code" :value="rate" type="number" placeholder="점수입력" @update:input="(e) => $emit('update:modelValue', e)" />
                            </LayoutCol>
                            <LayoutCol class="col00">
                                <span class="jbStatText MR45">급(점) 이상</span>
                            </LayoutCol>
                            <LayoutCol class="col00">
                                <FormRadioGroup>
                                    <FormRadio :name="`reqRdo_${code}`" :defaultChecked="required" label="필수" />
                                    <div style="width: 10px"></div>
                                    <FormRadio :name="`reqRdo_${code}`" :defaultChecked="!required" label="우대" />
                                </FormRadioGroup>
                            </LayoutCol>
                            <LayoutCol class="col00">
                                <button class="jbls_de" :value="code" :name="name" title="삭제" @click="$emit('click:jumsuListDelete', $event)"></button>
                            </LayoutCol>
                        </LayoutRow>
                    </div>
                </div>
                <!-- foreach:E -->
            </div>
        </div>
        <!-- 점수 입력 영역:E -->
    </div>
    <!-- 선택영역UI:E -->
</template>

<script>
import Select from '../Form/Select.vue';
export default {
    props: {
        title: {
            type: String,
            default: "타이틀",
        },
        selected: {
            type: Array,
            default: () => [],
        },
        isJumsuTemplate: false,
        jumsuList: {
            type: Array,
            default: () => [],
        },
    },
    computed: {},
    created() { },
    methods: {
        selectBoxBindExtend() {
            this.$emit("click:afRightButtonBind");
        },
        selectBindDelete(event) {
            this.$emit("update:selectBindDelete", event);
        },
    },
    components: { Select }
};
</script>
