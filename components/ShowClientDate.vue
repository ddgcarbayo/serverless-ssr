<template>
    <client-only>
        <div>
            <span>Browser date: {{ new Date().toLocaleTimeString() }}</span>
        </div>
    </client-only>
</template>
<style lang="scss"></style>
<script>
  import ClientOnly from 'vue-client-only';
  export default {
    components: {
      ClientOnly
    },
  };
</script>
