<template>
  <div id="app">
    <button @click="onEarth = !onEarth">Beam!</button>

    <input v-model="broadcast" />

    <MountingPortal mountTo="#universe" name="source">
      <p>{{ broadcast }}</p>
    </MountingPortal>

    <div class="box portal">
      <h1>New Planet</h1>
      <portal-target slim ref="modal" name="modal" @change="beamed" />
    </div>

    <div class="box normal">
      <h1>Enterprise</h1>
      <portal slim to="modal" :disabled="onEarth">
        <div>Kirk <span>No intelegent life here! Beam me up Scotty</span></div>
      </portal>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      onEarth: false,
      broadcast: ""
    };
  },
  methods: {
    beamed() {
      // .getBoundingClientRect()
      console.log(this.$refs.modal);
    }
  }
};
</script>

<style>
.box {
  border-radius: 4px;
  padding: 16px;
  border-style: solid;
  border-width: 1px;
}

.portal {
  border-color: red;
}

.normal {
  border-color: green;
}
</style>
