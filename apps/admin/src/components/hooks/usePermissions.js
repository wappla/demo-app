import useAppState from './useAppState'

export default function usePermissions() {
    const { currentUser } = useAppState()
    if (!currentUser) {
        return {}
    }
    return currentUser.permissions
}
