<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Header from '../components/basic/Header'
export default {
  name: 'login',
  components: {
    Header
  }
}
</script>
