import { useContext } from 'react'
import { AppStateContext } from '../providers/AppStateProvider'

const useAppState = () => useContext(AppStateContext)

export default useAppState
