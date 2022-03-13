import { NCard, NForm, NFormItem, NInput, type FormInst } from "naive-ui";
import { defineComponent, ref } from "vue";
import styles from "./index.module.scss";
import { LoginHeader } from "../../layouts/header";

export default defineComponent({
  setup() {
    const formRef = ref<FormInst | null>(null);

    return () => (
      <>
        <LoginHeader />
        <NCard
          title={"Do you want to write a Letter?"}
          class="text-center bg-light-800  h-3/4 font-mono"
          style={styles["font-style"]}
        >
          <NForm ref={formRef}>
            <NFormItem>
              <NInput />
            </NFormItem>
            <NFormItem>
              <NInput />
            </NFormItem>
            <NFormItem>
              <NInput />
            </NFormItem>
          </NForm>
        </NCard>
      </>
    );
  },
});
