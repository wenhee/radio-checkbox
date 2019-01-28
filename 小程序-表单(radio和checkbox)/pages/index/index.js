Page({
  data: {
    items: [{
        value: 'USA',
        checked: true,
        id: 1
      },
      {
        value: 'CHN',
        checked: true,
        id: 2
      },
      {
        value: 'BRA',
        id: 3
      },
      {
        value: 'ENG',
        id: 4
      },
      {
        value: 'CTW',
        id: 5
      }
    ]
  },
  onLoad() {
    let _cache = [];
    for (let i = 0, len = this.data.items.length; i < len; i++) {
      if (this.data.items[i].checked) {
        _cache.push({
          value: this.data.items[i].value,
          id: this.data.items[i].id,
          checked: true
        });
      }
    }
    this.onCheckbox({
      detail: _cache
    });
  },
  onCheckbox(e) {
    console.log('e值checkbox', e.detail);
    // let _id = [];
    // for (let i = 0, len = e.detail.length; i < len; i++) {
    //   _id.push(e.detail[i].id);
    // }
    // console.log('checkbox取值id:', _id);
  },
  onRadio(e) {
    console.log('e值radio:', e.detail)
  }
})