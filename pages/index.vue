<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="max-w-lg p-6 drop-shadow-md shadow-lg shadow-green-500/50">
      <h2
        class="text-2xl text-green-600 font-bold underline underline decoration-wavy decoration-blue-500/30 mb-4"
      >
        Testing tailwind css3 updated version
      </h2>
      <p>
        I’m Tara Parasd Routray, a full-stack developer based in India. I love
        to build amazing websites keeping
        <!-- Utilties used: underline, decoration-sky-500 -->
        <a class="underline decoration-sky-500">performance and security</a> in
        mind.
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
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
});
</script>
