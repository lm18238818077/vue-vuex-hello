export default {
  data() {
    return {
      total: 0,
      currentPage: 1,
      pageSize: 10,
      tableData: [],
      loading: false
    }
  },

  created() {
    this.searchData()
  },

  methods: {
    // 预申明，防止报错
    searchData() {},

    handleSizeChange(size) {
      this.pageSize = size
      this.searchData()
    },

    handleCurrentChange(page) {
      this.currentPage = page
      this.searchData()
    },

    handleSearchData() {
      this.currentPage = 1
      this.searchData()
    }
  }
}
