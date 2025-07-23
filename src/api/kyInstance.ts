import type { RootState } from "@/store";
import ky from "ky";

const API_URL = import.meta.env.VITE_API_BASE_URL;

let getReduxState: (() => RootState) | null = null;

export const initKyWithStore = (getStateFunc: () => RootState) => {
  getReduxState = getStateFunc;
};

const api = ky.create({
  prefixUrl: API_URL,
  timeout: 10000,
  hooks: {
    beforeRequest: [
      (request) => {
        if (getReduxState) {
          const state = getReduxState();
          console.log(state);
          // const token = state?.auth?.token;
          // if (token) {
          //   request.headers.set("Authorization", `Bearer ${token}`);
          // }
        }
        return request;
      },
    ],
    // afterResponse: [
    //   async (request, options, response) => {
    //     if (!response.ok) {
    //       if (response.status === 401 || response.status === 403) {
    //         console.error('Authentication error or forbidden access. Attempting to log out...');
    //       }
    //     }
    //     return response;
    //   }
    // ]
  },
});

export default api;
