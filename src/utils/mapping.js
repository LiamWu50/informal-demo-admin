const mapping = (modules) => {
  const components = {}
  // views文件夹下的所有JSX文件都会自动生成映射关系
  Object.keys(modules).forEach((key) => {
    const nameMatch = key.match(/^\/src\/views\/(.+)\.jsx/)

    if (!nameMatch) {
      return
    }

    // 如果页面名为Index，则使用父文件夹作为名称
    const indexMatch = nameMatch[1].match(/(.*)\/Index$/i)

    let name = indexMatch ? indexMatch[1] : nameMatch[1]

    name = name.replaceAll('/', '-')

    components[name] = modules[key]
  })
  return components
}

export default mapping
