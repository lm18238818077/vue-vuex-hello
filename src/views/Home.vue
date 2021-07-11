<template>
  <div class="home" v-loading="loading">
    <el-avatar :size="50" :src="info && info.avatar"></el-avatar>
    <span>{{ info && info.author_name }}</span>
    <button @click="aa">换名</button>
    <div>loading:{{ loading }}</div>
    <div>loading2:{{ loading2 }}</div>
    <div>num:{{ num2 }}</div>
    <div class="name">name:{{ name }}</div>
    <div class="name">根目录的状态:{{ admin }}</div>
    <el-progress :percentage="50" status="exception"></el-progress>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapState({
      info: (state) => state.user.info,
      loading: state => state.loading.effects['user/info'],
      loading2: state => state.loading.effects['cjj/initname'],
    }),
    ...mapState(['admin']),
    ...mapState('cjj',{num2:'num',name:'name'}),
  },
  created() {
    console.log(this);
    this.infos()
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions('user',{'infos':'info'}),
    ...mapMutations({'handle':'cjj/SET_NAME'}),
    aa () {
      this.$store.dispatch('user/me')
    }
  },
};
</script>
<style scoped>
.home{
  width: 300px;
  margin: 0 auto;
}
.home /deep/ .name{
  font-size: 20px;
  font-weight: bold;
}
.home >>> .el-progress-bar__outer{
  background-color: brown;
}
</style>
