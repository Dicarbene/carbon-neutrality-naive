import { defineStore } from "pinia";

interface UserData {
  uid: string;
  username: string;
  company: string | null;
  dept: string | null;
  DESCRIPTION: string | null;
  token: string;
}

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    isLogin: false,
    user: {} as UserData,
  }),
});
