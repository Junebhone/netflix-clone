import Input from '@/components/input'
import { useCallback, useState } from 'react'

const Auth = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const [varient, setVarient] = useState('login')

  const toggleVarient = useCallback(() => {
    setVarient((currentVarient) =>
      currentVarient === 'login' ? 'register' : 'login'
    )
  }, [])

  return (
    <div className="relative w-full h-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="w-full h-full bg-black lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="self-center w-full px-16 py-16 mt-2 bg-black rounded-md bg-opacity-70 lg:w-2/5 lg:max-w-md">
            <h2 className="mb-8 text-4xl font-semibold text-white">
              {varient === 'login' ? 'Sign In' : 'Register'}
            </h2>
            <div className="flex flex-col gap-4">
              {varient === 'register' && (
                <Input
                  label="Username"
                  onChange={(event: any) => setName(event.target.value)}
                  id="name"
                  value={name}
                />
              )}

              <Input
                label="Email"
                onChange={(event: any) => setEmail(event.target.value)}
                id="email"
                type="email"
                value={email}
              />
              <Input
                label="Password"
                onChange={(event: any) => setPassword(event.target.value)}
                id="password"
                type="password"
                value={password}
              />
            </div>
            <button className="w-full py-3 mt-10 text-white transition bg-red-600 rounded-md hover:bg-red-700">
              {varient === 'login' ? 'Login' : 'Sign Up'}
            </button>
            <p className="mt-12 text-neutral-500">
              {varient === 'login'
                ? 'First Time Using Netflix?'
                : 'Already have an account?'}
              <span
                onClick={toggleVarient}
                className="ml-1 text-white cursor-pointer hover:underline"
              >
                {varient === 'login' ? 'Create an account' : 'Login'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
