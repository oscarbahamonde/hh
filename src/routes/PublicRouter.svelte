<script>
    import { Route } from "svelte-navigator";
    import Home from "./public/Home.svelte";
    import Login from ".//Login.svelte";
    import Eventos from "./public/Eventos.svelte";
    import Videos from "./public/Videos.svelte";
</script>

<Route path="/" let:location>
<Home />
</Route>
<Route path="/login" let:location>
<Login />
</Route>
<Route path="/eventos" let:location>
<Eventos />
</Route>
<Route path="/videos" let:location>
<Videos />
</Route>
