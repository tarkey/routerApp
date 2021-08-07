if (process.env.NODE_ENV === "production") {
  module.exports("./configureStore.prod");
} else {
  module.exports("./configureStore.dev");
}
