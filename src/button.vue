<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
      <g-icon v-if="icon && !loading" :name="icon"></g-icon>
      <g-icon class="loading" v-if="loading" name="loading"></g-icon>
      <div class="content">
        <slot></slot>
      </div>
    </button>
</template>
<script>
  export default{
    props:{
      icon:{},
      loading:{
        type: Boolean ,
        default: false
      },
      iconPosition:{
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
  @keyframes load{
    0%{transform: rotate(0deg);}
    100%{transform: rotate(360deg);}
  }
  .g-button{
    font-size: var(--font-size);
    border-radius: var(--button-border-radius);
    height: var(--button-height);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    > .icon{order:1;}
    >.content{order: 2;}
    .g-button.icon-right{
       > .icon{order: 2;}
       > .content{order:1;}
    }
    .loading{
      animation: load 1s infinite linear;
    }
    &:hover{
      background: var(--border-color-hover);
    }
    &:active{
      background: var(--button-active-bg);
      color: var(--button-active-color);
    }
    &:focus{outline: none;}
    }
  </style>