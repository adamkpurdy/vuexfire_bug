<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'PageIndex',
  async mounted () {
    debugger
    await this.getUsers()
    await this.getCurrentUser()
    const usersFromState = this.$store.state.users.usersCollection
    console.group('FIRESTORE USERS COLLECTION LENGTH:', usersFromState.length)
    console.group('CURRENT USER IN STATE', this.$store.state.users.currentUser)
  },
  methods: {
    ...mapActions('users', ['getCurrentUser', 'getUsers'])
  }
}
</script>
