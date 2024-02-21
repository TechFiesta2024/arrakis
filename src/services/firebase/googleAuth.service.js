import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "./firebaseConfig.service";


export async function signInWithGoogle() {
    const auth = getAuth(app);

    try {
        const result = await signInWithPopup(auth, new GoogleAuthProvider());
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
    } catch (error) {
        console.error(error);
    }
}