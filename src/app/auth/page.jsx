'use client'
import { signInWithGoogle } from '@/services/firebase/googleAuth.service'
import React from 'react'

const page = () => {

    const handleGoogleSignIn =async() => { 
        await signInWithGoogle()
    }

  return (
      <>
          <div>
              <button onClick={handleGoogleSignIn}>
                  Sign In With Google 
              </button>
        </div>
      </>
  )
}

export default page