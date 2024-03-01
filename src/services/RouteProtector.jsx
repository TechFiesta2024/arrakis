'use client'
import { useEffect } from "react"
import { redirect } from "next/navigation"
import Cookies from "js-cookie"


export default function isAllowed(Component) {
  return function IsAllowed(props) {
      const isAuthenticated = Cookies.get('isAuthenticated')

    useEffect(() => {
      if (!isAuthenticated) { // null, undefined, false
        return redirect('/')
      }
    }, [])


    if (!isAuthenticated) {
      return null
    }

    return <Component {...props} />
  }
}