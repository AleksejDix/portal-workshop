<template>
  <div class="container mx-auto">
    <div class="bg-black p-4">
      <Button
        @click="sendToPortalTarget({ id: $route.params.id })"
        class="bg-yellow-400 p-4 text-black"
      >
        screen in screen mode
      </Button>
    </div>

    <iframe
      class="w-full"
      :style="{ height: '500px' }"
      :src="`https://www.youtube.com/embed/${$route.params.id}?autoplay=1`"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
import { Wormhole } from "portal-vue";
export default {
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
