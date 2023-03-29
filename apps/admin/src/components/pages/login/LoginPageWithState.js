/* eslint-disable @next/next/no-img-element */
import Button from '@demo/components/Button'
import LogoWithText from '@demo/components/LogoWithText'
import ActiveDirectoryLogo from '../../utils/ActiveDirectoryLogo'
import useAppState from '../../hooks/useAppState'

export default function LoginPageWithState() {
    const { login } = useAppState()
    return (
        <div className="w-full h-screen bg-cover bg-black bg-center flex items-center justify-center bg-blend-multiply">
            <div className="w-[560px] h-[350px] bg-white rounded-2xl text-center flex items items-center justify-center">
                <div>
                    <LogoWithText color="black" className="h-12 mb-8 mx-auto" />
                    <Button variant="outline" onClick={() => login()}>
                        <ActiveDirectoryLogo className="h-6" />
                        Login with Active Directory
                    </Button>
                </div>
            </div>
        </div>
    )
}
