import buble from 'rollup-plugin-buble'

export default {
  entry: 'src/index.js',
  plugins: [buble()],
  globals: {
    moment: 'moment'
  },
  moduleName: 'ElMoment',
  external: ['moment'],
  targets: [
    { format: 'cjs', dest: 'dist/el-moment.common.js' },
    { format: 'umd', dest: 'dist/el-moment.js' }
  ]
}
