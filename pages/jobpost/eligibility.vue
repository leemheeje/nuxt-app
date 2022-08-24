<template>
    <!-- 지원자격:S -->
    <div class="jbCBoxing" data-fullpage="1">
        <div class="jbTits">지원자격</div>
        <div class="jbSTits">지원자격은 어떻게 되나요?</div>

        <!-- 학력:S -->
        <LayoutRowLayout title="학력">
            <LayoutRow class="FLEX">
                <LayoutCol class="col35">
                    <FormSelect :value="ziwon_hckGubun" @update:change="(e) => SET_ZIWON_EDUCATION_SELECT(e.target.value)">
                        <option value="">학력선택</option>
                        <option value="0">학력무관</option>
                        <option value="6">고등학교 미만 졸업</option>
                        <option value="1">고등학교 졸업</option>
                        <option value="2">대학(2,3)년 졸업</option>
                        <option value="3">대학교(4년) 졸업</option>
                        <option value="4">대학원 (석사수료)</option>
                        <option value="5">대학원 (박사수료)</option>
                    </FormSelect>
                </LayoutCol>
                <LayoutCol class="col00" style="width: 350px">
                    <FormInput placeholder="(선택) 기타 학력사항" :value="ziwon_hckGubun_input" @update:input="(e) => SET_ZIWON_EDUCATION_INPUT(e.target.value)" />
                </LayoutCol>
                <LayoutCol class="col00 ML15 FLEX ALIGN_ITEM_CENTER">
                    <FormCheckbox size="lg" :checked="ziwon_hckGubun_check" @update:change="(e) => SET_ZIWON_EDUCATION_CHECK(e.target.checked)">졸업예정자 가능</FormCheckbox>
                </LayoutCol>
            </LayoutRow>
        </LayoutRowLayout>
        <!-- 학력:E -->
        <!-- 외국어:S -->
        <LayoutRowLayout title="외국어" :subtitle="`(${ziwon_langage_selected.length}/6)`" class="MT30">
            <UiSelectedBox
                title="외국어"
                :selected="ziwon_langage_selected"
                @click:afRightButtonBind="isLangageDialogVisible = true"
                @update:selectBindDelete="
                    (e) =>
                        SET_JOBPOST_UNSELETED({
                            code: e.target.value,
                            selected: 'ziwon_langage_selected',
                        })
                "
                :isJumsuTemplate="true"
                :jumsuList="ziwon_langage_selected"
                @click:jumsuListDelete="
                    (e) =>
                        SET_JOBPOST_UNSELETED({
                            code: e.target.value,
                            selected: 'ziwon_langage_selected',
                        })
                "
            >
                <template v-slot:UiSelectedBox-favorite>
                    <UiSelectedBoxFavorite title="외국어">
                        <template v-slot:slot-favorite>
                            <FormCheckbox
                                v-for="(item, index) in langageFavorite"
                                :key="index"
                                :addSelectButton="true"
                                :name="item.name"
                                :value="item.code"
                                :checked="ziwon_langage_selected.find(({ code }) => code === item.code)"
                                @update:change="lanagebind"
                                >{{ item.name }}</FormCheckbox
                            >
                        </template>
                    </UiSelectedBoxFavorite>
                </template>
            </UiSelectedBox>
            <template v-if="langage">
                <UiSelectedBoxDialog
                    title="외국어"
                    subtitle="최대 6개까지 선택 가능"
                    :selectLists="langage"
                    :selectedLists="ziwon_langage_selected"
                    :visible="isLangageDialogVisible"
                    @click:selectedInitializeButton="ziwon_langage_selected = []"
                    @click:dialogVisibleToggle="(isVisible) => (isLangageDialogVisible = isVisible)"
                    @update:selectedbind="lanagebind"
                    @update:selecteddelete="
                        (e) =>
                            SET_JOBPOST_UNSELETED({
                                code: e.target.value,
                                selected: 'ziwon_langage_selected',
                            })
                    "
                />
            </template>
        </LayoutRowLayout>
        <!-- 외국어:E -->

        <!-- 자격증:S -->
        <LayoutRowLayout title="자격증" :subtitle="`(${ziwon_license_selected.length}/3)`" class="MT30">
            <UiSelectedBox
                title="자격증"
                :selected="ziwon_license_selected"
                @click:afRightButtonBind="isLicenseDialogVisible = true"
                @update:selectBindDelete="
                    (e) =>
                        SET_JOBPOST_UNSELETED({
                            code: e.target.value,
                            selected: 'ziwon_license_selected',
                        })
                "
            >
                <template v-slot:UiSelectedBox-favorite>
                    <UiSelectedBoxFavorite title="자격증">
                        <template v-slot:slot-favorite>
                            <FormCheckbox
                                v-for="(item, index) in licenseFavorite"
                                :key="index"
                                :addSelectButton="true"
                                :name="item.name"
                                :value="item.code"
                                :checked="ziwon_license_selected.find(({ code }) => code === item.code)"
                                @update:change="licensebind"
                                >{{ item.name }}</FormCheckbox
                            >
                        </template>
                    </UiSelectedBoxFavorite>
                </template>
            </UiSelectedBox>
            <template v-if="license">
                <UiSelectedBoxDialog
                    title="자격증"
                    subtitle="최대 3개까지 선택 가능"
                    :selectLists="license"
                    :selectedLists="ziwon_license_selected"
                    :visible="isLicenseDialogVisible"
                    :isDialogHeader="true"
                    :isDialogContent="false"
                    @click:selectedInitializeButton="ziwon_license_selected = []"
                    @click:dialogVisibleToggle="(isVisible) => (isLicenseDialogVisible = isVisible)"
                    @update:selectedbind="licensebind"
                    @update:selecteddelete="
                        (e) =>
                            SET_JOBPOST_UNSELETED({
                                code: e.target.value,
                                selected: 'ziwon_license_selected',
                            })
                    "
                >
                    <template v-slot:dialogHeader>
                        <SearchBar placeholder="자격증명을 입력하세요." :keyword-data="keywordData" :value="keyword" @update:input="fnKeyword">
                            <template v-slot:list>
                                <SearchBarListItems
                                    v-for="(item, index) in keywordData"
                                    :key="index"
                                    :id="`chk_${item.code}_${index}`"
                                    :name="item.name"
                                    :keyword="keyword"
                                    :code="item.code"
                                    @update:change="licensebind"
                                />
                            </template>
                        </SearchBar>
                    </template>
                </UiSelectedBoxDialog>
            </template>
        </LayoutRowLayout>
        <!-- 자격증:E -->

        <!-- 우대전공:S -->
        <LayoutRowLayout title="우대전공" :subtitle="`(${ziwon_woodaeuni_selected.length}/6)`" class="MT30">
            <UiSelectedBox
                title="우대전공"
                :selected="ziwon_woodaeuni_selected"
                @click:afRightButtonBind="isWoodaeUniDialogVisible = true"
                @update:selectBindDelete="
                    (e) =>
                        SET_JOBPOST_UNSELETED({
                            code: e.target.value,
                            selected: 'ziwon_woodaeuni_selected',
                        })
                "
            >
                <template v-slot:UiSelectedBox-favorite>
                    <UiSelectedBoxFavorite>
                        <template v-slot:slot-favorite>
                            <FormCheckbox
                                v-for="(item, index) in woodaeUniFavorite"
                                :key="index"
                                :addSelectButton="true"
                                :name="item.name"
                                :value="item.code"
                                :checked="ziwon_woodaeuni_selected.find(({ code }) => item.code === code)"
                                @update:change="woodaeUnibind"
                                >{{ item.name }}</FormCheckbox
                            >
                        </template>
                    </UiSelectedBoxFavorite>
                </template>
            </UiSelectedBox>
            <UiSelectedBoxDialog
                title="우대전공"
                subtitle="6개까지 입력 가능"
                :visible="isWoodaeUniDialogVisible"
                :selectLists="woodaeUni"
                :selectedLists="ziwon_woodaeuni_selected"
                @click:dialogVisibleToggle="isWoodaeUniDialogVisible = false"
                @click:selectedInitializeButton="ziwon_woodaeuni_selected = []"
                @update:selectedbind="woodaeUnibind"
                @update:selecteddelete="
                    (e) =>
                        SET_JOBPOST_UNSELETED({
                            code: e.target.value,
                            selected: 'ziwon_woodaeuni_selected',
                        })
                "
            />
        </LayoutRowLayout>
        <!-- 우대전공:E -->

        <!-- 성별제한:S -->
        <LayoutRowLayout title="성별제한" class="MT30">
            <LayoutRow class="FLEX ALIGN_ITEM_CENTER JUSTIFY_ITEM_CENTER">
                <LayoutCol class="col00 MT10" style="margin-right: auto">
                    <FormRadioGroup>
                        <FormRadio
                            v-for="(item, index) in ziwonJenderArray"
                            :key="index"
                            :label="item.label"
                            :value="item.value"
                            :checked="ziwon_jender == item.value"
                            @update:change="(e) => SET_ZIWON_JENDER(e.target.value)"
                            cssClass="MR20"
                            name="jender_gubun"
                        />
                    </FormRadioGroup>
                </LayoutCol>
                <LayoutCol class="col00" style="margin-left: auto">
                    <div class="jbAntoTxts TXTR">
                        <span class="lbwx">성차별금지 - </span>
                        <button class="antx" @click="ediDialogVisible001 = true">남녀고용평등에 관한 법률보기</button>
                    </div>
                    <Dialog title="성차별법금지 주요내용" :visible="ediDialogVisible001" @click:dialogVisibleToggle="ediDialogVisible001 = false" v-if="ediDialogVisible001">
                        <div class="jbInfos tp2 MT10">
                            <div class="inf_tx noindent">
                                모집.채용에서 남녀를 차별하거나, 여성근로자를 채용할 때 직무 수행이 불필요한 용모, 키, 체중등의 신체조건, 미혼조건을 제시 또는 요구하는 경우
                                남녀고용평등과 일·가정 양립 지원에 관한 법률 위반에 따른
                                <span class="cb">500만원 이하의 벌금</span>이 부과될 수 있습니다.
                            </div>
                        </div>
                        <div class="djCnTbl tleft MT25">
                            <table>
                                <colgroup>
                                    <col width="150px" />
                                    <col width="auto" />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th>관련법령</th>
                                        <td>
                                            <div class="jbInfos tp2">
                                                <div class="inf_tx noindent">
                                                    남녀고용평등과 일·가정 양립 지원에 관한 법률 제7조 1항에 의거 근로자를 모집하거나 채용 시 합리적인 이유없이 남녀를 차별할 수
                                                    없음<br />
                                                    <span class="cb">&lt;차별 시 500만원 이하 벌금&gt;</span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>차별사례</th>
                                        <td>
                                            <div class="jbInfos tp2">
                                                <div class="inf_tx noindent">
                                                    특정성을 지칭하는 직종명 등 사용하는 경우, 특정성 배제<br />
                                                    <span class="cg">- 남성 선반공, 병역필 남, 여성 비서, 미용사 &lt;여성 환영&gt; 등</span>
                                                </div>
                                                <br />
                                                <div class="inf_tx noindent">
                                                    직종 등 남녀 분리모집 등<br />
                                                    <span class="cg">- 관리·사무직 남성 10명, 판매직 여성 5명</span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>차별로 보지않는 사례</th>
                                        <td>
                                            <div class="jbInfos tp2">
                                                <div class="inf_tx noindent">
                                                    직무성질상 특정한 성이 불가피한 경우<br />
                                                    <span class="cg">- 남성역할 위한 배우·모델 등</span><br />
                                                    <span class="cg">- 여성 목욕탕의 여성 목욕관리사, 여성 장애인·여성 환자의 도우미 등</span><br />
                                                    <span class="cg">- 여성 기숙사의 여성사감 등</span><br /><br />

                                                    현존하는 차별 없애거나 고용평등 촉진위해 잠정적으로 특정성 우대하는 조치를 하는 경우
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Dialog>
                </LayoutCol>
            </LayoutRow>
        </LayoutRowLayout>
        <!-- 성별제한:E -->

        <!-- 연령제한:S -->
        <LayoutRowLayout title="연령제한">
            <LayoutRow class="FLEX ALIGN_ITEM_CENTER">
                <LayoutCol class="col00 MT10" style="margin-right: auto">
                    <FormRadioGroup>
                        <FormRadio
                            v-for="(item, index) in ziwonAgeArray"
                            :key="index"
                            :label="item.label"
                            :value="item.value"
                            :checked="ziwon_age == item.value"
                            @update:change="(e) => SET_ZIWON_AGE(e.target.value)"
                            cssClass="MR20"
                            name="limit_age_gubun"
                        />
                    </FormRadioGroup>
                </LayoutCol>
                <LayoutCol class="col00" style="margin-left: auto">
                    <div class="jbAntoTxts TXTR">
                        <span class="lbwx">연령별금지 - </span>
                        <button class="antx" @click="ediDialogVisible002 = true">고용상 연령차별 금지에 관한 법률보기</button>
                    </div>
                    <Dialog title="연령차별금지 주요내용" :visible="ediDialogVisible002" @click:dialogVisibleToggle="ediDialogVisible002 = false" v-if="ediDialogVisible002">
                        <div class="jbInfos tp2 MT10">
                            <div class="inf_tx noindent">
                                채용공고에 합리적인 이유 없이 “○○세 이하“. “19○○년 이후 출생자”, “20○○년 졸업자”, “대학 졸업 후 2년 이내”등 직·간적적인 연령제한을 할 수 없게
                                되었습니다. 모집·채용에서
                                <span class="cb">불합리한 연령 제한 시</span>
                                고용상 연령차별 금지 및 고령자 고용촉진에 관한 법률 위반에 따른
                                <span class="cb">500만원 이하의 벌금</span>이 부과될 수 있습니다.
                            </div>
                        </div>
                        <div class="djCnTbl tleft MT25">
                            <table>
                                <colgroup>
                                    <col width="150px" />
                                    <col width="auto" />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th>관련법령</th>
                                        <td>
                                            <div class="jbInfos tp2">
                                                <div class="inf_tx noindent">
                                                    고용상 연령차별 금지 및 고령자 고용촉진에 관한 법률<br />
                                                    제4조의 4 제1항 제1호의 의거 근로자를 모집하거나 채용 시 합리적인 이유 없이 연령을 이유로 차별할 수 없음<br />
                                                    <span class="cb">&lt;차별 시 500만원 이하 벌금&gt;</span><br />
                                                    <span class="cb">&lt;시정명령 불이행 시 3천만원 이하의 과태료 부과&gt;</span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>차별사례</th>
                                        <td>
                                            <div class="jbInfos tp2">
                                                <div class="inf_tx noindent">원자의 나이를 제한하거나 특정 연령층을 선호하는 경우</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>차별로 보지않는 사례</th>
                                        <td>
                                            <div class="jbInfos tp2">
                                                <div class="inf_tx noindent">
                                                    직무 성질상 특정 연령기준이 불가피한 경우 (진정직업자격)<br />
                                                    <span class="cg">- 연극·영화에서 청년 역할의 수행을 위한 연령 제한 등</span><br />
                                                    <span class="cg">- 여성 목욕탕의 여성 목욕관리사,여성 장애인·여성 환자의 도우미 등</span><br />
                                                    <span class="cg">- 여성 기숙사의 여성사감 등</span><br /><br />

                                                    현존하는 차별을 없애거나 고용평등 촉진을 위해 잠정적으로 특정성 우대하는 조치를 하는 경우 등
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Dialog>
                </LayoutCol>
            </LayoutRow>
            <LayoutRow class="MT15" v-if="ziwon_age == '99'">
                <LayoutCol class="col00">
                    <FormInput type="number" placeholder="숫자" data-index="0" :model-value="ziwon_age_ln[0]" @input="(e) => SET_ZIWON_AGE_LN(e.target)" />
                </LayoutCol>
                <LayoutCol class="col00">
                    <span class="jbStatText MT15">세 이상 ~</span>
                </LayoutCol>
                <LayoutCol class="col00">
                    <FormInput type="number" placeholder="숫자" data-index="1" :model-value="ziwon_age_ln[1]" @input="(e) => SET_ZIWON_AGE_LN(e.target)" />
                </LayoutCol>
                <LayoutCol class="col00">
                    <span class="jbStatText MT15">세 이하</span>
                </LayoutCol>
            </LayoutRow>
        </LayoutRowLayout>
        <!-- 연령제한:E -->

        <button class="jbSectAddButton MT20" @click="test">다음</button>
    </div>
    <!-- 지원자격:E -->
