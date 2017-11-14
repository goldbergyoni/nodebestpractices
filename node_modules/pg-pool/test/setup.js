const crash = reason => {
  process.on(reason, err => {
    console.error(reason, err.stack)
    process.exit(-1)
  })
}

crash('unhandledRejection')
crash('uncaughtError')
crash('warning')
