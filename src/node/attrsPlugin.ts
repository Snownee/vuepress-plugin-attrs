import type { Plugin, PluginObject } from '@vuepress/core'
import attrs from 'markdown-it-attrs'
import spans from 'markdown-it-bracketed-spans'

export interface MarkdownItAttrsOptions {
  leftDelimiter?: string
  rightDelimiter?: string
  allowedAttributes?: string[]
}

export const attrsPlugin: Plugin<MarkdownItAttrsOptions> = (options) => {
  const pluginObj: PluginObject = {
    name: 'vuepress-plugin-attrs',
  }

  pluginObj.extendsMarkdown = (md) => {
    md.use(attrs, options)
      .use(spans)
  }

  return pluginObj
}
