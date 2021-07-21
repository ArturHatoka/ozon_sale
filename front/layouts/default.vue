<template>
    <div>
        <Header />
        <Nuxt />
    </div>
</template>
<script>
import Header from '../components/basic/Header'
export default {
  middleware: ['auth'],
    components: {
        Header
    }
}
</script>
