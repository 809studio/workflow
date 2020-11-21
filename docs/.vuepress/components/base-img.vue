<template>
  <img :src="$withBase(`/imgs/${img}`)" :alt="img">
</template>

<script>
export default {
  name: 'BaseImg',
  props: ['img']
}
</script>
