import ProtectedRoute from "@/services/protected/protectedRoute"

export const metadata = {
    title: 'Dashboard',
    description: ''
}

export default function Layout({ children }) {
    return (
        <>
            {/* <ProtectedRoute> */}
                {children}
            {/* </ProtectedRoute> */}
        </>
    )
}