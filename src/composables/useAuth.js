import { ref } from 'vue'

import useSupabase from 'boot/supabase'

const user = ref(null)

export function useAuth () {
  const { supabase } = useSupabase()

  const login = async ({email, password}) => {
    const {user, error} = await supabase.auth.sigIn({email, password })

    if (error) throw error

    return user
  }

  const loginWithSocialProvider = async (provider) => {
    const {user, error} = await supabase.auth.sigIn({ provider })

    if (error) throw error

    return user
  }

  const logout = async () => {
    const { error } = await supdb.auth.signOut()

    if (error) throw error
  }

  const isLoggedIn = () => !!user.value

  const register = async ({email, password, ...meta}) => {
    const { user, error } = await supabase.auth.signUp({ email, password }, {
      data: meta,
      redirectTo: `${window.location.origin}/me?fromEmail=registrationConfirmation`
    })

    if (error) throw error

    return user

  }

  const update = async (data) => {
    const { user, error } = await supabase.auth.update(data)

    if (error) throw error

    return user
  }

  const sendPasswordRestEmail = async (email) => {
    const { user, error } = await supabase.auth.resetPasswordForEmail(email)

    if (error) throw error

    return user
  }

  return {
    user,
    login,
    loginWithSocialProvider,
    logout,
    isLoggedIn,
    register,
    update,
    sendPasswordRestEmail
  }
}
