## 商品sku选择 —— vue 实现思路2

实现的效果与demo1一致，源码请戳 [./Sku.vue](./Sku.vue)

## 使用

```
xnpm i xm-mui --save
```

```html
<template>
  <sku
    v-model="skuId"
    :attr-list="attrList"
    :sku-list="skuList"
    :is-sku-abnormal="sku => sku.hasDown"
  />
</template>

<script>
import { Sku } from 'xm-mui'

export default {
  components: {
    Sku
  },
  data () {
    return {
      skuId: 1
    }
  }
}
</script>
```

<details>
<summary>数据源格式</summary>

```js
{
  // 展示的属性数据
  attrList: [
    {
      tagName: '颜色',
      attrs: [
        {
          tagValue: "红色",
          skuIdList: [1, 2, 3]
        }
        // ...
      ]
    }
    // ...
  ],

  // 商品库数据
  skuList: [
    {
      skuId: 1,
      hasDown: false,
      itemStock: 10,
      name: '',
      img: ''
      // ...
    }
    // ...
  ]
}
```
</details>

## 实现思路

> 需要明确，选择的是每个属性的大类层级。例如数据源有3层大类数据，那么已选择的数组长度为3才能组合唯一skuId

只需要聚焦每一个属性本身，例如，数据源中有9个属性，那我们只需要在遍历每个属性的时候，在每一次循环时做2件事情

- 遍历已选择的，当 当前层级不等于已选择的层级 并且 已选择有值 时，将当前属性所包含的skuId收集起来
- 利用收集起来的非同层级的skuIdList，与当前属性所包含的skuIdList求交集

这样就可以根据已选择的来确定当前属性需要跟谁求交集，需要注意的是避免重复遍历，因为同层级包含多个属性（此例子中包含3个），那只需要遍历一次来收集非同级skuIdList，因为剩余的遍历都是多余的。

最后就是异常情况的处理了

- 已选择为空时，属性都是可选择的
- 非同层级收集的skuIdList为空时，属性也都是可选择的。出现这种情况是已选择只有一个属性。
- 收集到的skuIdList与当前skuIdList求交集，最后根据交集结果可以确定当前属性能否被选择
