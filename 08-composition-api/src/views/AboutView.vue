<template>
  <div class="about">
    <h1>{{ title }}</h1>
    <button @click="onChangeTitle">change Title</button>
  </div>
</template>

<script>
import {
  onMounted,
  onUpdated,
  onUnmounted,
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  onActivated,
  onDeactivated,
  onServerPrefetch,
  ref,
} from 'vue';

export default {


  setup() {

    const title = ref('About');

    console.log('setup se llamó');

    onMounted(() => {
      console.log('onMounted');
    });
    onUpdated(() => {
      console.log('onUpdated');
    });
    onUnmounted(() => {
      console.log('onUnmounted');
    });
    onBeforeMount(() => {
      console.log('onBeforeMount');
    });
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    });
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount');
    });
    onErrorCaptured(() => {
      console.log('onErrorCaptured');
    });
    onRenderTracked(() => {
      console.log('onRenderTracked');
    });
    onRenderTriggered(() => {
      console.log('onRenderTriggered');
    });
    onActivated(() => {
      console.log('onActivated');
    });
    onDeactivated(() => {
      console.log('onDeactivated');
    });
    onServerPrefetch(() => {
      console.log('onServerPrefetch');
    });

    return {
      title,
      onChangeTitle: () => title.value = 'New About'
    };
  }
};
</script>