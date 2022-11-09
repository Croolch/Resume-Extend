<template>
  <div>
    <span>姓名：</span>
    <input>
    <button @click="selectDom"></button>
  </div>
</template>

<script lang="ts">
import DomInspector from 'dom-inspector';
export default {
  name: 'App',
  setup() {
    const inspector = new DomInspector();
    function selectDom(): void {
      inspector.enable();
      document.body.addEventListener("mousedown", function (e) {
        var px: number = e.pageX;
        var py: number = e.pageY;
        alert(inspector.getXPath(<HTMLElement>document.elementFromPoint(px, py)))
        alert(inspector.getSelector(<HTMLElement>document.elementFromPoint(px, py)))
      });
    }
    return {
      selectDom,
    }
  }
}
</script>

<style>

</style>