<template>
  <section class="mt-5">
    <h3 class="font-bold">New Customers</h3>
    <div class="flex w-full items-start gap-6 overflow-x-auto rounded-lg border bg-background p-5 scrollbar-thin scrollbar-thumb-input scrollbar-thumb-rounded-md">
      <div class="flex shrink-0 flex-col items-center gap-2">
        <button class="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
          <Icon name="heroicons:plus-circle" class="h-5 w-5" />
        </button>
        <div>
          <p class="text-sm font-semibold">
            Add
          </p>
        </div>
      </div>

      <div v-for="(n,i) in data" :key="i" >
        <div  class="flex shrink-0 flex-col items-center gap-2">
          <img :src="n.picture.thumbnail" :alt="n.name.first" class="h-10 w-10 rounded-full object-cover" />
          <div class="text-center">
            <p class="text-sm font-semibold"> {{ n.name.first }} </p>
          </div>
          <p class="text-xs text-muted-foreground">10 mins ago</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface User {
  name: {
    first: string;
    last: string;
  };
  picture: {
    thumbnail: string;
  };
}

const { data, error } = await (async () => 
  await useAsyncData(
    "new-customers",
    () => $fetch("https://randomuser.me/api/?results=20"),
    {
      default: () => [],
      transform: (data:any) => data.results,
    }
  )
)();

if (error) {
  console.error("Error fetching data:", error);
}
</script>
