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
      const contentCard = document.getElementById('resume-extension-app');
      if (contentCard === null) {
        console.log("未找到content");
        return;
      }
      const bg = chrome.extension.getBackgroundPage();

      // 交换flex和none状态
      const displayStyle = contentCard.style.display;
      contentCard.style.display = displayStyle === "flex" ? "none" : "flex";

      console.log("switched display style");
      bg.sendSwitchDisplay();
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