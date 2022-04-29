
      <span
      class="mx-4 font-script text-yellow-700 hover:font-bold hover:underline"
      ><Link to="profile">
        <div class="dropdown dropdown-end">
          <label
            tabindex="0"
            class="btn btn-ghost btn-circle avatar"
            for="avatar"
          >
            {#if usr}
              <div class="w-10 rounded-full">
                <img src={usr.user.photoURL} alt={usr.user.displayName} />
              </div>
            {:else}
              <div class="w-10 rounded-full">
                <img
                  src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                  alt="avatar"
                />
              </div>
            {/if}
          </label>
        </div></Link> </span>

        <script>
            import { Link } from 'svelte-navigator'
            export let usr
        </script>