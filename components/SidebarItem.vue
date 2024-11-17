<template>
  <div class="flex flex-col">
    <template v-for="l in links">
      <NuxtLink
        v-if="!l.items"
        :to="l.path || '/'"
        class="inline-flex items-center gap-4 px-4 py-3 text-left text-[15px]"
        :key="`link-${l.id}`"
      >
        <!-- Dynamically bind the icon name -->
        <Icon :name="`heroicons:${l.icon}`" class="h-5 w-5 text-muted-foreground" />
        <p class="truncate">{{ l.title }}</p>
      </NuxtLink>

      <HDisclosure v-else :key="`disclosure-${l.id}`">
        <template #default>
          <HDisclosureButton
            class="inline-flex items-center justify-between gap-4 px-4 py-3 text-left text-[15px]"
          >
            <div class="flex items-center gap-4">
              <!-- Dynamically bind the icon name for the disclosure button -->
              <Icon :name="`heroicons:${l.icon}`" class="h-5 w-5 text-muted-foreground" />
              <p class="truncate">{{ l.title }}</p>
            </div>
            <div>
                <Icon name="heroicons:chevron-down" class="h-5 w-5 text-muted-foreground transition" />
              </div>
          </HDisclosureButton>

          <TransitionExpand>
            <HDisclosurePanel class="mx-6 flex flex-col border-l px-3">
              <SidebarItem :links="l.items" />
            </HDisclosurePanel>
          </TransitionExpand>
        </template>
      </HDisclosure>
    </template>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  links: Array<{
    id: number;
    title: string;
    icon?: string;
    path?: string;
    items?: Array<{ id: number; title: string; path?: string }> | undefined;
  }>;
}>();
</script>
