<template>
  <div :class="[prefix]">
    <router-link v-if="prev.path" class="link" :to="prev.path">
      <span class="el-icon-back"></span>
      {{ prev.label }}
    </router-link>
    <router-link v-if="next.path" :class="['link', 'link__next']" :to="next.path">
      {{ next.label }}
      <span class="el-icon-right"></span>
    </router-link>
  </div>
</template>

<script>
import { matchedPosItems } from './models'
import { matchModuleFromUrl } from '../../app/models'

export default {
  components: {},
  props: {
    skipGideList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      next: {
        label: '',
        path: ''
      },
      prev: {
        label: '',
        path: ''
      }
    }
  },
  computed: {
    prefix() {
      return this.$store.state.appPrefix + '-c-footer'
    }
  },

  watch: {
    '$route.path'(val) {
      const { moduleList } = matchModuleFromUrl(val, this.$store.state.navigatorList);
      this.$findPosItems(moduleList)
    }
  },

  created() {},

  mounted() {},

  methods: {
    $findPosItems(moduleList) {
      const currentItem = moduleList[moduleList.length - 1]
      if (currentItem) {
        const { next, prev } = currentItem
        const navList = this.$store.state.navigatorList
        const nextItem = matchedPosItems(next, navList)
        const prevItem = matchedPosItems(prev, navList)
        this.next.label = nextItem.label
        this.next.path = nextItem.path
        this.prev.label = prevItem.label
        this.prev.path = prevItem.path
      }
    }
  }
}
</script>