</template>

<script>
import { jobpost } from "~/mixins";
import {
    SET_JOBPOST_SELETED,
    SET_JOBPOST_UNSELETED,
    SET_ZIWON_EDUCATION_SELECT,
    SET_ZIWON_EDUCATION_INPUT,
    SET_ZIWON_EDUCATION_CHECK,
    SET_ZIWON_JENDER,
    SET_ZIWON_AGE,
    SET_ZIWON_AGE_LN,
} from "@/store/mutations-type";
import { mapState, mapActions, mapMutations } from "vuex";

export default {
    name: "eligibility",
    async asyncData({ $api }) {
        let langage = null;
        let license = null;
        let keywordData = null;
        let woodaeUni = null;
        try {
            langage = await $api.static_api("langage").then(({ data }) => data);
            license = await $api.static_api("license").then(({ data }) => {
                keywordData = data.data;
                return data;
            });
            woodaeUni = await $api.static_api("langage").then(({ data }) => data);
        } catch (error) {}
        return {
            langage,
            license,
            keywordData,
            woodaeUni,
        };
    },
    data() {
        return {
            //외국어
            isLangageDialogVisible: false,
            limitLangageSelectedLength: 6,
            //우대전공
            woodaeUni: undefined,
            isWoodaeUniDialogVisible: false,
            limitWoodaeUniSelectedLength: 6,
            //자격증
            isLicenseDialogVisible: false,
            limitLicenseSelectedLength: 3,
            //자격증 > 연관검색
            keyword: "",
            //연령제한
            ziwonAgeArray: [
                {
                    label: "연령무관",
                    value: "1",
                },
                {
                    label: "연령제한",
                    value: "99",
                },
            ],
            ziwonJenderArray: [
                {
                    label: "성별무관",
                    value: "99",
                },
                {
                    label: "남자",
                    value: "man",
                },
                {
                    label: "여자",
                    value: "woman",
                },
            ],
            //성차별법금지 팝업visible
            ediDialogVisible001: false,
            ediDialogVisible002: false,
        };
    },
    computed: {
        ...mapState({
            ziwon_hckGubun: (state) => state.jobpost.ziwon_hckGubun,
            ziwon_hckGubun_input: (state) => state.jobpost.ziwon_hckGubun_input,
            ziwon_hckGubun_check: (state) => state.jobpost.ziwon_hckGubun_check,
            ziwon_jender: (state) => state.jobpost.ziwon_jender,
            ziwon_age: (state) => state.jobpost.ziwon_age,
            ziwon_age_ln: (state) => state.jobpost.ziwon_age_ln,
            ziwon_langage_selected: (state) => state.jobpost.ziwon_langage_selected,
            ziwon_woodaeuni_selected: (state) => state.jobpost.ziwon_woodaeuni_selected,
            ziwon_license_selected: (state) => state.jobpost.ziwon_license_selected,
        }),
        langageFavorite() {
            return this.__fnComputeFavorite("langage");
        },
        woodaeUniFavorite() {
            return this.__fnComputeFavorite("woodaeUni");
        },
        licenseFavorite() {
            if (this.license) {
                return this.license.favorite;
            } else {
                return [];
            }
        },
    },
    created() {},
    mounted() {
        this.getSession({
            data: window.localStorage.getItem(this.$options.name),
        });
    },
    methods: {
        ...mapMutations({
            [SET_JOBPOST_SELETED]: `jobpost/${SET_JOBPOST_SELETED}`,
            [SET_JOBPOST_UNSELETED]: `jobpost/${SET_JOBPOST_UNSELETED}`,
            [SET_ZIWON_EDUCATION_SELECT]: `jobpost/${SET_ZIWON_EDUCATION_SELECT}`,
            [SET_ZIWON_EDUCATION_INPUT]: `jobpost/${SET_ZIWON_EDUCATION_INPUT}`,
            [SET_ZIWON_EDUCATION_CHECK]: `jobpost/${SET_ZIWON_EDUCATION_CHECK}`,
            [SET_ZIWON_JENDER]: `jobpost/${SET_ZIWON_JENDER}`,
            [SET_ZIWON_AGE]: `jobpost/${SET_ZIWON_AGE}`,
            [SET_ZIWON_AGE_LN]: `jobpost/${SET_ZIWON_AGE_LN}`,
        }),
        ...mapActions({
            getSession: `jobpost/getSession`,
        }),
        lanagebind(event) {
            this.SET_JOBPOST_SELETED({
                event,
                selected: "ziwon_langage_selected",
                selectedLengh: this.limitLangageSelectedLength,
                alertMsg: `외국어는 ${this.limitLangageSelectedLength}개 까지 선택가능합니다.`,
            });
        },
        licensebind(event) {
            this.SET_JOBPOST_SELETED({
                event,
                selected: "ziwon_license_selected",
                selectedLengh: this.limitLicenseSelectedLength,
                alertMsg: `자격증은 ${this.limitLicenseSelectedLength}개 까지 선택가능합니다.`,
            });
        },
        woodaeUnibind(event) {
            this.SET_JOBPOST_SELETED({
                event,
                selected: "ziwon_woodaeuni_selected",
                selectedLengh: this.limitWoodaeUniSelectedLength,
                alertMsg: `우대전공은 ${this.limitWoodaeUniSelectedLength}개 까지 선택가능합니다.`,
            });
        },
        fnKeyword(e) {
            let keyword = e.target.value;
            this.keywordData = this.license.data.filter(({ name }, index) => name.indexOf(keyword) != -1);
            this.keyword = keyword;
        },
        fnSearchListItems(e) {
            console.log(e);
        },
        test() {
            window.localStorage.setItem(
                this.$options.name,
                JSON.stringify({
                    ziwon_hckGubun: this.ziwon_hckGubun,
                    ziwon_hckGubun_input: this.ziwon_hckGubun_input,
                    ziwon_hckGubun_check: this.ziwon_hckGubun_check,
                    ziwon_jender: this.ziwon_jender,
                    ziwon_age: this.ziwon_age,
                    ziwon_age_ln: this.ziwon_age_ln,
                    ziwon_langage_selected: this.ziwon_langage_selected,
                    ziwon_woodaeuni_selected: this.ziwon_woodaeuni_selected,
                    ziwon_license_selected: this.ziwon_license_selected,
                })
            );
            this.$router.push({ path: "/" });
        },
    },
    mixins: [jobpost],
    layout: "default_jobpost",
};
</script>

<style>

</style>