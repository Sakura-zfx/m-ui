export default {
  intersection (...args) {
    for (let i = 0; i <= args.length - 2; i++) {
      const s = new Set(args[i + 1])
      const res = args[i].filter(x => s.has(x))
      return args[i + 2] ? this.intersection(res, args[i + 2]) : res
    }
  }
}
