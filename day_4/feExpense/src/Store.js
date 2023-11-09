import { configureStore } from "@reduxjs/toolkit";

const Store = configureStore({
  reducer: {
    // userInfo: UserReducer,
    // transaction: transInfo,
  },
});

export default Store;
