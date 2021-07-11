<template>
  <div class="about">
    <h1>This is an about page</h1>
    <img src="../assets/logo.png" alt="">
    <el-table
      :data="tableData"
      v-loading="loading"
      style="width: 100%">
      <el-table-column
        prop="create_time"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="create_user_name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="department_name"
        label="地址">
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
    <List :data="arr" id="ming" @click.native="handleArr">
      <template v-slot="{item}">
        <div class="item" >
        {{item}}<i class="el-icon-edit"></i>
        </div>
      </template>
    </List>
    <button @click="handleArr">arr</button>
    <hello-world msgCamcel="cjj"></hello-world>
  </div>
</template>
<script>
import List from '@/components/List'
import HelloWorld from '@/components/HelloWorld'
import tableMixin from '@/mixins/tableMixin'
import {getSurvey} from '@/api/index'

export default{
  name: "About",
  components:{List,HelloWorld},
  mixins: [tableMixin],
  data () {
    return{
      arr: [1,2,3,4],
    }
  },
  mounted () {
    console.log(this)
  },
  methods: {
    searchData () {
      this.loading = true
      getSurvey({currentPage: this.currentPage, pageSize: this.pageSize}).then(res=>{
        this.tableData = res.list
        this.total = res.pagination.total
        this.currentPage = res.pagination.current
        this.pageSize = res.pagination.pageSize
        this.loading = false
        console.log(this.tableData)
      })
    },
    handleArr () {
      // this.$set(this.arr,0,9)
      this.arr[0] = 9
      console.log(this.arr)
    }
  }
}
</script>
<style scoped>
  .item{
    color: green;
  }
  .about >>> .li{
    color: pink;
  }
</style>

