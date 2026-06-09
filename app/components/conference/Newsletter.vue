<template>
  <LayoutContainer>
    <LayoutContainerContent>
      <div class="flex flex-col items-center">
        <UiHeading2026 class="mb-6 text-vue">
          {{ $t('subscribe.title') }}
        </UiHeading2026>

        <div v-if="success" class="text-vue text-center">
          {{ $t('subscribe.success') }}
        </div>

        <UForm
          v-else :state="state" :validate="validate" class="w-full max-w-sm space-y-4"
          @submit="onSubmit"
        >
          <UFormField label="Email" name="email">
            <UInput v-model="state.email" type="email" :placeholder="$t('subscribe.email_placeholder')" class="w-full" />
          </UFormField>

          <UFormField name="terms">
            <UCheckbox v-model="state.terms" :label="$t('subscribe.terms')" :ui="{ label: 'text-justify' }" />
          </UFormField>

          <div v-if="error" class="text-red-400 text-sm">
            {{ error }}
          </div>

          <UButton type="submit" :label="$t('subscribe.submit')" :loading="loading" block />
        </UForm>
      </div>
    </LayoutContainerContent>
  </LayoutContainer>
</template>

<script setup lang="ts">
interface FormState {
  email: string
  terms: boolean
}

const state = reactive<FormState>({
  email: '',
  terms: false,
})

const loading = ref(false)
const success = ref(false)
const error = ref('')

function validate(s: FormState) {
  const errors = []
  if (!s.email) {
    errors.push({ name: 'email', message: $t('subscribe.valiation.email_required') })
  }
  if (!s.terms) {
    errors.push({ name: 'terms', message: $t('subscribe.valiation.terms_required') })
  }
  return errors
}

async function onSubmit() {
  loading.value = true
  error.value = ''
  try {
    await $fetch('/api/subscribe', {
      method: 'POST',
      body: { email: state.email },
    })
    success.value = true
  }
  catch (e) {
    console.error(e)
    error.value = $t('subscribe.error')
    loading.value = false
  }
}
</script>
