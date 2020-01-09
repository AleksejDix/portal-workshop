<template>
  <div class="relative">
    <img :src="video.image.url" :alt="video.title" class="rounded" />
    <h2 class="pt-4 px-2">{{ video.title }}</h2>
    <Button @click="isOpen = !isOpen">play</Button>

    <!-- <div
      v-if="isOpen"
      class="modal flex items-center justify-center absolute top-0 left-0 right-0 h-full w-full"
    >
      <Button
        @click="isOpen = false"
        class="bg-yellow-400 p-4 text-black m-4 top-0 right-0 absolute"
      >
        close
      </Button>
      <iframe
        class="iframe"
        :src="`https://www.youtube.com/embed/${video.id}?autoplay=1`"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div> -->

    <portal to="modal">
      <div
        v-if="isOpen"
        class="modal flex items-center justify-center absolute inset-0"
      >
        <Button @click="isOpen = false">
          close
        </Button>
        <iframe
          class="iframe"
          :src="`https://www.youtube.com/embed/${video.id}?autoplay=1`"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </portal>
  </div>
</template>

<script>
export default {
  props: ["video"],
  data() {
    return {
      isOpen: false
    };
  }
};
</script>

<style>
.modal {
  background-color: rgba(0, 0, 0, 0.5);
}
.iframe {
  width: 800px;
  height: 450px;
}
</style>
