<template>
  <svg class="g-icon">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>
<script>
  export default{
    props: ['name']
  }
</script>
<style class="scss">
  .g-icon{width: 1em; height: 1em;}
</style>