import { defineStore } from "pinia";

interface UserData {
  uid: string;
  username: string;
  company: string | null;
  dept: string | null;
  DESCRIPTION: string | null;
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjEzIiwicHciOiJDYXJib24ifQ.C5s4GCBwtGxV9ZZ7ivZaLbM5gYEfkD-qX3nm01TTGn8";
}

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    isLogin: false,
    user: {} as UserData,
  }),
});
