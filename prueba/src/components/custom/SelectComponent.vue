<template>

  <div class="cselect">
    <select name="" id="" @change="emitSelection">
      <option v-for="option in CPOptions" :key="option.value ? option.value : option" :value="option.value ? option.value : option">
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
        const val = e.currentTarget.value
        this.$emit('newSelection', this.attr, val.includes(-1) ? null : val)
      }
    },
    computed: {
      CPOptions() {
        return this.options
      }
    },
  }
</script>

<style>

</style>


