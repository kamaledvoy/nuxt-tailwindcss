<template>
  <div class="fixed w-56 text-right top-16">Menu</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component({
  components: {},
})
export default class MenuComp extends Vue {
  @Prop({ type: Object, default: null })
  readonly menuitems!: any;
}
</script>
