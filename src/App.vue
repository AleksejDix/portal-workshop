<template>
  <div id="app" class="container p-4">
    <section class="rounded-lg overflow-hidden border  bg-white">
      <header id="nav" class="px-8 pt-4">
        <h1 class="text-2xl text-black font-medium">
          <portal-target name="title"></portal-target>
        </h1>
      </header>
      <nav class="flex px-8 tabs border-b">
        <router-link class="tab" active-class="active" to="/" exact
          >Home</router-link
        >
        <router-link class="tab" active-class="tab active" to="/about"
          >About</router-link
        >
        <router-link class="tab" active-class="tab active" to="/universe"
          >Take me to other universe</router-link
        >
      </nav>
      <div>
        <router-view />
      </div>
    </section>

    <!-- <portal-target name="modal"></portal-target> -->

    <portal-target name="second-screen"></portal-target>
  </div>
</template>

<style>
.tab {
  @apply px-3 py-2 text-sm text-gray-700;
}
.tab.active {
  @apply text-black border-b-4 border-green-500 font-bold;
}
</style>
