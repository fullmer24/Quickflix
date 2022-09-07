import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /**@type {import('./models/Account.js').Account} */
  account: {},

  /**@type {import('./models/Content.js').Content} */

  // this is for content from ott api
  contents: [],

// this is for our backend api
  myContent: [],

  groupContents: [],

  groups: [],

  activeGroup: {}

})
