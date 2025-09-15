<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8 offset-md-2 d-flex flex-column gap-4">
        <h1 class="text-center">User Information Form / Credentials</h1>
        <form @submit.prevent="handleSubmit" class="d-flex flex-column gap-4">
          <div class="d-flex gap-2">
            <div class="flex-fill d-flex gap-2 align-items-center">
              <label for="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                class="flex-grow-1"
                v-model="formData.username"
              />
            </div>
            <div class="flex-fill d-flex gap-2 align-items-center">
              <label for="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                class="flex-grow-1"
                v-model="formData.password"
              />
            </div>
          </div>

          <div class="d-flex gap-2">
            <div class="flex-fill d-flex gap-2 align-items-center">
              <div class="form-check">
                <label for="isAustralian">Australian Resident?</label>
                <input
                  type="checkbox"
                  id="isAustralian"
                  name="isAustralian"
                  class="form-check-input"
                  v-model="formData.isAustralian"
                />
              </div>
            </div>
            <div class="flex-fill d-flex gap-2 align-items-center">
              <label for="gender">Gender</label>
              <select id="gender" class="form-select" v-model="formData.gender">
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label for="reason" class="form-label">Reason For Joining:</label>
            <textarea
              id="reason"
              class="form-control"
              name="reason"
              rows="3"
              v-model="formData.reason"
            ></textarea>
          </div>

          <div class="d-flex justify-content-center gap-2">
            <button type="submit" class="btn btn-primary">Submit</button>
            <button type="button" class="btn btn-secondary" @click="handleClear">Clear</button>
          </div>
        </form>

        <div class="mt-5" v-if="submittedCards.length">
          <div class="d-flex flex-wrap justify-content-start">
            <div
              v-for="(card, index) in submittedCards"
              :key="index"
              class="card m-2"
              style="width: 18rem"
            >
              <div class="card-header">User Information</div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Username: {{ card.username }}</li>
                <li class="list-group-item">Password: {{ card.password }}</li>
                <li class="list-group-item">
                  Australian Resident: {{ card.isAustralian ? 'Yes' : 'No' }}
                </li>
                <li class="list-group-item">Gender: {{ card.gender }}</li>
                <li class="list-group-item">Reason: {{ card.reason }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

type FormData = {
  username: string
  password: string
  isAustralian: boolean
  reason: string
  gender: string
}

const formData = ref<FormData>({
  username: '',
  password: '',
  isAustralian: false,
  reason: '',
  gender: '',
})

const submittedCards = ref<FormData[]>([])

const handleSubmit = () => {
  submittedCards.value.push({
    ...formData.value,
  })
}

const handleClear = () => {
  Object.assign(formData.value, {
    username: '',
    password: '',
    isAustralian: false,
    gender: '',
    reason: '',
  })
}
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.card-header {
  background-color: #275fda;
  color: white;
  padding: 10px;
  border-radius: 10px 10px 0 0;
}
.list-group-item {
  padding: 10px;
}
</style>
