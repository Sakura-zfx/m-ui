<template>
  <div class="over-stand">
    <cell
      label="是否超标"
      :is-link="false"
      @on-click="$emit('on-click-stand')"
    >
      <span
        v-if="isOverStand"
        :style="{ color: mainColor }"
      >
        <i class="iconfont icon-shuoming ib-middle"/>
        <span class="ib-middle">已超标</span>
      </span>
      <span class="color-c999" v-else>未超标</span>
    </cell>
    <template v-if="isOverStand">
      <cell
        label="超标原因"
        :value="currentOverStandReason && currentOverStandReason.name"
        @on-click="showOverStandPanel = true"
      />
      <popup-over-stand
        :visible.sync="showOverStandPanel"
        :main-color="mainColor"
        :selected-item="currentOverStandReason"
        :list="STAND_REASON"
        :do-select-reason="val => currentOverStandReason = val"
      />
    </template>
  </div>
</template>

<script>
import { STAND_REASON } from '../confirm-modules/constant'
import PopupOverStand from '../confirm-modules/popups/OverStandReason'
import Cell from '../cell'

export default {
  name: 'over-stand',

  components: {
    PopupOverStand,
    Cell
  },

  data() {
    return {
      currentOverStandReason: null,
      showOverStandPanel: false,
      STAND_REASON
    }
  },

  props: {
    mainColor: String,
    isOverStand: Boolean
  },

  methods: {
    getData() {
      return this.currentOverStandReason ? this.currentOverStandReason.name : ''
    }
  }
}
</script>
