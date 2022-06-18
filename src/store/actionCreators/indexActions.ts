import * as AuthActionCreators from './AuthActions'
import * as ProfileActionCreators from './ProfileActions'
import * as UsersActionCreators from './UsersActions'

export default {
  ...AuthActionCreators,
  ...ProfileActionCreators,
  ...UsersActionCreators
}