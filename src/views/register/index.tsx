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
  useMessage,
  type FormInst,
  type FormRules,
  type FormItemRule,
} from "naive-ui";
import { defineComponent, ref } from "vue";
import { LoginHeader } from "../../layouts/header";
import { useRouter } from "vue-router";
import { useRegisterMutation } from "@/generated/graphql";

export default defineComponent({
  setup() {
    const message = useMessage();

    const router = useRouter();
    const formRef = ref<FormInst | null>(null);

    interface ModelType {
      email: string;
      username: string;
      password: string;
      password_confirm: string;
    }

    const model = ref<ModelType>({
      email: "",
      username: "",
      password: "",
      password_confirm: "",
    });

    const { mutate } = useRegisterMutation({
      variables: {
        email: model.value.email,
        username: model.value.password,
        password: model.value.password,
        password_confirm: model.value.password_confirm,
      },
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
      password_confirm: [
        {
          required: true,
          message: "请输入验证密码",
          trigger: ["blur", "input"],
        },
        {
          validator(rule: FormItemRule, value: string) {
            if (value === (null || "")) {
              return true;
            }
            if (value !== model.value.password) {
              return false;
            }
          },
          message: "两次输入密码不匹配",
          trigger: ["input", "blur"],
        },
      ],
      username: [
        {
          required: true,
          message: "请输入用户名",
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
                <NFormItem label="username" path="username">
                  <NInput
                    onChange={(e) => {
                      model.value.username = e;
                    }}
                    onInput={(e) => {
                      model.value.username = e;
                    }}
                    value={model.value.username}
                  />
                </NFormItem>
                <NFormItem label="email" path="email">
                  <NInput
                    onChange={(e) => {
                      model.value.email = e;
                    }}
                    onInput={(e) => {
                      model.value.email = e;
                      console.log("email", model.value.email);
                    }}
                    value={model.value.email}
                  />
                </NFormItem>
                <NFormItem label="password" path="password">
                  <NInput
                    type="password"
                    onChange={(e) => {
                      model.value.password = e;
                    }}
                    onInput={(e) => {
                      model.value.password = e;
                    }}
                    value={model.value.password}
                  />
                </NFormItem>
                <NFormItem label="verify password" path="password_confirm">
                  <NInput
                    type="password"
                    onChange={(e) => {
                      model.value.password_confirm = e;
                    }}
                    onInput={(e) => {
                      model.value.password_confirm = e;
                    }}
                    value={model.value.password_confirm}
                  />
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
                        onClick={async () => {
                          try {
                            await mutate({
                              email: model.value.email,
                              username: model.value.username,
                              password: model.value.password,
                              password_confirm: model.value.password_confirm,
                            })
                              .then((res) => {
                                console.log(res?.data);
                                return res?.data;
                              })
                              .then((data) => {
                                if (data?.register.isRegister === true) {
                                  message.success("注册成功");
                                  setTimeout(() => {}, 1000);
                                  router.push("login");
                                } else {
                                  message.error("注册失败");
                                }
                              });
                          } catch (error: any) {
                            console.log(error?.message);
                            if (error.message.includes("duplicate key error")) {
                              message.warning("邮箱已注册");
                            } else {
                              if (
                                error.message.includes("Bad Request Exception")
                              ) {
                                message.warning("请完成注册信息");
                              }
                            }
                          }
                        }}
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
