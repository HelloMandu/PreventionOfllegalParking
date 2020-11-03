// import React, { useEffect } from 'react'
// import firebase from 'firebase'
// import { useHistory } from 'react-router-dom'
// import { console } from 'window-or-global'

// const Logout = () => {
//   console.log('asdf')
//   let user = firebase.auth().currentUser
//   console.log(user)
//   const history = useHistory()
//   if (user === null) {
//     history.push('/')
//   }
//   useEffect(() => {
//     firebase
//       .auth()
//       .signOut()
//       .then(function () {
//         console.log('Logout')
//         history.push('/')
//         // Sign-out successful.
//       })
//       .catch(function (error) {
//         console.error(error)
//         // An error happened.
//       })
//   }, [])
//   return <></>
// }

// export default Logout
