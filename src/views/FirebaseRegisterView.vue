<script lang="ts" setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const auth = getAuth()

const email = ref('')
const password = ref('')

const signIn = async () => {
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value)
    router.push({ name: 'Home' })
  } catch (error) {
    console.error('Error registering:', error)
    alert('Failed to register. Please check your credentials and try again.')
  }
}
</script>

<template>
  <h1>Register</h1>
  <input placeholder="Email" v-model="email" />
  <input placeholder="Password" type="password" v-model="password" />
  <button @click="signIn">Register via Firebase</button>
</template>
