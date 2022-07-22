import * as AuthActionCreators from './AuthActions'
import * as ProfileActionCreators from './ProfileActions'
import * as UsersActionCreators from './UsersActions'
import * as MusicActionCreators from './MusicActions'

export default {
  ...AuthActionCreators,
  ...ProfileActionCreators,
  ...UsersActionCreators,
  ...MusicActionCreators
}