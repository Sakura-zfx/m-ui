<template>
  <div class="welfare-input">
    <div class="welfare">
      <div class="custom__cell bg-fff m-bd-b">
        <m-switch
          class="fr"
          v-if="restAmountWelfare"
          :value="isOpenWelfare"
          :main-color="mainColor"
          @change="val => onChangeOpen(val, 'welfare')"
        />
        <div class="ib-top px-width-60 position-r color-c666">
          积分
          <img class="position-a welfare__tag" :src="require('../../assets/images/tag.png')" width="36px">
        </div>
        <div
          class="ib-top color-c999 line-normal"
          :class="{ 'welfare__info': restAmountWelfare }"
        >
          <span v-if="restAmountWelfare">
            您有{{ restAmountWelfare / 100 }}积分，可抵¥{{ restAmountWelfare | formatPrice }}
          </span>
          <span :style="{fontSize: '3.73vw'}" v-else>您没有可用积分，暂不可用积分抵扣</span>
          <i class="iconfont icon-shuoming color-info" @click="onClickWelfareInfo" />
        </div>
      </div>
      <cell
        v-if="isOpenWelfare && restAmountWelfare"
        :is-link="false"
        value=" "
      >
        <div slot="label" class="text-left">
          <span class="ib-middle px-width-60">使用</span>
          <m-input
            v-model="welfareUseNum"
            :max="maxNumWelfare"
            :min="0"
            :fixed="2"
            type="number"
            class="welfare__input ib-middle"
            placeholder="请输入"
          />
          <span class="color-000 ib-middle" v-if="welfareUseNum">
            积分，抵 <span class="color-red">¥{{ Number(welfareUseNum).toFixed(2) }}</span>
          </span>
        </div>
      </cell>
    </div>
    <div class="cai-dou" v-if="restAmountCaidou">
      <div class="custom__cell bg-fff m-bd-b">
        <m-switch
          class="fr"
          :value="isOpenCaidou"
          :main-color="mainColor"
          @change="val => onChangeOpen(val, 'caidou')"
        />
        <div class="ib-top px-width-60 position-r color-c666">彩豆</div>
        <div
          class="ib-top color-c999 line-normal"
          :class="{ 'welfare__info': restAmountCaidou }"
        >
          <span>
            共{{ restAmountCaidou }}彩豆，可抵¥{{ restAmountCaidou | formatPrice }}
          </span>
          <i class="iconfont icon-shuoming color-info" @click="onClickCaidouInfo" />
        </div>
      </div>
      <cell
        v-if="isOpenCaidou"
        :is-link="false"
        value=" "
      >
        <div slot="label" class="text-left">
          <span class="ib-middle px-width-60">使用</span>
          <m-input
            v-model="caidouUseNum"
            :max="maxNumCaidou"
            :min="0"
            type="number"
            class="welfare__input ib-middle"
            placeholder="请输入"
          />
          <span class="color-000 ib-middle" v-if="caidouUseNum">
            彩豆，抵 <span class="color-red">¥{{ caidouUseNum | formatPrice }}</span>
          </span>
        </div>
      </cell>
    </div>
  </div>
</template>

<script>
import MSwitch from '../switch/index'
import CommonSelect from '../common-select/index'
import Cell from '../cell/index'
import utils from '../../utils/utils'
import MInput from '../m-input/index'
import Msgbox from '../msgbox/index'
import Toast from '../toast/index'
import Http from '../http'

const http = new Http({
  uri: {
    urlRate: '/config/rateConfig/getIntegralRate'
  }
})

