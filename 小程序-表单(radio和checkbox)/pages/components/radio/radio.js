Component({

  data: {
    radio: [{}],
    defaultVal: ''
  },
  properties: {
    data: {
      type: Object,
      observer(newVal) {
        this.data.radio = newVal || [{
          value: '未设置值'
        }];
        this.setData({
          items: newVal
        })
      }
    },
    defaultVal: {
      type: String,
      observer(newVal) {
        let [_cache, _maxCount] = ['', 0];
        for (let i = 0, len = this.data.radio.length; i < len; i++) {
          if (this.data.radio[i].value != newVal) {
            _maxCount++;
            _cache = newVal;
          }
        }
        if (_maxCount == this.data.radio.length) {
          console.log(`radio取值：%c${_cache}`, `color:#f00;font-weight:bold;font-size:2em;`, `不存在!`);
        }
        this.data.defaultVal = newVal || '';
      }
    }
  },
  lifetimes: {
    attached() {
      if (this.data.defaultVal) {
        this.radioChange({
          detail: {
            value: this.data.defaultVal
          }
        })
      }
    }
  },
  methods: {
    radioChange(e) {
      this.setData({
        value: e.detail.value
      });
      this.triggerEvent('onRadio', e.detail.value);
    }
  }
})