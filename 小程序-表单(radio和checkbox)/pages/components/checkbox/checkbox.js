Component({

  data: {
    checkbox: [{}]
  },
  properties: {
    data: {
      type: Object,
      observer(newVal, oldVal) {
        this.data.checkbox = newVal || [{
          value: '未设置值'
        }];
        this.setData({
          items: newVal
        })
      }
    }
  },
  lifetimes: {

  },
  methods: {
    checkbox(e) {
      let [index, checkboxVal] = [e.currentTarget.dataset.id, this.data.checkbox];
      checkboxVal[index].checked ? this.data.items[index].checked = false : this.data.items[index].checked = true;
      let value = checkboxVal.filter((item, index) => {
        return item.checked == true;
      })
      this.setData({
        items: this.data.items,
      })
      this.triggerEvent('onCheckbox', value);
    }
  }
})