/* eslint-disable import/prefer-default-export */
const PORTALS = ['modals', 'popovers', 'tooltips', 'notifications']

export function appendPortals() {
    PORTALS.forEach((id) => {
        const notificationsPortal = document.createElement('div')
        notificationsPortal.setAttribute('id', id)
        document.body.appendChild(notificationsPortal)
    })
}
