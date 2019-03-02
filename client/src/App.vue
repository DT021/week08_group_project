<template>
  <div id="app">
    <!-- <h1>DEVELOPMENT</h1> -->
    <marquee-text class="ticker" :duration="10" :repeat="10">
    ||  AAPL: $1259 ||  MSFT: $1134 || AMZN: $1344
    </marquee-text>
    <h1>Welcome to your Stock Portfolio</h1>
    <h2>Select your stock</h2>
    <stock-view :stocks="stocks"/>
    <stock-prices />
  </div>
</template>

<script>
import StockView from './components/StockView';
import StockPrices from './components/StockPrices';
import MarqueeText from 'vue-marquee-text-component'
import {eventBus} from './main';

export default {
  name: 'app',
  data () {
    return {
      stocks: [],
      apiCall: null,
      currentStocks: []
    }
  },
  components:{
    StockView,
    StockPrices,
    MarqueeText
  },
  mounted(){
    this.fetchStocks();

    eventBus.$on('stock-selected', (apiCall) => {
      this.callStock(apiCall)
    })
  },
  methods: {
    fetchStocks(){
      fetch("http://localhost:3000/api/stocks")
      .then(res => res.json())
      .then(stocks => this.stocks = stocks);
    },
    callStock(apiCall) {
      this.apiCall = apiCall
      let stock = this.apiCall
      const key = '&interval=5min&apikey=JUSZH2FOEHQR49T8'
      fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=' + stock + key)
      .then(res => res.json())
      .then(currentStocks => this.currentStocks = currentStocks);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Arimo', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}

.ticker {
  color: red;
}
</style>
