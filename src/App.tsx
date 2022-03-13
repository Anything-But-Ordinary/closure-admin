import { defineComponent } from "vue";
import { RouterView } from "vue-router";

export default defineComponent({
  setup() {
    return () => (
      <>
        <div class="text-center">Hello Vue TSX</div>
        <RouterView />
      </>
    );
  },
});
