import { useMutation, useQueryClient } from '@tanstack/react-query'
import clsx from 'clsx'
import { useState } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useNavigate, useRevalidator } from 'react-router'
import timeIcon from '../assets/icons/time-icon.svg'
import Button from '../components/ui/Button'
import Fieldset from '../components/ui/form/Fieldset'
import TextInput from '../components/ui/form/TextInput'
import { useAppLoaderData } from '../hooks/useLoaderData'
import { login } from '../api/authApi'
import type { TLoginUser } from '../types/userTypes'

const Login = () => {
  const loaderData = useAppLoaderData()
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { revalidate } = useRevalidator()
  const { register, handleSubmit, reset } = useForm<TLoginUser>()
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const { mutateAsync: loginUserMutation } = useMutation({
    mutationFn: login,
  })

  if (loaderData?.currentUser) return null

  const onSubmit: SubmitHandler<TLoginUser> = async (user: TLoginUser) => {
    try {
      setErrorMessage(null)
      await loginUserMutation(user)

      await queryClient.invalidateQueries({ queryKey: ['me'] })

      reset()
      revalidate()
      navigate('/')
    } catch {
      setErrorMessage('Wrong email or password')
    }
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-black">
      <div className="max-w-[465px] w-full mt-28">
        <h1 className="text-2xl text-white">Logga in</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <Fieldset legend={{ string: 'Logga in', srOnly: true }}>
            <TextInput label="Email" {...register('email')} />

            <TextInput label="Lösenord" type="password" {...register('password')} />

            {errorMessage && <p className="-mt-3 text-label-warning text-sm/6">{errorMessage}</p>}

            <Button
              type="submit"
              className={clsx('w-full uppercase', errorMessage ? 'mt-3' : 'mt-6')}
            >
              Logga in
            </Button>
          </Fieldset>
        </form>
        <span className="inline-flex gap-2 mt-6">
          <img src={timeIcon} className="" alt="Vite logo" />

          <p className="text-white">Du loggas ut automatiskt efter 2 minuter inaktivitet.</p>
        </span>
      </div>
    </div>
  )
}

export default Login
