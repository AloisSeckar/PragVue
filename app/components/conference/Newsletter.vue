<template>
  <LayoutContainer>
    <LayoutContainerContent>
      <div class="flex flex-col items-center">
        <UiHeading2026 class="mb-6 text-vue">
          {{ $t('subscribe.title') }}
        </UiHeading2026>

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
                  <p>{{ $t('subscribe.consent.foreword') }}</p>
                  <ul class="list-disc list-outside pl-5 my-2">
                    <li class="mb-1">
                      {{ $t('subscribe.consent.point1') }}
                    </li>
                    <li class="mb-1">
                      {{ $t('subscribe.consent.point2') }}
                    </li>
                    <li class="mb-1">
                      {{ $t('subscribe.consent.point3') }}
                    </li>
                    <li class="mb-1">
                      {{ $t('subscribe.consent.point4') }}
                    </li>
                    <li class="mb-1">
                      {{ $t('subscribe.consent.point5') }}
                    </li>
                    <li class="mb-1">
                      {{ $t('subscribe.consent.point6') }}
                    </li>
                  </ul>
                  <p>{{ $t('subscribe.consent.afterword') }}</p>
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
