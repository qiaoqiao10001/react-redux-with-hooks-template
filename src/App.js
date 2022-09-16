import { useDispatch } from 'react-redux'
import { updateUserInfo } from './store/slices/user'
import { updateShopInfo } from './store/slices/cart'
import Child from './child'
function App () {
  const dispatch = useDispatch()
  return (
    <div className="App">
      <Child />
      <button onClick={() => {
        dispatch(updateUserInfo({ name: "zhangqiao", age: 12 })
        )
      }}>派发更新user数据</button>
      <button onClick={() => {
        dispatch(updateShopInfo({
          shopName: '拉拉车夫',
          shopAddress: '盐田区',
          distance: 12
        }))
      }}>派发shop数据</button>
    </div>
  );
}

export default App;
