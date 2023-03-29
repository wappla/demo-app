import { jest } from '@jest/globals'
import { memoWrapIdentifier } from '../createKnexConfig'

test("that 'memoWrapIdentifier' with same value only gets called once.", () => {
    const wrap = jest.fn()
    memoWrapIdentifier('*', wrap)
    memoWrapIdentifier('*', wrap)
    memoWrapIdentifier('test', wrap)
    memoWrapIdentifier('test', wrap)
    expect(wrap).toBeCalledTimes(2)
})
