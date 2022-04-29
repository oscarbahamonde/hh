<script>
  // @ts-nocheck

  import { Router } from "svelte-navigator";
  import { user } from "./store";
  import PrivateRouter from "./routes/PrivateRouter.svelte";
  import PublicRouter from "./routes/PublicRouter.svelte";
  import Footer from "./layout/Footer.svelte";
  import Navbar from './layout/Navbar.svelte';


  function handleLogout() {
    $user = null;
  }
</script>

<Router>
 <Navbar usr={$user} />
    <PublicRouter />
    <PrivateRouter />
</Router>
  <Footer />