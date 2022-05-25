import { DefineComponent } from 'vue'

declare module '*.vue' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare global {
  interface Window {
    $message: any
  }
}

declare global {
  interface Navigator {
    msSaveBlob?: (blob: any, defaultName?: string) => boolean
  }
}

declare namespace jquery {}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
