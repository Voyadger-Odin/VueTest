<template>
  <input
      @input="updateInput"
      :value="modelValue"
      class="input"
      type="text"
  >
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
  .input{
    width: 100%;
    border: 2px solid #C9CCD6;
    border-radius: 4px;
    color: black;
    background: white;
    padding: 6px 10px;
  }
  .input:focus{
    outline: none;
    border: 2px solid #3574F0;
  }
</style>