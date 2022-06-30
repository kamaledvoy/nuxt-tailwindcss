<template>
  <div v-if="alertOpen" class="relative z-0 w-full max-w-lg m-auto">
    <div
      class="absolute inset-x-0 z-10 p-3 mx-auto rounded-md top-20 bg-grey-700"
    >
      <div class="flex">
        <div class="flex-shrink-0">
          <InfoIcon class="w-5 h-5 text-white" aria-hidden="true" />
        </div>
        <div class="ml-3">
          <p class="text-base font-medium text-white">
            You are not currently managing this student
          </p>
        </div>
        <div class="pl-3 ml-auto">
          <div class="-mx-1.5 -my-1.5">
            <button
              type="button"
              class="inline-flex rounded-md p-1.5 text-white border-none focus:outline-none"
              @click="alertDialog"
            >
              <XIcon class="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import InfoIcon from 'vue-material-design-icons/Information.vue'
import ErrorIcon from 'vue-material-design-icons/AlertOctagonOutline.vue'
import WarningIcon from 'vue-material-design-icons/AlertOutline.vue'
import SuccessIcon from 'vue-material-design-icons/CheckCircleOutline.vue'
import XIcon from 'vue-material-design-icons/Close.vue'

@Component({
  components: { SuccessIcon, InfoIcon, ErrorIcon, WarningIcon, XIcon },
})
export default class AlertBox extends Vue {
  alertOpen = true

  created() {
    setTimeout(() => (this.alertOpen = false), 2500)
  }

  alertDialog() {
    this.alertOpen = !this.alertOpen
  }

  alertMsg = [
    { name: 'Success', icon: 'SuccessIcon', class: 'bg-green-500', msg: '' },
    { name: 'Error', icon: 'ErrorIcon', class: 'bg-red-500', msg: '' },
    { name: 'Warning', icon: 'WarningIcon', class: 'bg-yellow-300', msg: '' },
    { name: 'Info', icon: 'InfoIcon', class: 'bg-grey-700', msg: '' },
  ]
}
</script>
