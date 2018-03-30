'use strict'
import createNavbar from './createNavbar'
import createMain from './createMain'
import createFooter from './createFooter'
import addMeta from './addHeadMeta'

export default () => {
  addMeta()
  createNavbar()
  createMain()
  createFooter()
}
