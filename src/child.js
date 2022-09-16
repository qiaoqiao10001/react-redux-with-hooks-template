import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function Child () {
  // useSelector是从redux的store对象中提取数据(state)。
  const shopInfo = useSelector(state => state.cart.shopInfo)
  console.log(shopInfo)
  useEffect(() => {
    console.log(shopInfo)
  }, [shopInfo])
  return (
    <div>child</div>
  )
}
