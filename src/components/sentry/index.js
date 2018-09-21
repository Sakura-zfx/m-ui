import Vue from 'vue'
import * as Sentry from '@sentry/browser'

const online = location.protocol === 'https:'

export default {
  open: online,
  dsn: 'https://cc415d712650488a936395f97869ecf1@sentry.io/212146',
  release: '',
  setDsn(dsn) {
    if (dsn) {
      this.dsn = dsn
    }
  },
  setRelease(tag) {
    if (tag) {
      this.release = tag
    }
  },
  setOpen(open) {
    if (open !== undefined) {
      this.open = open
    }
  },
  init(release, dsn, open) {
    this.setRelease(release)
    this.setDsn(dsn)
    this.setOpen(open)

    if (this.open) {
      Sentry.init({
        dsn: this.dsn,
        integrations: [new Sentry.Integrations.Vue({ Vue })],
        release: this.release
      })
      return Sentry
    }

    return null
  }
}
