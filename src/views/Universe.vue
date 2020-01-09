<template>
  <div class="p-4">
    <h1 class="text-red-500 text-6xl">{{ counter }}</h1>
    <Button @click="makeABlackWhole">
      curve the space time!
      {{ showUniverse ? "Close the" : "Open a" }} Portal
    </Button>

    <portal to="universe">
      <div class="p-8">
        <div
          class="rounded border-red-500 border-2 bg-red-100 text-red-500 p-4"
        >
          Here could be your add!
        </div>
      </div>
    </portal>

    <portal to="universe">
      <div class="p-8">
        <h1 class="text-red-500 text-6xl">Counter: {{ counter * 2 }}</h1>
        <p class="text-black text-4xl leading-tight">
          Even though I render in a different universe, I share state!
        </p>
        <div class="p-2">
          <Button @click="showUniverse = false">
            Close me!
          </Button>
        </div>
      </div>
    </portal>
    <ParallelUniverse v-if="showUniverse" />
  </div>
</template>

<script>
import ParallelUniverse from "@/components/ParallelUniverse";
export default {
  components: {
    ParallelUniverse
  },
  data() {
    return {
      counter: 10,
      showUniverse: false
    };
  },
  mounted() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  },
  methods: {
    makeABlackWhole() {
      this.showUniverse = !this.showUniverse;
    }
  }
};
</script>

<style></style>
