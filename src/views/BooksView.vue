<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '@/main'

const isbn = ref('')
const name = ref('')

const handleAddBook = async () => {
  try {
    const isbnNumber = Number(isbn.value)
    if (isNaN(isbnNumber)) {
      alert('ISBN must be a valid number.')
      return
    }

    await addDoc(collection(db, 'books'), {
      isbn: isbnNumber,
      name: name.value,
    })

    alert('Book added successfully!')
    isbn.value = ''
    name.value = ''
  } catch (error) {
    console.error('Error adding book:', error)
    alert('Failed to add book. Please try again.')
  }
}

const books = ref<Array<{ isbn: number; name: string }>>([])

const queryBooks = async () => {
  try {
    const q = query(collection(db, 'books'), where('isbn', '>', 10))
    const querySnapshot = await getDocs(q)
    books.value = querySnapshot.docs.map((doc) => doc.data() as { isbn: number; name: string })
  } catch (error) {
    console.error('Error querying books:', error)
    alert('Failed to query books. Please try again.')
  }
}

onMounted(() => {
  queryBooks()
})
</script>

<template>
  <div class="grid gap-2 p-4">
    <h1>Add Book</h1>
    <form @submit.prevent="handleAddBook" class="grid gap-2">
      <div class="flex gap-2">
        <label for="isbn">ISBN: </label>
        <input id="isbn" type="text" v-model="isbn" required class="border" />
      </div>
      <div class="flex gap-2">
        <label for="name">Name: </label>
        <input id="isbn" type="text" v-model="name" required class="border" />
      </div>
      <button type="submit" class="bg-neutral-400">Add Book</button>
    </form>
  </div>

  <div class="grid gap-2 p-4">
    <h1>List Books with ISBN > 10</h1>
    <ul>
      <li v-for="book in books" :key="book.isbn">ISBN: {{ book.isbn }}, Name: {{ book.name }}</li>
    </ul>
  </div>
</template>
