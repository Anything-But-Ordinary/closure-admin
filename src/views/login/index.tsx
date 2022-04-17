import {
  NButton,
  NCard,
  NCol,
  NForm,
  NFormItem,
  NInput,
  NRow,
  NSpace,
  NGradientText,
  useMessage,
  type FormItemInst,
  type FormItemRule,
  type FormRules,
  type FormInst,
} from "naive-ui";
import { defineComponent, ref, type Ref } from "vue";
import { LoginHeader } from "../../layouts/header";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();

    const formRef = ref<FormInst | null>(null);
    const message = useMessage();

    interface ModelType {
      email: Ref<string | null>;
      password: string | null;
    }

    const model = ref<ModelType>({
      email: ref(null),
      password: null,
    });

    const rules: FormRules = {
      email: [
        {
          required: true,
          message: "需要邮箱",
          trigger: ["blur"],
        },
        {
          validator(rule: FormItemRule, value: string) {
            // console.log("value", value);
            console.log("where:", value?.indexOf("@"));
            if (value === (null || "")) {
              return true;
            }
            return (
              (value as string)?.indexOf("@") !== -1 &&
              (value as string)?.indexOf(".") !== -1
            );
          },
          message: "邮箱不合法",
          trigger: ["input", "blur"],
        },
      ],
      password: [
        {
          required: true,
          message: "请输入密码",
          trigger: ["blur", "input"],
        },
      ],
    };

    return () => (
      <>
        <LoginHeader />
        <div class={`-z-99 w-screen h-screen `}>
          <div class={`flex align-middle justify-center`}>
            <NCard
              title={"Do you want to write a Letter?"}
              class="mt-14 text-center bg-light-800  h-3/4 font-mono rounded-md md:w-4/5 md:h-4/5 lg:w-auto lg:h-auto shadow-lg"
            >
              <NForm ref={formRef} model={model.value} rules={rules}>
                <NFormItem label="email" path="email">
                  <NInput
                    onChange={(e) => {
                      // console.log("onChange:", e);
                      model.value.email = e;
                    }}
                    onInput={(e) => {
                      // console.log(e);
                      model.value.email = e;
                      console.log("email", model.value.email);
                    }}
                    value={model.value.email}
                    // ref={model.value.email}
                  />
                </NFormItem>
                <NFormItem label="password" path="password">
                  <NInput
                    type="password"
                    value={model.value.password}
                    onInput={(e) => {
                      model.value.password = e;
                      console.log("password", model.value.password);
                    }}
                    onChange={(e) => {
                      model.value.password = e;
                    }}
                  />
                </NFormItem>
                <NSpace justify="center">
                  <NGradientText type="info">
                    <div
                      class={
                        "hover:text-orange-500 transition-all duration-1000 cursor-pointer"
                      }
                      onClick={() => router.push("/register")}
                    >
                      Not Have an account yet? Go to Register
                    </div>
                  </NGradientText>
                </NSpace>
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
