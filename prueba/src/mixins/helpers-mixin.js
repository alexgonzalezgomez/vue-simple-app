export default {
  methods: {
    createSelectDefaultArray(values) {
      const result = [{name: '---', value: -1}]
      result.push(...values)
      return result
    }
  }
}