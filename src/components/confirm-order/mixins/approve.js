const approveList = [
  {
    id: 1,
    approveReason: '审批单事由1',
    approveId: '23243545465768789'
  },
  {
    id: 2,
    approveReason: '审批单事由2',
    approveId: '23243545465768789'
  }
]

export default {
  data() {
    return {
      showApprovePopup: false,
      approveCurrent: null,
      approveList
    }
  },
  methods: {
    handleSelectApprove(item) {
      this.approveCurrent = item
      // this.$emit('approve-select', item)
    }
  }
}
