<template>

  <div class="cselect">
    <select name="" id="" @change="emitSelection">
      <option v-for="option in options" :key="option" :value="option.value ? option.value : option">
        {{option.name ? option.name : option}}
      </option>
    </select>
  </div>
  
</template>

<script>
  export default {
    name: 'select-component',
    /**
     * options is an Object[] with this structure
     * [{"option 1", "option 2"}] ||
     * [{name: 'option 1', value; '1'},{name: 'option 2', value; '2'},...]
     */
    props: ['attr','options'],
    methods: {
      emitSelection(e) {
        this.$emit('newSelection', this.attr ,e.currentTarget.value)
      }
    }
  }
</script>

<style>

</style>


