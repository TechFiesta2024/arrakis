import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "./firebaseConfig.service";


export async function signInWithGoogle() {
    const auth = getAuth(app);

    try {
        const result = await signInWithPopup(auth, new GoogleAuthProvider());
        const credential = GoogleAuthProvider.credentialFromResult(result);

        return {
            email: result.user.email,
            avatar: result.user.photoURL,
            firebase_token: credential.accessToken
        }
    } catch (error) {
        console.error(error);
    }
}