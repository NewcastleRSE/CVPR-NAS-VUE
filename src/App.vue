<template>
  <div id="app">
	<router-view />
  </div>
</template>

<script>

export default {
  name: "App",
};

</script>

<style>

.btn-sub {
	background-color: #93C47D;
	font-size: 1.2em;
}

.errorMsg {
	font-weight: bold;
	color: darkred;
}

.successMsg {
	font-weight: bold;
}

.outline {
	border : 1px rgba(76, 175, 80, 0.3) solid;
	padding: 15px;
}


</style>
