<template>
  <MDC
    v-bind="$attrs"
    class="markdown-content"
    tag="p" />
</template>

<script setup lang="ts">

</script>

<style lang="scss">
$bg-dark: #1e1e1e;      // Background color
$text-light: #e0e0e0;   // Light text color for contrast
$border-dark: #444;     // Border color
$header-bg: #333;       // Header background
$row-bg: #252525;       // Alternating row background
$hover-bg: #2f2f2f;

/* Ensure paragraphs have proper spacing */
  .markdown-content {
    p {
      margin-bottom: 1rem; /* Adjust spacing */
      line-height: 1.6; /* Improve readability */
    }

    h1, h2, h3, h4, h5, h6 {
      line-height: 2 !important;
      @apply font-bold
    }

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.75rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    p, li {
      font-size: 1.1rem;
    }

    blockquote {
      font-size: 1.2rem;
    }

    ul, ol {
      margin-bottom: 1rem;
      padding-left: 1.5rem;
    }

    ul {
      list-style-type: disc;  // Ensures bullet points are visible
      padding-left: 1.5rem;   // Adds spacing to keep bullets aligned
    }

    ol {
      list-style-type: decimal; // Numbers for ordered lists
      padding-left: 1.5rem;
    }

    li {
      margin-bottom: 0.5rem; // Adds spacing between list items
      margin-left: 2rem;
    }

    pre {
      background: #f4f4f4;
      padding: 1rem;
      border-radius: 5px;
      margin-bottom: 1rem;
    }

    br {
      display: block;
      content: "";
      margin-top: 0.5rem;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 1rem;
      text-align: left;
      margin-left: 2.5rem;
     // background-color: $bg-dark; // Table background
      color: $text-light; // Text color

      th, td {
        padding: 12px;
        border: 1px solid $border-dark;
      }

      th {
        background-color: $header-bg;
        font-weight: bold;
      }

      tr:nth-child(even) {
        background-color: $row-bg;
      }

      tr:hover {
        background-color: $hover-bg;
      }

      /* Responsive table */
      display: block;
      overflow-x: auto;
      white-space: nowrap;
      max-width: 100%;
    }

    blockquote {
      border-left: 4px solid #ff9800; // Orange accent line
      background: rgba(255, 255, 255, 0.1); // Slightly lighter background
      color: #e0e0e0; // Light text color for contrast
      padding: 1rem;
      margin: 1rem 0;
      font-style: italic;
      position: relative;

      p {
        line-height: 1;
        margin-bottom: 0;
      }
    }
  }
</style>