<template>
     <v-sheet   class="my-5 ">
        <v-skeleton-loader class="pa-8" type="card,list-item-three-line"  :width="width" ></v-skeleton-loader>
      </v-sheet>
</template>

<script>
    export default {
        name:"SkeletonNews",
        props:["width"]
    }
</script>

<style lang="scss" scoped>

</style>