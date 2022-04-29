<div class="wrapper">
<div class="panel">
    <i class="mdi-upload footer-button"></i>
    <i class="mdi-account footer-button"></i>
     <i class="mdi-menu footer-button"></i>
     <i class="mdi-music footer-button"></i> 
</div>
</div>
<style>
.wrapper{
    @apply bottom-0 left-0 right-0 fixed w-full flex flex-col items-center; 
    @apply z-10;
}
.panel{
    @apply w-auto bg-yellow-700;
    @apply p-4;
    @apply rounded-t-2xl;
    @apply opacity-75;
   
}
.panel:hover{
    @apply opacity-100;
}

i{
    @apply cursor-pointer;
    @apply m-2;
    @apply text-3xl;
    @apply btn btn-circle;
}

i:hover{
    @apply scale-125;
}


</style>
<script>
    import { navigate } from 'svelte-navigator';
</script>