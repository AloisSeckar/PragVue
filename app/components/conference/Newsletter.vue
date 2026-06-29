<template>
  <LayoutContainer>
    <div class="flex flex-col items-center">
      <UiHeading class="mb-6 text-vue">
        {{ $t('subscribe.title') }}
      </UiHeading>

      <ClientOnly>
        <div v-if="success" class="text-vue text-center">
          {{ $t('subscribe.success') }}
        </div>

        <UForm
          v-else :state="state" :validate="validate" class="w-full max-w-143 space-y-4"
          @submit="onSubmit"
        >
          <UFormField :label="$t('subscribe.email')" name="email">
            <UInput v-model="state.email" type="email" :placeholder="$t('subscribe.email_placeholder')" class="w-full" />
          </UFormField>

          <UFormField name="terms">
            <UCheckbox v-model="state.terms" :ui="{ label: 'text-justify' }">
              <template #label>
                <p class="mb-2">
                  {{ $t('subscribe.consent.short') }}
                </p>
                <details>
                  <summary class="cursor-pointer text-vue-light font-semibold">
                    {{ $t('subscribe.consent.details') }}
                  </summary>
                  <p class="mt-2">
                    {{ $t('subscribe.consent.pt1') }}
                  </p>
                  <ul class="list-disc list-outside pl-5 my-2">
                    <li class="mb-1">
                      {{ $t('subscribe.consent.pt2') }}
                    </li>
                    <li class="mb-1">
                      {{ $t('subscribe.consent.pt3') }}
                    </li>
                  </ul>
                  <p class="mb-2">
                    {{ $t('subscribe.consent.pt4') }}
                  </p>
                  <p class="mb-2">
                    {{ $t('subscribe.consent.pt5') }}
                  </p>
                  <ul class="list-disc list-outside pl-5 my-2">
                    <li class="mb-1">
                      {{ $t('subscribe.consent.pt6') }}
                    </li>
                  </ul>
                  <p class="mb-2">
                    {{ $t('subscribe.consent.pt7') }}
                  </p>
                  <p class="mb-2">
                    {{ $t('subscribe.consent.pt8') }}
                  </p>
                  <p class="mb-2">
                    {{ $t('subscribe.consent.pt9') }}
                  </p>
                </details>
              </template>
            </UCheckbox>
          </UFormField>

          <div v-if="error" class="text-red-400 text-sm">
            {{ error }}
          </div>

          <UButton type="submit" :label="$t('subscribe.submit')" :loading="loading" block />
        </UForm>
      </ClientOnly>
    </div>
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
    errors.push({ name: 'email', message: $t('subscribe.validation.email_required') })
  }
  if (!s.terms) {
    errors.push({ name: 'terms', message: $t('subscribe.validation.terms_required') })
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
