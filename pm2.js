const pm2 = require('pm2');

pm2.connect((error) => {
  if (error) {
    console.error(error);
    process.exit(2);
  }

  pm2.list((error, list) => {
    pm2.disconnect();  // Disconnect from PM2

    if (error) {
      console.error(error);
      process.exit(2);
    }

    // Output the status of each process
    list.forEach((process) => {
      console.log(`${process.name} - ${process.pm2_env.status}`);
    });
  });
});
