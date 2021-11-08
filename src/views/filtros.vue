<template>
<form class="box">
  <div class="field is-grouped is-grouped-multiline has-addons-centered">
<div class="control">
  <label class="label is-center">Tipo de propiedad</label>
  <div class="select is-grouped-centered">
    <select>
      <option>De Renta    </option>
      <option>De Venta     </option>
    </select>
  </div>
</div>
    <div></div>
<div class="control has-addons-centered is-centered is-center ">
  <label class="label is-center">Tipo de propiedad</label>
  <div class="select">
    <select>
      <option>Casa</option>
      <option>Departamento</option>
    </select>
  </div>
</div>
<div class="field is-centered is-center has-addons has-addons-centered">
  <p class="control has-icons-left" >
      <label class="label is-center">Ciudad</label>
    <span class="select">
      <select>
        <option disabled selected value>-Selecciona una ciudad-</option>
        <option >CDMX</option>
        <option>Monterrey</option>
        <option>Guadalajara</option>
      </select>
    </span>
  </p>
</div>
<div class="field is-centered is-center has-addons has-addons-centered">
  <p class="control has-icons-left">
    <label class="label is-center">Municipio</label>
    <span class="select">
      <select>
        <option disabled selected value>Selecciona un municipio</option>
        <option>Todos</option>
        <option>Álvaro Obregón</option>
        <option>Benito Juárez</option>
        <option>Cuajimalpa</option>
      </select>
    </span>
  </p>
</div>
<div class="field is-centered is-center has-addons has-addons-centered">
  <p class="control has-icons-left">
    <label class="label is-center">Colonia</label>
    <span class="select">
      <select>
        <option disabled selected value>-Selecciona una colonia-</option>
        <option>Todas</option>
        <option>Del Valle</option>
        <option>Condesa</option>
      </select>
    </span>
  </p>
</div>
<div class="field has-addons">
  <p class="control">
    <label class="label is-center">Precio</label>
    <input class="input" type="text" placeholder="MXN">
  </p>
</div>
</div>

<div class="field is-grouped-centered is-grouped is-grouped-multiline">
  <div class="field is-centered is-center has-addons has-addons-centered">
  <p class="control has-icons-left">
    <label class="label is-center">Recamaras<sup> </sup></label>
    <span class="select">
      <select>
        <option disabled selected value>Todo</option>
        <option>Todo</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5+</option>
      </select>
    </span>
  </p>
</div>
  <div>
    <label class="label is-center"> </label>
  </div>

  <div class="field is-centered is-center has-addons has-addons-centered">
  <p class="control has-icons-left">
    <label class="label is-center">Baños<sup> </sup></label>
    <span class="select">
      <select>
        <option disabled selected value>Todo</option>
        <option>Todo</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5+</option>
      </select>
    </span>
  </p>
</div>

  <div class="field is-centered is-center has-addons has-addons-centered">
  <p class="control">
    <label class="label is-center">Construidos<sup>2</sup></label>
    <input class="input" type="text">
  </p>
</div>

<div class="field is-centered is-center has-addons has-addons-centered">
  <p class="control">
    <label class="label is-center">Metros<sup>2</sup></label>
    <input class="input" type="text">
  </p>
</div>
</div>

  <div class="field is-grouped-centered has-text-centered is-centered is-center">
    <label class="label is-center"> </label>
  <a class="button is-primary has-text-centered is-centered is-center" @click="goToResult">Resultados</a>
</div>

</form>

</template>

<script>
import { Icon } from '@iconify/vue';
export default {
	components: {
		Icon,
	},
    methods: {
    goToResult() {
      this.$router.push('/resultado');
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 50px;
}
  .seperator h5 {
  content: "";
  display: block;
  flex-grow: 1;
  height: 2px;
  background: #333;
}
.columns {
  display: flex;
}
.forImg {
  max-height: 250px;
  border-radius : 50%;
}

.forInfos {
  padding-left: 10px;
}
.seperator h5 span {
  padding: 0 1em;
}
  body {
 background-image: url("../assets/photo.jpg");

}
</style>