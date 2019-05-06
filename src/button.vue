<template>
  <button class="g-button">按钮</button>
</template>
<script>
  export default{}
</script>
<style lang="scss">
  .g-button{
    padding: 0 1em;
    font-size: var(--button-bg);
    background: var(--button-bg);
    border-radius: var(--button-border-radius);
  }
    &:hover{
      background: var(--border-color-hover);
  }
    &:active{
      background: var(--button-active-bg);
      color: var(--button-active-color);
  }
    &:focus{outline: none;}
  </style>