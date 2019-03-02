<template lang="html">
  <div class="">
    <ul v-for="api in apis">
      <li><p>Your {{ api['Meta Data'] }}</p></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ApisView',
  // props: ['apis'],
  const alpha = require('alphavantage')({ key: 'JUSZH2FOEHQR49T8' });
  alpha.data.intraday(`aapl`).then(data => {
  console.log(data);
});

}
</script>

<style lang="css" scoped>
</style>
