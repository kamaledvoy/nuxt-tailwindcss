<template>
  <div class="flex flex-col">
    <Button
      type="button"
      class="space-y-2 bg-gray-200 border border-gray-400"
      @click="updateIndex"
      >get this index: {{ itemIndex }}</Button
    >
    <span v-show="activeIndex === itemIndex">{{ item.name }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component({
  components: {},
})
export default class Accordion extends Vue {
  @Prop({ type: Object, default: () => {} }) readonly item!: object;
  @Prop({ type: Number, default: null }) readonly activeIndex!: number;
  @Prop({ type: Number, default: null }) readonly itemIndex!: number;

  updateIndex() {
    this.$emit("update:itemIndex", this.itemIndex);
  }
}
</script>
