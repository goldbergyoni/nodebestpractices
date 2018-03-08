module.exports = app => {
  app.use((err, req, res, next) => {
    console.error("Error middleware was invoked");
    console.error(err);
    res.status(err.code).json(err.name);
  });

  process.on("uncaughtexception" , (error)=>{

  })

  process.on("unhandledRejection", (reason, p) => {
        console.log(`Uncaught promise is now handled error`);
      });
};
