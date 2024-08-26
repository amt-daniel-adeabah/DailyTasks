export default defineNuxtRouteMiddleware((to, from) => {
  const store = useAuthenticationStore();

  if (!store.token) {
    return navigateTo("/authentication/login");
  }
});
