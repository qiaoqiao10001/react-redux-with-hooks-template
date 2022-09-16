import { makeAutoObservable, computed } from 'mobx'

class CounterStore {
  list = [1, 2, 3, 4]
  count = 0
  constructor() {
    makeAutoObservable(this, {
      filterList: computed
    })
  }
  addCount = () => {
    this.count++
  }
  get filterList () {
    return this.list.filter(item => item * 2)
  }

  addList = () => {
    this.list.push(6, 9, 7)
  }
}

const counterStore = new CounterStore()
export default counterStore