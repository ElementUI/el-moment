# el-moment
> A Vue component of formatting dates using moment.


## Demo

### format with moment

<vuep template="#demo1"></vuep>

<script type="text/x-template" id="demo1">
  <template>
    <div>
      <p>{{ date }}</p>

      <el-moment v-model="date" format="MMMM Do YYYY, h:mm:ss a">
        <el-date-picker />
      </el-moment>
    </div>
  </template>

  <script>
    export default {
      data: function () {
        return {
          date: ''
        }
      }
    }
  </script>
</script>

### Set the initial value

<vuep template="#demo2"></vuep>

<script type="text/x-template" id="demo2">
  <template>
    <div>
      <p>{{ date }}</p>

      <el-moment v-model="date" format="x">
        <el-date-picker />
      </el-moment>
    </div>
  </template>

  <script>
    export default {
      data: function () {
        return {
          date: moment('1993-05-30', 'YYYY-MM-DD')
        }
      }
    }
  </script>
</script>

## Installation
```bash
yarn add el-moment moment
# npm i el-moment moment -S
```

## Usage
```javascript
import ElMoment from 'el-moment'

Vue.use(ElMoment)
// or
Vue.component(ElMoment.name, ElMoment)
```

```html
<!-- component -->
<el-moment v-model="date" format="MMMM Do YYYY, h:mm:ss a">
  <el-date-picker></el-date-picker>
</el-moment>

<!-- native input -->
<el-moment v-model="date" format="MMMM Do YYYY, h:mm:ss a">
  <input type="text">
</el-moment>
```

**No extra HTML tag is generated 😉**

