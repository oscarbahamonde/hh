<PrivateRoute path="dashboard" let:location>
<div>Dashboard</div>
</PrivateRoute>
  <PrivateRoute path="profile" let:location>
    <Profile />
  </PrivateRoute>

  <script>
    import PrivateRoute  from "./private/PrivateRoute.svelte";
    import Profile from "./private/Profile.svelte";
  </script>