<template>
    <button class="g-button" :class="{[`icon-${iconposition}`]: true}">
      <g-icon v-if="icon" :name="icon"></g-icon>
      <div class="content">
        <slot></slot>
      </div>
    </button>
</template>
<script>
  export default{
    props:{
      icon:{},
      iconposition:{
        type: String,
        default:'left',
        validator(value){
          console.log(value)
          if(value !=='left' && value !=='right'){
            return false
          }else{return true}
        }
      }
    }
  }
</script>
<style lang="scss">
  .g-button{
    font-size: var(--button-bg);
    background: var(--button-bg);
    border-radius: var(--button-border-radius);
    height: var(--button-height);
    display: inline-flex;
    justify-content: center;
    align-items: center;

  > .icon{order:2;}
  >.content{order: 1;}
  .g-button.icon-right{
     > .icon{order: 2;}
     > .content{order:1;}
   }
  }
 /* .g-button:hover{*/
 /*     background: var(--border-color-hover);*/
 /* }*/
 /*. g-button:active{*/
 /*     background: var(--button-active-bg);*/
 /*     color: var(--button-active-color);*/
 /* }*/
 /* .g-button:focus{outline: none;}*/
  </style>