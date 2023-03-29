import { parse } from 'cookie'
import { DEFAULT_LANGUAGE } from '@demo/constants'

export default function parseRequestHeaders(headers = {}) {
    const cookies = parse(headers.cookie || '')
    const locale = headers['Accept-Language'] || DEFAULT_LANGUAGE
    return {
        locale,
    }
}
