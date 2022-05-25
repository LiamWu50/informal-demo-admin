import type { Component } from 'vue'

const mapping = (modules: any) => {
  const components: { [key: string]: Component } = {}
  // views文件夹下的所有JSX文件都会自动生成映射关系
  Object.keys(modules).forEach((key: string) => {
    const nameMatch: string[] | null = key.match(/^\/src\/views\/(.+)\.tsx/)

    if (!nameMatch) {
      return
    }

    // 如果页面名为Index，则使用父文件夹作为名称
    const indexMatch: string[] | null = nameMatch[1].match(/(.*)\/Index$/i)

    let name: string = indexMatch ? indexMatch[1] : nameMatch[1]

    name = name.replaceAll('/', '-')

    components[name] = modules[key]
  })
  return components
}

export default mapping