export default {
  components: {
    MSwitch,
    CommonSelect,
    Cell,
    MInput
  },

  filters: {
    formatPrice(num) {
      return utils.formatMoney(num)
    }
  },

  props: {
    mainColor: String,
    restAmountWelfare: Number,
    restAmountCaidou: Number,
    isOpenWelfare: Boolean,
    isOpenCaidou: Boolean,
    payWayId: Number,
    // caidouMaxUseNum: Number,
    // welfareMaxUseNum: Number
    totalMoney: Number,
    bizType: [Number, String],
    appType: Number
  },

  data() {
    return {
      welfareUseNum: '',
      caidouUseNum: '',
      caidouRate: 0,
      caidouMaxUseNum: 0,
      welfareMaxUseNum: this.totalMoney
    }
  },

  computed: {
    maxNumWelfare() {
      const num = /\d+/.test(this.welfareMaxUseNum)
        ? Math.min(this.welfareMaxUseNum, this.restAmountWelfare)
        : this.restAmountWelfare
      return num / 100
    },
    maxNumCaidou() {
      return /\d+/.test(this.caidouMaxUseNum)
        ? Math.min(this.caidouMaxUseNum, this.restAmountCaidou)
        : this.restAmountCaidou
    }
  },

  created() {
    this.getCaidouRate()
  },

  watch: {
    welfareUseNum(num) {
      // 通知业务num变化
      this.$emit('welfare-num-change', this.outputNum(num))
    },
    caidouUseNum(num) {
      this.$emit('caidou-num-change', num ? Number(num) : 0)
    },
    welfareMaxUseNum(val) {
      // 更新最大输入
      this.setNum(val)
    },
    caidouMaxUseNum(val) {
      // 更新最大输入
      this.setNum(undefined, val)
    }
  },

  methods: {
    getCaidouRate() {
      if (!this.restAmountCaidou) {
        this.setMaxUseNum()
        this.setNum()
        return Promise.resolve()
      }
      return http.get('urlRate', {
        bizType: this.bizType,
        appType: this.appType,
        integralType: 1
      }).then(res => {
        this.caidouRate = res.data.businessRate
        this.setMaxUseNum()
        this.setNum()
        return ''
      })
    },

    setMaxUseNum() {
      this.welfareMaxUseNum = this.totalMoney
      this.caidouMaxUseNum = Math.ceil(this.totalMoney * this.caidouRate / 100)
    },

    setNum(welfare = this.maxNumWelfare, caidou = this.maxNumCaidou) {
      this.welfareUseNum = welfare
      this.caidouUseNum = caidou
    },

    resetNum() {
      this.welfareUseNum = ''
      this.caidouUseNum = ''
    },

    // 获取data
    getData() {
      return {
        welfareNum: this.isOpenWelfare ? this.outputNum(this.welfareUseNum) : 0,
        caidouNum: this.isOpenCaidou ? this.caidouUseNum : 0,
        isOpenWelfare: this.isOpenWelfare,
        isOpenCaidou: this.isOpenCaidou
      }
    },

    // 传递分出去
    outputNum(num) {
      return num ? ((Number(num) * 1000) / 10).toFixed(0) * 1 : 0
    },

    onChangeOpen(val, type) {
      const isWelfare = type === 'welfare'
      const isCaidou = type === 'caidou'

      if (this.payWayId === 3) {
        if (
          (isWelfare && val && this.isOpenCaidou) ||
          (isCaidou && val && this.isOpenWelfare)
        ) {
          Toast('彩豆与积分不支持同时使用')
          return
        }
        // if (!val) {
        //   // 切换开关时，重置数量为0
        //   isCaidou && (this.caidouUseNum = 0)
        //   isWelfare && (this.welfareUseNum = 0)
        // }
        this.$emit(`change-open-${type}`, val)
      } else {
        this.$emit('change-open-welfare-error')
      }
    },

    onClickWelfareInfo() {
      const h = this.$createElement
      Msgbox.confirm({
        title: '积分使用规则',
        msg: h('div', null, [
          h('p', { class: 'text-left' }, '1.积分为贵司发放给员工的一种福利，可直接抵扣现金'),
          h('p', { class: 'text-left' }, '2.1积分可抵扣1.00元，若全额抵扣则无需再支付现金'),
          h('p', { class: 'text-left' }, '3.积分抵扣的部分金额不开具发票')
        ]),
        okTxt: '了解详情',
        cancelTxt: '我知道了'
      }).then(() => {
        try {
          // eslint-disable-next-line
          JSBridge.native('openurl', {
            noDefaultMenu: 1,
            url: 'https://cms.jituancaiyun.com/xme/qiyefuwu/index.html#/huoqujifen'
          })
        } catch (e) {
          // eslint-disable-next-line
          console.error(e)
        }
      })
    },

    onClickCaidouInfo() {
      const h = this.$createElement
      Msgbox.alert({
        title: '彩豆使用规则',
        msg: h('div', null, [
          h('p', { class: 'text-left' }, '1.彩豆可用于福利商城的京东商城、中粮我买网、大众点评、美团外卖、手机充值、油卡充值、卡券、酒店、火车票服务中下单抵扣使用'),
          h('p', { class: 'text-left' }, '2.100彩豆可抵扣1.00元，每次最多抵扣订单金额的80%'),
          h('p', { class: 'text-left' }, '3.彩豆抵扣的部分金额不开具发票')
        ]),
        okTxt: '我知道了'
      })
    }
  }
}
</script>

<style lang="stylus">
  .custom__cell
    padding: 15px 10px;
    .radio
      margin-top: -5px;

  .welfare__input
    input
      width: 100px;
      height: 26px;
      border-radius: 2px;
      text-align: center;
      line-height: normal;
      -webkit-appearance: none;
</style>
