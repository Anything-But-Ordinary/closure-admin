import { defineComponent } from "vue";
import styles from "./index.module.scss";
import { useRouter } from "vue-router";
import { onMounted } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const route = useRouter();

    setTimeout(() => {
      route.push("/login");
    }, 3700);

    return () => (
      <div class={styles["background"]}>
        <h1 data-text="Loading..." class={styles["h1"]}>
          Loading...
        </h1>
      </div>
    );
  },
});
