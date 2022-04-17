import { createApp, h, provide } from "vue";
import { createPinia } from "pinia";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import App from "./App";
import router from "./router";
import "virtual:windi.css";

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  cache,
  uri: "http://localhost:4000/graphql",
  connectToDevTools: true,
  credentials: "include",
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
});

// const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
