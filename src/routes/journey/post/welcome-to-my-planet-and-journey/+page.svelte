<script lang="ts">
  import DisplayLayout from "../../../../components/DisplayLayout.svelte";
  import IonicArrowBackOutline from "../../../../icons/Ionic-ArrowBackOutline.svelte";
</script>

<DisplayLayout>
  <a href="/journey" class="btn btn-ghost"><IonicArrowBackOutline /> Back to journey</a>

  <div class="flex flex-col mx-50 py-6 gap-y-6">
    <h1 class="text-2xl text-center">Welcome to my planet and journey!</h1>
    <p class="text-center">Want to know why this website is created? Or how far I can go? Read more to find out!</p>
    <div class="flex flex-col gap-y-2">
      <p><span class="font-bold">Created on:</span> 19/07/2025</p>
      <p><span class="font-bold">Updated on:</span> 19/07/2025</p>
    </div>
    <div class="flex flex-col gap-y-2">
      <p class="font-bold">Why this website is created?</p>
      <p>Because I love to write my own journey and share it with others.</p>
      <p class="font-bold">How far I can go?</p>
      <p>
        I'm not sure, but I'm sure I can go far as long as I keep doing, enjoying, writing, and sharing.
        Stay tune for more updates! Sometimes you don't need another post so maybe you can keep tracking the same post :P!
        I will write many updates about this website and my journey here soon.
      </p>
    </div>
  </div>
</DisplayLayout>