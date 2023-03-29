export * from './files'

export const delay = (time, value) =>
    new Promise((resolve) => {
        setTimeout(resolve, time, value)
    })
