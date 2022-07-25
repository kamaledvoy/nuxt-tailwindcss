<template>
  <div>
    <AlertBox />
    <div class="flex items-center justify-center min-h-screen">
      <div class="max-w-lg p-6 shadow-lg drop-shadow-md shadow-green-500/50">
        <h2
          class="mb-4 text-2xl font-bold text-green-600 underline decoration-wavy decoration-blue-500/30"
        >
          Testing tailwind css3 updated version
        </h2>
        <p>
          I’m Tara Parasd Routray, a full-stack developer based in India. I love
          to build amazing websites keeping
          <!-- Utilties used: underline, decoration-sky-500 -->
          <a class="underline decoration-sky-500">performance and security</a>
          in mind.
          <!-- Utilties used: underline, decoration-pink-500 -->
          Outside of work, I love to
          <a class="underline decoration-pink-500"
            >watch Nextflix
            <!-- Utilties used: underline, decoration-indigo-500 -->
          </a>
          and play
          <a class="underline decoration-indigo-500">outdoor games</a> with my
          friends.
        </p>
      </div>
    </div>

    <Accordion
      v-for="(item, index) in list"
      :key="item.id"
      :item="item"
      :active-index="currentlyActiveIndex"
      :item-index="index"
      @update:itemIndex="currentlyActiveIndex = $event"
    ></Accordion>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";
import AlertBox from "~/components/common/alert-box.vue";
import Accordion from "../components/common/accordion.vue";

@Component({
  components: { AlertBox, Accordion },
})
export default class Home extends Vue {
  list = [
    { id: 1, name: "hello" },
    { id: 2, name: "world" },
    { id: 3, name: "swag" },
  ];

  currentlyActiveIndex = null;
}
</script>
