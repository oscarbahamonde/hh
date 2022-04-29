<script>
    let files
    let url
    function handleChange(e) {
        console.log(e.target.files);
        files = e.target.files;
    }
    function handleDrop(e){
        e.preventDefault();
        files = e.dataTransfer.files;
    }
    function handleDragOver(e){
        e.preventDefault();
        document.querySelector('.drop-zone').classList.add('drag-over');
    }
    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append('file', files[i]);
        }
        const res = await fetch('/api/upload', {
            method: 'POST',
            body: formData
        })
        const json = await res.json()
        console.log(json)
        url = json.url
    }
</script>

<div class="flex flex-col items-center">
    <form class="form-horizontal" on:submit={handleSubmit} enctype="multipart/form-data">
    <div class="form-group">
        <label for="file" class="label-flex drop-zone" on:dragover={handleDragOver} on:drop={handleDrop} enctype="multipart/form-data">Click o arrastra tu musica aquí
            <input type="file" id="file" name="file" on:change={handleChange} multiple accept="audio/*" class="hidden" />
          
        </label>
        <label for="file" class="label-flex drop-zone" on:dragover={handleDragOver} on:drop={handleDrop} enctype="multipart/form-data">Sube la miniatura de tu track
            <input type="file" id="file" name="file" on:change={handleChange} multiple accept="image/*" class="hidden" />
          
        </label>
        <i class="mdi-upload btn ml-24 rounded mb-4"><input type="submit" value="Upload" /></i>
    </div>
    
    </form>
    <div class="flex flex-col items-center">
        <audio controls volume="10" src={url}></audio>
        <small class="text-neutral text-sm">{url}</small>
    </div>
</div>
<style>
.drop-zone{
    @apply bg-yellow-600;
    @apply border-2;
    @apply border-black;
    @apply border-dashed;
    @apply w-full h-1/3;
    @apply rounded;
    @apply p-4;
    @apply m-4;
    @apply flex;
    @apply items-center;
    @apply justify-center;
    @apply flex-col;
    @apply text-center;
    @apply text-white;
    @apply font-bold;
    @apply cursor-pointer;
}
.drop-zone:hover{
    @apply bg-black;
    @apply text-yellow-600;
    @apply border-yellow-600;
    @apply border-2;
    @apply border-solid;
}
audio::-webkit-media-controls-panel {
  background-color: #56AEFF;
}

audio::-webkit-media-controls-volume-slider {
  background-color: #B1D4E0;
  border-radius: 25px;
  padding-left: 8px;
  padding-right: 8px;
}
</style>