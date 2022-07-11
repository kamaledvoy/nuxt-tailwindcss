<template>
  <LoginFormComponent />
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";
import LoginFormComponent from "~/components/pages/login-form.vue";

@Component({
  components: {
    LoginFormComponent,
  },
})
export default class LoginPage extends Vue {}
</script>
