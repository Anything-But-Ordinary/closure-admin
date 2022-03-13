import { computed, defineComponent, onUpdated } from "vue";
import { RouterView } from "vue-router";
import {
  NConfigProvider,
  NLoadingBarProvider,
  NMessageProvider,
  NNotificationProvider,
  NDialogProvider,
  darkTheme,
} from "naive-ui";
// import TopBar from "./components/topbar";
import { isDark } from "./composables";

export default defineComponent({
  setup() {
    // let getDarkTheme = isDark.value ? darkTheme : undefined;

    // onUpdated(() => {
    //   getDarkTheme = isDark.value ? darkTheme : undefined;
    // });

    return () => (
      <NConfigProvider>
        <NLoadingBarProvider>
          <NMessageProvider>
            <NNotificationProvider>
              <NDialogProvider>
                <RouterView />
              </NDialogProvider>
            </NNotificationProvider>
          </NMessageProvider>
        </NLoadingBarProvider>
      </NConfigProvider>
    );
  },
});
