import { firestoreAction } from 'vuexfire'
import firebase from 'firebase/app'
import 'firebase/firestore'

export const getUsers = firestoreAction(async ({ bindFirestoreRef, state }) => {
  await bindFirestoreRef('usersCollection', firebase.firestore().collection('users'))
})

export const getCurrentUser = firestoreAction(async ({ bindFirestoreRef }) => {
  await bindFirestoreRef('currentUser', firebase.firestore().collection('users').doc('KfpFUPVdvkFikRETYwvw'))
})
