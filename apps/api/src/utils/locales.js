/* eslint-disable import/prefer-default-export */
import { i18n as temp, setupI18n } from '@lingui/core'
import * as plurals from 'make-plural/plurals'
import enCatalog from '@demo/locales/en/messages'
import nlCatalog from '@demo/locales/nl/messages'

let i18n = null
export function getI18n(locale) {
    if (i18n === null) {
        const en = setupI18n({
            locale: 'en',
            missing: '🚨',
            localeData: { en: { plurals: plurals.en } },
            messages: { en: enCatalog.messages },
        })
        const nl = setupI18n({
            locale: 'nl',
            missing: '🚨',
            localeData: { nl: { plurals: plurals.nl } },
            messages: { nl: nlCatalog.messages },
        })
        i18n = { en, nl }
    }
    return i18n[locale]
}
