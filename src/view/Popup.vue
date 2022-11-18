<template>
  <div class="resume-switcher">
    <button @click="switchDisplayContent">显示/关闭</button>
  </div>
</template>

<script lang="ts">

export default {
  name: 'PopUp',
  setup() {
    function switchDisplayContent() {
      console.log("switched display style");    
    }
    return {
      switchDisplayContent
    }
  }
}
</script>

<style>
.resume-switcher {
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
}
</style>