<template>
  <div class="notfound">
      <h2>404</h2>
      <h3>page not found</h3>
  </div>
</template>

<script>
export default {

}
</script>

<style>
   .notfound {
      font-family: sans-serif;
      place-items: center;
      font-size: 4rem;
      text-transform: capitalize;
      padding-top: 3.4rem;
   }
   @media screen and (max-width: 600px) {
      .notfound {
         font-size: 2.5rem;
      }
      
   }
</style>