'use client'
import { useEffect } from "react"
import { redirect } from "next/navigation"
import Cookies from "js-cookie"


export default function isProfileCompleted(Component) {
  return function IsProfileCompleted(props) {
      const isProfileCompleted = Cookies.get('isProfileCompleted')

    useEffect(() => {
      if (!isProfileCompleted) { // null, undefined, false
        return redirect('/')
      }
    }, [])


    if (!isProfileCompleted) {
      return null
    }

    return <Component {...props} />
  }
}