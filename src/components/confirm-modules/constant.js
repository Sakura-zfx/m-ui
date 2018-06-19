export const BILL_METHOD = [
  {
    id: 1,
    title: '企业管理开票',
    value: true
  },
  {
    id: 2,
    title: '本人开票',
    value: false
  }
]

export const BILL_TYPE_LIST = [
  {
    id: 2,
    title: '普通发票'
  },
  {
    id: 1,
    title: '专用发票'
  }
]

export const PAY_WAY = [
  { title: '企业支付', msg: '企业采购(审批-企业支付-无需报销)', id: 1 },
  { title: '个人垫付', msg: '企业采购(审批-个人垫付-提交报销)', id: 2 },
  { title: '个人支付', msg: '个人消费', id: 3 }
]

export const STAND_REASON = [
  {
    id: 1,
    name: '陪同领导或客户'
  },
  {
    id: 2,
    name: '出发时间和到达时间不合适'
  },
  {
    id: 3,
    name: '临时紧急出差任务'
  },
  {
    id: 4,
    name: '已获得领导同意'
  },
  {
    id: 5,
    name: '其他'
  }
]
