<template>
  <div>动态路由参数{{ routerId }}</div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
    }
  },
  computed: {
    routerId() {
      return this.$route.params.id;
    }
  },

  watch: {},

  created() {
  },

  mounted() {
  },

  methods: {
  }
}
</script>
