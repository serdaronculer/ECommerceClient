/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
   declare global {
    interface Window { alertify: any;}
  }
  export default component
}


