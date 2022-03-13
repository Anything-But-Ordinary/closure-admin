import { onMounted } from "@vue/composition-api";
import { defineComponent } from "vue";
import styles from "./index.module.scss";

export const LoginHeader = defineComponent({
  setup() {
    return () => (
      <header style={styles["header"]}>👋 Hey Welcome to Letter</header>
    );
  },
});
