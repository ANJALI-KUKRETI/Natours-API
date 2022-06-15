const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace('<password>', process.env.DB_PASSWORD);

mongoose.connect(DB).then(() => {
  console.log('DB connection successful');
});

// const testTour = new Tour({
//   name: 'The Forest Hiker',
//   rating: 4.7,
//   price: 497
// });
// testTour
//   .save()
//   .then(doc => {
//     console.log(doc);
//   })
//   .catch(err => {
//     console.log('Error', err);
//   });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App runnning on port ${port}...`);
});
