<template> 
  <aside class="sticky top-[65px] h-[calc(100vh-65px)] py-5">
    <div class="flex h-full w-full flex-col overflow-y-auto rounded-md border bg-card pb-5 scrollbar-thin scrollbar-thumb-input scrollbar-thumb-rounded-md">
      <SidebarItem :links="menu" />
    <div class="mt-auto">
      <SidebarItem :links="bottomMenu" />
    </div>
  </div>
  </aside>
</template>

<script setup lang="ts">
const bottomMenu = [
  { id: 1, title: "Settings", icon: "cog-8-tooth" },
  { id: 2, title: "Help", icon: "information-circle" },
  { id: 3, title: "Logout", icon: "user-minus"},
];

const menu = [
  {
    id: 1,
    title: "Dashboard",
 
    icon: "chart-bar-square",
  },
  {
    id: 2,
    title: "Customers",
    icon: "user-plus",
    items: [
      { id: 1, title: "List" , items:[
      { id: 2, title: "Create" },
      { id: 3, title: "Edit" },
      { id: 4, title: "Delete" },
      { id: 5, title: "Details" },
      ] },
      { id: 2, title: "Create" },
      { id: 3, title: "Edit" },
      { id: 4, title: "Delete" },
      { id: 5, title: "Details" },
    ],
  },
  {
    id: 3,
    title: "Orders",
    icon: "shopping-cart",
    items: [
      { id: 1, title: "List" },
      { id: 2, title: "Create" },
      { id: 3, title: "Edit" },
      { id: 4, title: "Delete" },
      { id: 5, title: "Details" },
    ],
  },
  {
    id: 4,
    title: "Products",
    icon: "square-3-stack-3d",
    items: [
      { id: 1, title: "List" },
      { id: 2, title: "Create" },
      { id: 3, title: "Edit" },
      { id: 4, title: "Delete" },
      { id: 5, title: "Details" },
    ],
  },
  {
    id: 5,
    title: "Staff",
    icon:"users",
    items: [
      { id: 1, title: "List" },
      { id: 2, title: "Create" },
      { id: 3, title: "Edit" },
      { id: 4, title: "Delete" },
      { id: 5, title: "Details" },
    ],
  },
  {
    id: 6,
    title: "Analytics",
    icon: "chart-pie",
    items: [
      { id: 1, title: "Overview" },
      { id: 2, title: "Statistics" },
      { id: 3, title: "Trends" },
    ],
  },
];
</script>
