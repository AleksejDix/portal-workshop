<template>
  <div>
    <router-link :to="{ name: 'video', params: { id: video.id } }">
      <img :src="video.image.url" :alt="video.title" class="rounded w-full" />
      <h2 class="pt-4 px-2">{{ video.title }}</h2>
    </router-link>
    <div
      v-if="isScreenMode"
      class="inset-0  font-bold flex items-center justify-center"
    >
      <Button @click="sendToPortalTarget(video)">
        play
      </Button>
    </div>
  </div>
</template>

<script>
import { Wormhole } from "portal-vue";
export default {
  props: ["video"],
  computed: {
    isScreenMode() {
      return Wormhole.hasContentFor("second-screen");
    }
  },
  methods: {
    sendToPortalTarget(video) {
      if (this.$route.name !== "home") {
        this.$router.push({ name: "home" });
      }

      const passengers = [
        this.$createElement("Screen", { props: { video } }, null)
      ];

      Wormhole.open({
        to: "second-screen",
        from: "first-screen",
        passengers
      });
    }
  }
};
</script>

<style></style>
