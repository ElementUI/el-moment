# el-moment
[![Build Status](https://travis-ci.org/ElementUI/el-moment.svg?branch=master)](https://travis-ci.org/ElementUI/el-moment)
[![npm](https://img.shields.io/npm/v/el-moment.svg)](https://www.npmjs.com/package/el-moment)

> A Vue component of formatting dates using moment.

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

## License
MIT
