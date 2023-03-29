/* eslint-disable import/prefer-default-export */
export const combineRefs =
    (refs = []) =>
    (el) => {
        refs.forEach((ref) => {
            if (typeof ref === 'function') {
                ref(el)
            } else {
                // eslint-disable-next-line no-param-reassign
                ref.current = el
            }
        })
    }
