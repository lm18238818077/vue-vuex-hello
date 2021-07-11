<template>
  <ul>
    <li v-for="(v,i) in data" :key="i" class="li">
      <slot :item="v">{{v}}</slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'List',
  props: ['data'],
  inheritAttrs: false,
}
</script>

<style scoped>
  .li{
    font-size: 30px;
    color: red;
  }
</style>
