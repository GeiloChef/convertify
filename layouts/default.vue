<template>
  <div class="app-container">
    <header class="header">
      <AppHeader />
    </header>

    <BreadCrumps />
    <main class="content py-16 px-32">
      <slot />
    </main>
  </div>
</template>