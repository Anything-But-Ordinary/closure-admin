import {
  NButton,
  NCard,
  NCol,
  NForm,
  NFormItem,
  NGradientText,
  NInput,
  NRow,
  NSpace,
  type FormInst,
} from "naive-ui";
import { defineComponent, ref } from "vue";
import { LoginHeader } from "../../layouts/header";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();

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
                <NSpace justify="center">
                  <NGradientText type="info">
                    <div
                      class={
                        "hover:text-orange-500 transition-all duration-1000 cursor-pointer"
                      }
                      onClick={() => router.push("/login")}
                    >
                      Alrealy Have an account? Go to Login
                    </div>
                  </NGradientText>
                </NSpace>
                <NRow gutter={[0, 24]}>
                  <NCol span={24}>
                    <NSpace justify="space-between">
                      <NButton
                        class={"bg-amber-300 !hover:bg-amber-500"}
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
