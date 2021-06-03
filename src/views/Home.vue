<template>
  <div class="home" v-loading="loading">
    <el-avatar :size="50" :src="info && info.avatar"></el-avatar>
    <span>{{ info && info.author_name }}</span>
    <button @click="handle({ data: 22 })">换名</button>
    <div>loading:{{ loading }}</div>
    <div>loading2:{{ loading2 }}</div>
    <div>num:{{ num }}</div>
    <div>name:{{ name }}</div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapState({
      info: (state) => state.user.info,
      loading: state => state.loading.effects['user/info'],
      loading2: state => state.loading.effects['cjj/initname'],
    }),
    ...mapState(['admin']),
    ...mapState('cjj',['num','name']),
  },
  created() {
    console.log(this);
    this.handleinfo()
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions('user',{
      handleinfo: 'info'
    }),
    handle () {
      this.$store.dispatch('cjj/initname')
    }
  },
};
</script>
