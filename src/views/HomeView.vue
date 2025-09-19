<script lang="ts" setup>
import { getAuth, signOut } from 'firebase/auth'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const auth = getAuth()

const handleLogout = async () => {
  try {
    await signOut(auth)
    console.log('User signed out successfully')
    router.push({ name: 'FireLogin' })
  } catch (error) {
    console.error('Error signing out:', error)
    alert('Failed to sign out. Please try again.')
  }
}

onMounted(() => {
  console.log(`Current user: ${auth.currentUser ? auth.currentUser.email : 'No user logged in'}`)

  if (!auth.currentUser) {
    router.push({ name: 'FireLogin' })
  }
})
</script>

<template>
  <div>
    <h1>Welcome to the Library</h1>
    <p>This is the home page without the login form.</p>
    <button @click="handleLogout">Log Out</button>
    <router-link to="/FireLogin">Go to Login</router-link>
  </div>
</template>
