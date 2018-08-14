<template>
  <common-entry title="城市选择">
    <m-city-select
      :current-level-list="city"
      :max-level="maxLevel"
      :visible.sync="showPanel"
      @on-city-change="getCity"
      @on-select="finalSelect"
    />
    <pre>
      import { CitySelect } from 'xm-mui'
    </pre>
    <van-cell
      title="已选择"
      :value="selected.map(x => x.name).join('')"
      is-link
      @click="showPanel = true"
    />
    <p class="px-margin-t20">tips：城市需要从接口动态获取，请求接口后，赋值当前城市currentLevelList即可</p>
    <p class="px-margin-t20">usage</p>
    <pre>
      &lt;m-city-select
        :current-level-list="city"
        :max-level="maxLevel"
        :visible="showPanel"
        @on-city-change="getCity"
        @on-select="finalSelect"
      /&gt;
    </pre>
    <p class="px-margin-t20">events</p>
    <pre>
  @on-city-change="getCity(item, itemIndex, currLevel)"
  @on-select="finalSelect(selected, selectedIndex)"
  @hide-panel="showPanel = false"
    </pre>
    <p class="px-margin-t20">props</p>
    <pre>
      props: {
        title: {
          type: String,
          default: '城市选择'
        },
        mainColor: {
          type: String,
          default: 'red'
        },
        maxLevel: {
          type: Number,
          default: 3
        },
        currentLevelList: [Array, null],
        visible: {
          type: Boolean,
          default: false
        }
      }
    </pre>
  </common-entry>
</template>

<script>
import CommonEntry from './commonEntry'
import MCitySelect from '../../src/components/city-select'
import LocalCity from '../assets/cityTwoLevel'

export default {
  name: 'city-select',

  components: {
    CommonEntry, MCitySelect
  },

  data() {
    return {
      city: null,
      maxLevel: 3,
      selected: [],
      showPanel: false
    }
  },

  methods: {
    finalSelect(res) {
      this.selected = res
    },

    getCity(item, itemIndex, currLevel) {
      const pid = item ? item.code : 0
      if (pid === 0) {
        this.city = LocalCity
      } else if (currLevel === 1) {
        this.city = LocalCity[itemIndex].child
      } else if (currLevel === 2) {
        this.city = [
          {
            'code': 281210,
            'name': '汉周区'
          },
          {
            'code': 281211,
            'name': '大罗区'
          },
          {
            'code': 281212,
            'name': '取得'
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>
