const sidebarOpened = state => state.app.sidebar.opened
const toggleWithoutAnimation = state => state.app.sidebar.withoutAnimation
const config = state => state.app.config
const palette = state => state.app.config.palette
const isLoading = state => state.app.isLoading
const isLoggedIn = state => state.app.isLoggedIn
const getUser = state => state.app.user

export {
  getUser,
  isLoggedIn,
  toggleWithoutAnimation,
  sidebarOpened,
  config,
  palette,
  isLoading
}
