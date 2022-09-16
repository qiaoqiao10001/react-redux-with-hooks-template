import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userInfo: {}
}

export const userSlice = createSlice({
  name: 'user', // 命名空间，在调用action的时候会默认的设置为action的前缀
  initialState,
  // 这里的属性会自动的导出为actions，在组件中可以直接通过dispatch进行触发
  reducers: {
    updateUserInfo: (state, { payload }) => {
      state.userInfo = payload
    }
  }
})

// 导出action userSlice.action是默认
export const { updateUserInfo } = userSlice.actions


export default userSlice.reducer // 导出reducer 创建store的时候使用