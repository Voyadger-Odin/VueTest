<template>
  <div
      class="dialog"
      v-if="show"
      @click.stop="hideDialog"
  >
    <div
        @click.stop
        class="dialog_content"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-dialog',
  props: {
    show: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    hideDialog() {
      this.$emit('update:show', false)
    }
  }
}
</script>

<style scoped>
  .dialog {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
  }

  .dialog_content {
    margin: auto;
    padding: 15px;
    background: white;
    border-radius: 8px;
    min-width: 300px;
    min-height: 100px;
    box-shadow: 0px 8px 40px 0px rgba(0, 0, 0, 0.30);
  }
</style>