## 异步请求

### get
:::demo

```html
<div>
  <p v-for="item in dataArr">{{item.schoolName}}</p>
</div>

<script>
  export default {
    data() {
      return {
        dataArr: [],

      }
    },
    mounted() {
      this.getSchollList();

    },
    methods: {
      getSchollList() {
        axios.get(`${this.$store.state.mockApi}/school/list`)
        .then((response) => {
          this.dataArr = response.data.data;
        })
        .catch((error) => {
          console.log('error', error);
        });
      },
      getSchollList1() {
        axios.get(`${this.$store.state.mockApi}/school/list`,{params: {
          id: 'school1'
        }})
        .then((response) => {
          this.dataArr = response.data.data;
        })
        .catch((error) => {
          console.log('error', error);
        });
      }
    }
  }
</script>
```
:::

### post
:::demo response.data

```html
<div>
  <p v-for="item in dataArr">{{item.schoolName}}</p>
</div>

<script>
  export default {
    data() {
      return {
        dataArr: [],

      }
    },
    mounted() {
      this.getSchollList1();

    },
    methods: {
      getSchollList() {
        axios.post(`${this.$store.state.mockApi}/school/list`)
        .then((response) => {
          this.dataArr = response.data.data;
        })
        .catch((error) => {
          console.log('error', error);
        });
      },
      getSchollList1() {
        axios.post(`${this.$store.state.mockApi}/school/list`, {
          id: 'school1'
        })
        .then((response) => {
          this.dataArr = response.data.data;
        })
        .catch((error) => {
          console.log('error', error);
        });
      }
    }
  }
</script>
```
:::

### 通用请求
:::demo response.data

```html
<div>
  <p v-for="item in dataArr">{{item.schoolName}}</p>
</div>

<script>
  export default {
    data() {
      return {
        dataArr: [],

      }
    },
    mounted() {
      this.getSchollList();

    },
    methods: {
      getSchollList() {
        axios({
          method: 'post',
          url: `${this.$store.state.mockApi}/school/list`,
          data: {
            id: 'school1',
          }
        }).then((response) => {
          this.dataArr = response.data.data;
        })
        .catch((error) => {
          console.log('error', error);
        });
      },
    }
  }
</script>
```
:::

### all
主要用于多个并发请求
:::demo response.data

```html
<div>
  <div class="flex">
    <div class="block">
      <p v-for="item in schoolArr">{{item.schoolName}}</p>
    </div>
    <div class="block">
      <p v-for="item in teacherArr">{{item.name}}</p>
    </div>
  </div>

</div>

<script>
  export default {
    data() {
      return {
        schoolArr: [],
        teacherArr: [],

      }
    },
    mounted() {
      this.getList();

    },
    methods: {
      getTearcherList() {
        return axios.get(`${this.$store.state.mockApi}/teacher/list`);
      },
      getSchoolList() {
        return axios.get(`${this.$store.state.mockApi}/school/list`);
      },
      getList() {
        axios.all([this.getTearcherList(), this.getSchoolList()])
          .then(axios.spread((teachers, schools) => {
            // 两个请求现在都执行完成
            this.teacherArr = teachers.data.data;
            this.schoolArr = schools.data.data;
          }));
      },
    }
  }
</script>
```
:::
