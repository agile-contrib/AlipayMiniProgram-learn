Page({
  data: {
    value1: ["one", "two", "three"],
    value2: 'type1'
  },
  doit1() {
    console.log('点击了doit1，我准备把value2设置成type2');

    // 设置前先打印一下
    console.log(this.data.value2);

    // 设置
    this.setData({
      value2: "type2"
    });
  },
});
