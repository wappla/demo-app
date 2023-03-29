import { i18n } from '@lingui/core'
import * as plurals from 'make-plural/plurals'
import * as constants from '@demo/constants'
import enCatalog from '@demo/locales/en/messages'
import nlCatalog from '@demo/locales/nl/messages'

const { LANGUAGE_NL, LANGUAGE_EN, DEFAULT_LANGUAGE } = constants

export const supportedLanguages = [
    {
        code: LANGUAGE_NL,
        catalog: nlCatalog.messages,
    },
    {
        code: LANGUAGE_EN,
        catalog: enCatalog.messages,
    },
]

export function setupLocales(locale = DEFAULT_LANGUAGE) {
    i18n.load(
        supportedLanguages.reduce(
            (acc, { code, catalog }) => ({
                ...acc,
                [code]: catalog,
            }),
            {}
        )
    )
    supportedLanguages.forEach(({ code }) => {
        i18n.loadLocaleData(code, {
            plurals: plurals[code],
        })
    })
    i18n.activate(locale)
    return i18n
}
