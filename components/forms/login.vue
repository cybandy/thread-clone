<script lang="ts" setup>
import type { FormError, FormSubmitEvent } from '#ui/types'
const props = defineProps({
  email: String,
  password: String,
  name: String,
  username: String
})

const emits = defineEmits(['update:email', 'update:password', 'login', 'register', 'update:name', 'update:username'])

const email = computed({
  set: (val) => emits('update:email', val),
  get: () => props.email
})
const password = computed({
  set: (val) => emits('update:password', val),
  get: () => props.password
})
const name = computed({
  set: (val) => emits('update:name', val),
  get: () => props.name
})
const username = computed({
  set: (val) => emits('update:username', val),
  get: () => props.username
})

const validate = (): FormError[] => {
  const errors = []
  if (!email.value) {
    errors.push({ path: 'email', message: 'Required' })
  }
  else if (!email.value?.includes('@') || !email.value?.includes('.')) {
    errors.push({ path: 'email', message: 'Invalid email' })
  }
  if (!password.value) errors.push({ path: 'password', message: 'Required' })
  else if (password.value.length < 8) {
    errors.push({
      path: 'password', message: 'Must be at least 8 characters'
    })
  }
  // if (!name.value) errors.push({ path: 'name', message: 'Required' })
  // if (!username.value) errors.push({ path: 'username', message: 'Required' })
  return errors
}

</script>

<template>
  <UForm :state="{ email, password }" :validate="validate">
    <div class="space-y-4">
      <!-- <UFormGroup label="Username" name="username">
        <UInput v-model="username" autocomplete="username" placeholder="@qb" />
      </UFormGroup>

      <UFormGroup label="Name" name="name">
        <UInput v-model="name" autocomplete="name" />
      </UFormGroup> -->

      <UFormGroup label="Email" name="email">
        <UInput v-model="email" autocomplete="username" />
      </UFormGroup>

      <UFormGroup label="Password" name="password">
        <UInput v-model="password" type="password" autocomplete="current-password" />
      </UFormGroup>

      <UButton label="Log in" color="gray" block type="submit" @click="() => emits('login', email, password)" />

      <!-- <UDivider label="OR" class="pm-4" /> -->

      <UButton class="" label="Sign up" color="gray" block type="submit"
        @click="() => emits('register', email, password)" />
    </div>
  </UForm>
</template>

<style scoped></style>
