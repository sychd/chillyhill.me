<script lang="ts">
  import { CATEGORIES, type Post, type Category } from '$lib/types';
  import PostsList from './PostsList.svelte';

  let { posts }: { posts: Post[] } = $props();

  const tabs = [
    {
      id: 'stories',
      name: 'Stories',
      filter: (post: Post) => post.categories.includes('story' as Category)
    },
    {
      id: 'bookNotes',
      name: 'Book notes',
      filter: (post: Post) => post.categories.includes('book notes' as Category)
    },
    {
      id: 'other',
      name: 'Others',
      filter: (post: Post) =>
        !(
          post.categories.includes('story' as Category) ||
          post.categories.includes('book notes' as Category)
        )
    }
  ];

  let activeTab: string = $state(tabs[0].id);

  const categorizedPosts = $derived(() => {
    const categories: Record<string, Post[]> = {};
    tabs.forEach((tab) => (categories[tab.id] = [])); // Initialize empty arrays for each tab

    posts.forEach((post) => {
      for (const tab of tabs) {
        if (tab.filter(post)) {
          categories[tab.id].push(post);
          break;
        }
      }
    });

    return categories;
  });

  function selectTab(tabId: string) {
    activeTab = tabId;
  }
</script>

<div class="mb-6 flex space-x-2 border-b border-gray-200 dark:border-gray-700">
  {#each tabs as tab (tab.id)}
    <button
      class="rounded-t-lg px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200
              hover:bg-primary/90
             hover:text-white focus:ring-primary
             dark:text-gray-300"
      class:bg-primary={activeTab === tab.id}
      class:text-white={activeTab === tab.id}
      class:dark:bg-primary={activeTab === tab.id}
      class:dark:text-white={activeTab === tab.id}
      onclick={() => selectTab(tab.id)}
    >
      {tab.name}
    </button>
  {/each}
</div>

{#each tabs as tab}
  {#if activeTab === tab.id}
    <PostsList posts={categorizedPosts()[tab.id]} />
  {/if}
{/each}
