import { defineStore } from 'pinia'
export const useAuthStore = defineStore("auth", () => {
  const isAuthenticated = ref(false)
  function setAuthenticated(ath) {
    isAuthenticated.value = ath
  }

  // Resetting State
  function $reset() {
    isAuthenticated.value = false
  }

  return { isAuthenticated, setAuthenticated, $reset }

},
  // {
  //   persist: true
  // }
  {
    persist: {
      storage: persistedState.cookiesWithOptions({
        sameSite: 'strict',
      }),
    }
  }
)