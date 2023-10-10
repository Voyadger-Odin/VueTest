<template>
  <button
      class="btn"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>
  :root{
    --btn-active-color: #3574F0;
  }

  .btn{
    padding: 6px 12px;
    background: #3574F0;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;
    transition: .1s;
  }
  .btn:hover{
    background: #3369D6;
    color: white;
  }
  .btn:active{
    background: #315FBD;
    color: white;
  }
  .btn:disabled{
    background: #EBECF0;
    color: #A8ADBD;
    cursor: not-allowed;
  }


</style>