import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// rollup打包分析插件
import visualizer from 'rollup-plugin-visualizer'
// import svgLoader from 'vite-svg-loader';
// import legacy from '@vitejs/plugin-legacy';
// import viteSvgIcons from 'vite-plugin-svg-icons';
// import cesium from 'vite-plugin-cesium';
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import {
//   ArcoResolver,
//   VueUseComponentsResolver
// } from 'unplugin-vue-components/resolvers'
// import PkgConfig from 'vite-plugin-package-config';
// import checker from 'vite-plugin-checker';
// import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import { resolve } from 'path'

export default (env, isBuild) => {
  const plugins = [
    vue(),
    vueJsx()
    // svgLoader(),
    // legacy({
    //   targets: ['defaults', 'not IE 11'],
    // }),
    // viteSvgIcons({
    //   // 指定需要缓存的图标文件夹
    //   iconDirs: [resolve(process.cwd(), 'src/assets/svg')],
    //   // 指定symbolId格式
    //   symbolId: 'icon-[dir]-[name]',
    // }),
    // cesium(),
    // VueSetupExtend(),
    // AutoImport({
    //   dts: './src/auto-imports.d.ts',
    //   imports: ['vue', 'pinia', 'vue-router', '@vueuse/core'],
    //   // Generate corresponding .eslintrc-auto-import.json file.
    //   // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
    //   eslintrc: {
    //     enabled: true, // Default `false`
    //     filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
    //     globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
    //   },
    //   resolvers: [ArcoResolver()]
    // }),
    // Components({
    //   dts: './src/components.d.ts',
    //   extensions: ['vue', 'jsx', 'md'],
    //   include: [/\.jsx$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
    //   dirs: ['src/components/'],
    //   resolvers: [ArcoResolver(), VueUseComponentsResolver()]
    // })
    // PkgConfig(),
    // env.mode === 'production'
    //   ? null
    //   : checker({
    //       enableBuild: false,
    //       typescript: false,
    //       vueTsc: true,
    //       eslint: {
    //         lintCommand: 'eslint "./src/**/*.{js,jsx,vue}"',
    //         dev: {
    //           logLevel: ['error'],
    //         },
    //       },
    //     }),
  ]

  if (isBuild) {
    plugins.push(
      visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true
      })
    )
  }

  return plugins
}
