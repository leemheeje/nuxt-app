<template>
    <div class="viewport">
        <div id="container" class="container gray">
            <div class="contents">
                <div class="jbPstGlbaArea">
                    <!-- 채용공고 헤더영역:S -->
                    <div class="jbHeadersArea">
                        <div class="jbHdRowsArn">
                            <div class="jbGlInners">
                                <!-- 이전공고 불러오기 selectbox:S -->
                                <NavigatorJobpostSelect />
                                <!-- 이전공고 불러오기 selectbox:E -->
                                <!-- 버튼그룹:S -->
                                <div class="btnwWrap">
                                    <button class="htd_btn outline">미리보기</button>
                                    <button class="htd_btn org">저장하기</button>
                                </div>
                                <!-- 버튼그룹:E -->
                            </div>
                            <NavigatorGnb />
                        </div>
                        <div class="jbHdRowsBrn" v-if="false">
                            <!-- 미등록식 보이는 영역:S-->
                            <div class="mtValueChkArea">
                                <div class="jbGlInners">
                                    <div class="inxwTxs">
                                        <!-- foreach:S -->
                                        <button class="inbt">모집분야</button>
                                        <button class="inbt">모집분야1</button>
                                        <button class="inbt">모집분야2</button>
                                        <!-- foreach:E -->
                                        <span class="tlbw">이 등록되지 않았습니다.</span>
                                    </div>
                                </div>
                            </div>
                            <!-- 미등록식 보이는 영역:E -->
                        </div>
                    </div>
                    <!-- 채용공고 헤더영역:E -->

                    <!-- 채용공고 컨텐츠 영역:S -->
                    <div class="jbContentsArea">
                        <div class="jbGlInners">
                            <Nuxt />
                        </div>
                    </div>
                    <!-- 채용공고 컨텐츠 영역:E -->
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
export default {
	created(){}
};
</script>
