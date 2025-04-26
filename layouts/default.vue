<template>
  <div class="app-container">
    <header class="header">
      <AppHeader />
    </header>

    <BreadCrumps />
    <main class="content py-2 px-0 sm:py-4 sm:px-6 xl:py-16 xl:px-32">
      <slot />
    </main>
  </div>
</template>