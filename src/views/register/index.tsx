import {
  NButton,
  NCard,
  NCol,
  NForm,
  NFormItem,
  NInput,
  NRow,
  NSpace,
  type FormInst,
} from "naive-ui";
import { defineComponent, ref } from "vue";
import { LoginHeader } from "../../layouts/header";

export default defineComponent({
  setup() {
    const formRef = ref<FormInst | null>(null);

    return () => (
      <>
        <LoginHeader />
        <div class={`-z-99 w-screen h-screen `}>
          <div class={`flex align-middle justify-center`}>
            <NCard
              title={"Do you want to write a Letter?"}
              class="mt-14 text-center bg-light-800  h-3/4 font-mono rounded-md md:w-4/5 md:h-4/5 lg:w-auto lg:h-auto shadow-lg"
            >
              <NForm ref={formRef}>
                <NFormItem label="username">
                  <NInput />
                </NFormItem>
                <NFormItem label="email">
                  <NInput />
                </NFormItem>
                <NFormItem label="password">
                  <NInput />
                </NFormItem>
                <NFormItem label="verify password">
                  <NInput />
                </NFormItem>
                <NRow gutter={[0, 24]}>
                  <NCol span={24}>
                    <NSpace justify="space-between">
                      <NButton
                        class={"bg-blue-300 !hover:bg-blue-500"}
                        type="primary"
                        round
                        disabled={false}
                      >
                        登陆
                      </NButton>

                      <NButton
                        class={"bg-yellow-300 !hover:bg-yellow-500"}
                        type="primary"
                        round
                        disabled={false}
                      >
                        注册
                      </NButton>

                      <NButton
                        class={"bg-rose-300 !hover:bg-rose-500"}
                        type="primary"
                        round
                        disabled={false}
                      >
                        忘记密码
                      </NButton>
                    </NSpace>
                  </NCol>
                </NRow>
              </NForm>
            </NCard>
          </div>
        </div>
      </>
    );
  },
});
