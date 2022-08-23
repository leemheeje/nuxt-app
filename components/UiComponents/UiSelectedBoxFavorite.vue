<template>
    <div class="useBtArea">
        <span class="tpwLabs">자주 사용하는 {{ title }} 선택</span>
        <div class="tpwGroups">
            <!-- foreach:S -->
            <slot name="slot-favorite" />
            <!-- foreach:E -->
        </div>
    </div>
</template>

<script>
export default {
    props: ["title"],
};
</script>
