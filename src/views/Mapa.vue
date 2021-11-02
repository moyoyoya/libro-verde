<template>

  <form>
<div class="field is-centered is-center has-addons has-addons-centered">
  <p class="control has-icons-left" >
    <span class="select" placeholder="Find a repository">
      <select>
        <option disabled selected value> -- Selecciona una ciudad -- </option>
        <option >CDMX</option>
        <option>Monterrey</option>
        <option>Guadalajara</option>
      </select>
    </span>
    <span class="icon is-small is-left">
      <i class="fas fa-globe"></i>
    </span>
  </p>
</div>
<div class="field is-centered is-center has-addons has-addons-centered">
  <p class="control has-icons-left">
    <span class="select">
      <select>
        <option disabled selected value> -- Selecciona una colonia -- </option>
        <option>Todas</option>
        <option>Del Valle</option>
        <option>Condesa</option>
      </select>
    </span>
    <span class="icon is-small is-left">
      <i class="fas fa-globe"></i>
    </span>
  </p>
</div>
<div class="field is-grouped-centered has-text-centered is-centered is-center">
  <a class="button is-primary has-text-centered is-centered is-center" @click="goToResult">Resultados</a>
</div>
    </form>
</template>



<script>
export default {
  //inside the script section, define the function:
  methods: {
    goToResult() {
      this.$router.push('/resultado');
    }
  }
}
//if the route accepts params, you can also use
//this.$router.push({name:'Resultado', params: {id: 'CDMX'}});
</script>
<style>
    body {
      background-image: url("../assets/photo.jpg");
    }

</style>