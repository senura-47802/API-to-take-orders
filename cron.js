const cron = require('node-cron');
const Order = require('./models/Order');
cron.schedule('0 * * * *', async () => {
  try {
    await Order.deleteMany({ expiration: { $lt: new Date() } });
    console.log('Expired orders deleted successfully');
  } catch (err) {
    console.error('Error deleting expired orders:', err);
  }
});
