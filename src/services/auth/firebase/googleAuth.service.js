import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "./firebaseConfig.service";


export async function signInWithGoogle() {
    const auth = getAuth(app);

    try {
        const { user } = await signInWithPopup(auth, new GoogleAuthProvider());
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        return { email: user.email, avatar: user.photoURL }
    } catch (error) {
        console.error(error);
    }
}