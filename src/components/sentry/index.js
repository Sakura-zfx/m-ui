import Vue from 'vue'
import * as Sentry from '@sentry/browser'
import MyError from '../../utils/customError.js'

const online = location.protocol === 'https:'

export default {
  open: online,
  dsn: 'https://cc415d712650488a936395f97869ecf1@sentry.io/212146',
  release: '',
  sentryInstance: null,
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
      this.sentryInstance = Sentry
      return Sentry
    }
    return null
  },
  capture(error, errorName) {
    if (this.sentryInstance && this.sentryInstance.captureException) {
      let captureError = error
      // eslint-disable-next-line
      if (!error instanceof Error) {
        // 如果error不是Error的实例，将error封装成Error的实例
        captureError = new MyError(error, errorName || error.name)
      }
      this.sentryInstance.captureException(captureError)
    }
  }
}
