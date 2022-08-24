<template>
    <Dialog :title="title" :subtitle="subtitle" :visible="visible" @click:dialogVisibleToggle="(bool) => $emit('click:dialogVisibleToggle', bool)">
        <!-- 레이어팝선택UI:S -->
        <div class="jbChkLavwArea">
            <template v-if="isDialogHeader">
                <slot name="dialogHeader" />
            </template>
            <div class="jbcRowsCont" v-if="isDialogContent">
                <div class="jbcColLt">
                    <div class="jbcInConte">
                        <div class="ltsLst">
                            <!-- foreach:S -->
                            <div class="tpw" v-for="({ name }, index) in selectLists" :key="index">
                                <button type="button" :class="`dic_bt ${index === 0 && 'active'}`">
                                    <!-- 활성화:active -->
                                    <span class="d_intx">{{ name }}</span>
                                </button>
                            </div>
                            <!-- foreach:E -->
                        </div>
                    </div>
                </div>
                <div class="jbcColRt">
                    <div class="jbcInConte bordernone">
                        <div v-for="(item, index) in selectLists" :key="index">
                            <div class="ltsTits">ㆍ{{ item.name }}</div>
                            <div class="ltsLst">
                                <!-- foreach:S -->
                                <div class="tpw" v-for="(_item, i) in item.data" :key="i">
                                    <!-- 
										근무조건>근무지역에서 아래처럼 컴포넌트를 호출하면 굉장히 느림. 
										컴포넌트가 아닌 html노드를 호출하면 해결됨 이유는 뭐지? 단순히 데이타양이 많아서???
										- 글로벌 컴포넌트로 등록해서 사용해도 느림
										- 로컬 컴포넌트 직접입력 compns:{test:{template:'test'}} 해도 느림
										- chk 컴포넌트에서 아무것도 리턴안해도 느림
									-->
                                    <!-- <Checkbox
                                        id=""
                                        :name="_item.name"
                                        :model-value="_item.code"
                                        :checked="selectedLists.find(({ code }) => code === _item.code)"
                                        @change="$emit('update:selectedbind', $event)"
                                        >{{ _item.name }}</Checkbox
                                    > -->
                                    <div :class="`jbForm sm`">
                                        <label>
                                            <input
                                                type="checkbox"
                                                :name="_item.name"
                                                :value="_item.code"
												:data-label="_item.label"
                                                :checked="selectedLists.find(({ code }) => code === _item.code)"
                                                @change="$emit('update:selectedbind', $event)"
                                            />
                                            <span class="lb">{{ _item.name }}</span>
                                        </label>
                                    </div>
                                </div>
                                <!-- foreach:E -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="jbcRowsRest" v-if="isDialogFooter">
                <div class="jbresInner">
                    <div class="rexwConte" v-if="!$slots.isFooterTemplate">
                        <!-- 선택된영역이있을때:S -->
                        <div class="fbOriStvsArea" v-if="Object.keys(vSelectedLists).length">
                            <!-- foreach:S -->
                                <FormSelected v-for="({ code, name, label, ...props }, index) in vSelectedLists" :key="index" :value="code" :name="name" @update:click="$emit('update:selecteddelete', $event)">{{
                                    label ? label+name : name
                                }}</FormSelected>
                            <!-- foreach:E -->
                        </div>
                        <!-- 선택된영역이있을때:E -->
                        <!-- 선택된영역이없을때:S -->
                        <FormNullmsg v-else>{{ `선택한 항목이 없습니다.` }}</FormNullmsg>
                        <!-- 선택된영역이없을때:E -->
                    </div>
                    <div class="rexwConte" v-else>
                        <slot name="isFooterTemplate"/>
                    </div>
                    <div class="rexwBte">
                        <button type="button" class="jbbtns sm gray" @click="$emit('click:selectedInitializeButton', $event)">
                            <span class="intxtsw">초기화</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- 레이어팝선택UI:E -->
    </Dialog>
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
            default: false,
        },
        selectLists: {
            type: [Array, Object],
            default: () => [],
        },
        selectedLists: {
            type: [Array, Object],
            default: () => [],
        },
        isDialogHeader: {
            type: Boolean,
            default: false,
        },
        isDialogContent: {
            type: Boolean,
            default: true,
        },
        isDialogFooter: {
            type: Boolean,
            default: true,
        },
        limitSelectedLength: 0,
    },
    data() {
        return {
            addSelectedLists: [],
        };
    },
    computed: {
        vSelectedLists() {
            if (!this.addSelectedLists.length) {
                return this.selectedLists;
            } else {
                return [...this.selectedLists, ...this.addSelectedLists];
            }
        },
    },
};
</script>