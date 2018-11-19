<template>

  <div class="clist">

    <div class="columns clist-filters">

      <!-- <div v-for="filter in itemFilters" :key="filter">
        {{filter}}
      </div> -->

      <!-- order by this filter -->
      <select-component v-if="itemFilters" attr="selectedFilter" :options="itemFilters" @newSelection="newSelection"></select-component>
      <!-- desc/asc -->

      <div @click="setOrderBy">
        <span id="orderBy" class="fa fa-arrow-up"></span>
      </div>

    </div>

    <div class="clist-items">
      <div class="clist-item" v-for="item in filteredItems" :key="item.id">
        {{item}}
      </div>
    </div>

  </div>

</template>
<script>

import SelectComponent from './SelectComponent.vue'

import SelectTagMixin from '../../mixins/select-tag-mixin'

export default {
  name: 'list-component',
  props: ['items'],
  mixins: [SelectTagMixin],
  data() {
    return {
      selectedFilter: null,
      orderBy: 'asc', // inverse: 'asc'
    }
  },
  components: {
    SelectComponent
  },
  computed: {
    filter() {
      return {value: this.selectedFilter, order: this.orderBy}
    },
    filteredItems() {

      // add filters
      // order by filters
      const filter = this.filter.value
      const orderBy = this.filter.order
      const result = this.items.sort(function(a, b) {

        if(a[filter] > b[filter]) {
          return orderBy === 'desc' ? 1 : -1
        }else if(a[filter] < b[filter]) {
          return orderBy === 'desc' ?  -1 : 1
        }
        return 0
      })
      return result
    },
    /**
     * gets an array of the usable filters of an item to be used within a select tag
     * 
     * v1 - all the items MUST HAVE the same attributes
     */
    itemFilters() {
      // FIXME in v2
      const result = typeof this.items[0] === 'object' && Object.keys(this.items[0]).length > 0 ? Object.keys(this.items[0]) : null
      // avoid id from being sent
      let indexOfId = result.indexOf('id')
      if(indexOfId !== -1) {
        result.pop(result[indexOfId])
      }
      if(!this.selectedFilter) {
        // select the first filter for the first time
        this.selectedFilter = result[0]
      }
      return result
    }
  },
  methods: {
    setOrderBy() {
      const icon = document.getElementById("orderBy")
      if(icon.classList.contains("fa-arrow-down")) {
        icon.classList.remove("fa-arrow-down")
        icon.classList.add("fa-arrow-up")
      }else{
        icon.classList.remove("fa-arrow-up")
        icon.classList.add("fa-arrow-down")
      }
      this.orderBy = this.orderBy === 'desc' ? 'asc' : 'desc'
    }
  }
}
</script>

<style lang="scss" scoped>
  // @import "../../assets/css/index.scss";

  .clist {
    width: 100%;
    position: relative;

    &-filters {
      color: red;
    }

  }
</style>


