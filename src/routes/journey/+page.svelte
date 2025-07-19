<script lang="ts">
  import dayjs from "dayjs";
  import DisplayLayout from "../../components/DisplayLayout.svelte";

</script>

<DisplayLayout>
  <div class="flex flex-col mx-50 py-6 gap-y-6">
    <h1 class="text-2xl text-center">Journey</h1>
    
    <div class="flex flex-col items-center">
      <div class="card bg-base-100 w-96 shadow-sm">
        <div class="card-body">
          <h2 class="card-title">Welcome to my planet and journey!</h2>
          <div class="flex flex-col gap-y-2">
            <p><span class="font-bold">Created on:</span> 19/07/2025</p>
            <p><span class="font-bold">Updated on:</span> 19/07/2025</p>
          </div>
          <p>Want to know why this website is created? Or how far I can go? Read more to find out!</p>
          <div class="card-actions justify-end">
            <a href="/journey/post/welcome-to-my-planet-and-journey" class="btn btn-primary">Read more</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</DisplayLayout>