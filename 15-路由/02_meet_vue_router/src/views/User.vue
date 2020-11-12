<template>
  <div>
    user
    {{userID}}
  </div>
</template>

<script>
export default {
  name:"User",
  computed:{
    userID(){
      return this.$route.params.userId
    }
  }
}
</script>

<style>

</style>