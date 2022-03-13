import { defineComponent, ref } from "vue";
import styles from "./index.module.scss";
import { NForm, NFormItem, NInput, type FormInst } from "naive-ui";

export default defineComponent({
  setup() {
    const formRef = ref<FormInst | null>(null);

    return () => (
      <>
        <div class="">
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
        </div>
      </>
    );
  },
});
