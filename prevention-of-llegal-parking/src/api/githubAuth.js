import firebase from 'firebase'
import { auth } from './googleAuth'

let provider = new firebase.auth.GithubAuthProvider()

provider.setCustomParameters({
  display: 'popup',
})

export const signInWithGithub = () => {
  auth
    .signInWithPopup(provider)
    .then((res) => {
      let token = res.credential.accessToken
      let user = res.user
      console.log(user)
    })
    .catch((err) => {
      let code = err.code
      let message = err.message
      let email = err.email
      let credential = err.credential
    })
}

export default firebase
