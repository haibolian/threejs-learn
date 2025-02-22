<script setup>
import { onMounted } from 'vue';
import World from './world'

onMounted(() => {
  const world = new World(document.querySelector('#canvas'))
  world.start()
})


</script>

<template>
  <div style="width: 100%; height: 100%;" id="canvas"></div>
</template>
