<script>
    import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
    import { auth, user } from "../store";
    const login = async () => {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const { user: { uid } } = result;
        user.set(uid);
    };
    </script>

<div class="mt-24">
    <button class="btn btn-primary btn-outline btn-circle"
        on:click={login}
    >
        <i class="mdi mdi-google text-2xl"></i>

    </button>
</div>