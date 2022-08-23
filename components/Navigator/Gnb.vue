<template>
    <div class="jbGlInners">
        <div class="navtaArea">
            <!-- foreach:S -->
            <div class="tpsw_tp">
                <router-link :to="{ path: '/Recruitment' }">
                    <button class="tbtw">모집분야</button>
                </router-link>
            </div>
            <div class="tpsw_tp">
                <router-link :to="{ path: '/Eligibility' }">
                    <button class="tbtw">지원자격</button>
                </router-link>
            </div>
            <div class="tpsw_tp">
                <router-link :to="{ path: '/WorkingConditions' }">
                    <button class="tbtw">근무조건</button>
                </router-link>
            </div>
            <div class="tpsw_tp">
                <button class="tbtw">접수방법</button>
            </div>
            <div class="tpsw_tp">
                <button class="tbtw">담당자 정보</button>
            </div>
            <div class="tpsw_tp">
                <button class="tbtw">기업정보</button>
            </div>
            <div class="tpsw_tp">
                <button class="tbtw">템플릿 반영</button>
            </div>
            <div class="tpsw_tp">
                <button class="tbtw">채용 인사담</button>
            </div>
            <!-- foreach:E -->
        </div>
    </div>
</template>

<script>
export default {};
</script>