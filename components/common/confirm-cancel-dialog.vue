<template>
  <UIModal
    v-model="showFormConfirmationDialog"
    type="plain"
    persistent
    class="relative z-50 confirm-modal"
  >
    <template #header>
      <h1 class="text-xl font-medium">Are you sure want to cancel?</h1>
    </template>
    <template #body>
      <UIButton color="primary" @click="onCancel">Yes</UIButton>
      <UIButton
        color="secondary"
        class="ml-2"
        @click="showFormConfirmationDialog = false"
        >No</UIButton
      >
    </template>
  </UIModal>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "nuxt-property-decorator";
import { UIModal, UIButton } from "@edvoy-ui/edvoy-ui";

@Component({
  components: { UIModal, UIButton },
})
export default class ConfirmCancelDialog extends Vue {
  @Prop({ type: Object, default: null })
  readonly store!: any;

  @Prop({ type: Boolean, default: null })
  readonly isExited?: boolean;

  @Watch("isExited", { immediate: true })
  onChageExit(val: boolean) {
    this.store.SET_FORM_CONFIRMATION_DIALOG(val);
  }

  get showFormConfirmationDialog() {
    return this.store.showFormConfirmationDialog;
  }

  set showFormConfirmationDialog(x: boolean) {
    this.store.SET_FORM_CONFIRMATION_DIALOG(x);
  }

  onCancel() {
    this.showFormConfirmationDialog = false;
    this.$emit("cancelled");
  }
}
</script>
