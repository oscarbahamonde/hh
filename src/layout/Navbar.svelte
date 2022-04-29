<header>

    <div class="navbar bg-base-300 shadow-lg fixed top-0 z-10">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl rounded" href="/"
          ><img
            src="/logo.png"
            class="w-24"
            alt="hip hop movimiento cultural"
          /></a
        >
        <span
          class="mx-4 font-script text-yellow-700 hover:font-bold hover:underline"
        >
          <Link to="/">Inicio</Link>
        </span>
        <span
          class="mx-4 font-script text-yellow-700 hover:font-bold hover:underline"
        >
          <Link to="eventos">Eventos</Link>
        </span><span
          class="mx-4 font-script text-yellow-700 hover:font-bold hover:underline"
        >
          <Link to="/videos">Videos</Link></span
        ><span
          class="mx-4 font-script text-yellow-700 hover:font-bold hover:underline"
        >
          <Link to="/dashboard">Tracks</Link></span
        >
      
       <span
          class="mx-4 font-script text-yellow-700 hover:font-bold hover:underline"
        >
          <Link to="/dashboard">Consola</Link></span
        >
      </div>
<Auth usr={usr} />
      </div>
    <nav />
  </header>

  <script>
  import Auth from '../components/Auth.svelte';
  import { Link } from 'svelte-navigator'  
  export let usr
    
  </script>

