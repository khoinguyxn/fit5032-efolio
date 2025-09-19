<script setup lang="ts">
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const auth = getAuth()

const email = ref('')
const password = ref('')

const signIn = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value)

    console.log('Signed in user:', userCredential.user)

    router.push({ name: 'Home' })
  } catch (error) {
    console.error('Error signing in:', error)
    alert('Failed to sign in. Please check your credentials and try again.')
  }
}
</script>

<template>
  <h1>Sign In</h1>
  <form @submit.prevent="signIn" class="grid gap-2 p-4">
    <input placeholder="Email" v-model="email" class="border" />
    <input placeholder="Password" type="password" v-model="password" class="border" />
    <button type="submit">Sign In via Firebase</button>
  </form>
</template>
