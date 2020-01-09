<template>
  <div class="fixed right-0 bottom-0 border-2 border w-128 shadow-lg bg-white">
    <div class="bg-gray-900 text-white p-4 flex  justify-end">
      <Button class="mr-4" @click="goToVideo">
        go to video
      </Button>
      <Button @click="close">
        close
      </Button>
    </div>
    <iframe
      class="w-full"
      :style="{ height: '285px' }"
      :src="`https://www.youtube.com/embed/${video.id}?autoplay=1`"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <div class="bg-gray-900 text-white p-4">
      {{ video.title }}
    </div>
  </div>
</template>

<script>
import { Wormhole } from "portal-vue";
export default {
  props: {
    video: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    goToVideo() {
      this.$router.push({ name: "video", params: { id: this.video.id } });
      this.close();
    },
    close() {
      Wormhole.close({
        to: "second-screen",
        from: "first-screen"
      });
    }
  }
};
</script>

<style></style>
