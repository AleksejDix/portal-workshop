<template>
  <button
    v-on="$listeners"
    v-bind="$attrs"
    class="bg-purple-500 text-white rounded py-3 px-6"
  >
    <slot />
  </button>
</template>
