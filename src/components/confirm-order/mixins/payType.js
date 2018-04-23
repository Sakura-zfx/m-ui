const PAY_TYPE = [
  {
    id: 1,
    title: '因公消费'
  },
  {
    id: 2,
    title: '因私消费'
  }
]

export default {
  data() {
    return {
      showPayType: false,
      payTypeData: PAY_TYPE,
      currentPayType: PAY_TYPE[0]
    }
  },
  methods: {
    handleSelectPayType(item) {
      this.currentPayType = item
    }
  }
}
