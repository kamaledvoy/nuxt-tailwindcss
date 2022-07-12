<template>
  <div class="flex items-center justify-center w-screen h-screen">
    <div
      class="w-full max-w-md p-10 bg-white border border-gray-200 shadow-md rounded-xl drop-shadow-2xl"
    >
      <h2 class="mb-2 text-xl font-bold text-gray-900">Welcome back</h2>
      <p class="mb-2 text-sm font-normal text-gray-600">
        Jump back to the nuxt app, and start managing your projects.
      </p>

      <form>
        <div class="w-full my-4 form-group">
          <input
            v-model="email"
            type="email"
            class=""
            placeholder="email address"
            required
            name="email"
          />
          <label for="email">Email</label>
        </div>
        <div class="w-full my-4 form-group">
          <input
            v-model="password"
            type="password"
            class="w-full h-12 px-2 border border-gray-500 rounded-md outline-none"
            placeholder="**** password"
            required
            name="password"
          />
          <label for="password">Password</label>
        </div>
        <button
          type="submit"
          class="w-full px-2 py-2 my-4 text-lg font-normal text-white bg-blue-800 border border-blue-900 rounded-md outline-none hover:bg-blue-900"
          :disabled="disabled"
        >
          {{ disabled ? "Please wait..." : "Sign in" }}
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component({
  components: {},
})
export default class LoginFormComponent extends Vue {
  @Prop({ type: Object, default: null })
  readonly menuitems!: any;
}
</script>

<style lang="scss">
.form-group {
  @apply w-full h-full relative inline-flex;
  label {
    transition: 0.3s;
    border-radius: 4px;
    cursor: text;
    @apply absolute z-0 top-0 left-0 w-full h-full py-3.5 px-3 text-base font-normal pointer-events-none border;
  }
  input {
    border-radius: 4px;
    margin: 1px 1px 0 1px;
    @apply text-base font-normal relative leading-none
      w-full h-full px-3 py-3 border-2 border-transparent outline-none;
    &::placeholder {
      color: white;
    }
    &:focus-visible,
    &:focus,
    &:hover {
      &::placeholder {
        @apply text-gray-500;
      }
      @apply border-blue-600 border-2;
    }
  }
  input:hover ~ label,
  input:focus ~ label,
  input:focus-visible ~ label,
  input:valid ~ label {
    @apply -top-1.5 left-3 bg-white text-sm font-normal text-blue-600 px-1.5  py-0 w-fit h-auto leading-3 border-transparent;
  }
}
</style>
