// module.exports = {
//   plugins: [
//     require('postcss-import'),
//     require('postcss-preset-env')({stage: 1}),
//     // require('postcss-nested'),
//     // require('cssnano'),
//   ]
// }


export default {
  plugins: {
    'postcss-import' :{},
    'postcss-nested': {},
    'postcss-preset-env': {stage: 1}
  },
}