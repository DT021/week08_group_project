const alpha = require('alphavantage')({ key: 'JUSZH2FOEHQR49T8' });
alpha.data.intraday(`amzn`).then(data => {
console.log(data);
});

// var block = alpha['Meta Data']
// console.log(block);
