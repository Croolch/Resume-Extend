<template>
  <div class="card">
    <div class="info-item">
      <span>姓名：</span>
      <input id="testid" class="testclass">
      <button @click="selectDom"></button>
    </div>
  </div>
</template>

<script lang="ts">
import DomInspector from 'dom-inspector';
export default {
  name: 'ContentScript',
  setup() {
    const inspector = new DomInspector();
    function selectDom(): void {
      inspector.enable();

      function onceHandler() {
        // var px: number = e.pageX;
        // var py: number = e.pageY;
        // alert(inspector.getXPath(<HTMLElement>document.elementFromPoint(px, py)))
        // alert(inspector.getSelector(<HTMLElement>document.elementFromPoint(px, py)))
        inspector.pause();
        console.log(inspector.target);
      }

      const once = {
        once: true
      };
      
      document.body.addEventListener("mousedown", onceHandler, once);
    }
    return {
      selectDom,
    }
  }
}
</script>

<style scoped>
.card {
  position: fixed;
  z-index: 999;
  top: 20%;
  right: 0;

  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  width: 25%;
  height: 60%;
}

.info-item {
  display: flex;
  align-content: space-between;
}
</style>