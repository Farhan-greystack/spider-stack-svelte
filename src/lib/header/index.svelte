<script lang="ts">
	import { cn } from '$lib/utils';
	import { Button } from '$lib/components/ui/button/index';
	import * as Sheet from '$lib/components/ui/sheet/index';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import { Menu, ChevronDown } from 'lucide-svelte';

	// 1. Define your recursive Menu Item Type
	type MenuItem = {
		name: string;
		href?: string;
		children?: MenuItem[];
	};

	// 2. Dynamic Data with Nested Submenus
	const navItems: MenuItem[] = [
		{ name: 'Home', href: '/' },
		{
			name: 'Products',
			children: [
				{ name: 'Analytics', href: '/products/analytics' },
				{ name: 'Marketing', href: '/products/marketing' },
				{
					name: 'Enterprise',
					children: [
						{ name: 'Security', href: '/enterprise/security' },
						{ name: 'Compliance', href: '/enterprise/compliance' }
					]
				}
			]
		},
		{
			name: 'Resources',
			children: [
				{ name: 'Blog', href: '/blog' },
				{ name: 'Case Studies', href: '/case-studies' },
				{ name: 'Help Center', href: '/help' }
			]
		},
		{ name: 'Pricing', href: '/pricing' }
	];

	// 3. Svelte 5 Runes for State
	let scrollY = $state(0);
	let mobileMenuOpen = $state(false);
	let isScrolled = $derived(scrollY > 20);
</script>

<svelte:window bind:scrollY />

<!-- 
	4. RECURSIVE SNIPPET FOR DESKTOP DROPDOWNS 
	This handles infinite nesting levels automatically.
-->
{#snippet DesktopMenuItem(item: MenuItem)}
	{#if item.children}
		<!-- It has children: Render a Submenu -->
		<DropdownMenu.Sub>
			<DropdownMenu.SubTrigger class="cursor-pointer">
				<span>{item.name}</span>
			</DropdownMenu.SubTrigger>
			<DropdownMenu.SubContent>
				{#each item.children as child}
					{@render DesktopMenuItem(child)}
				{/each}
			</DropdownMenu.SubContent>
		</DropdownMenu.Sub>
	{:else}
		<!-- No children: Render a Link Item -->
		<a href={item.href}>
			<DropdownMenu.Item class="cursor-pointer">
				{item.name}
			</DropdownMenu.Item>
		</a>
	{/if}
{/snippet}

<header
	class={cn(
		'fixed top-0 left-0 z-50 w-full transition-all duration-300 ease-in-out',
		isScrolled ? 'border-b bg-background/80 py-4 shadow-sm backdrop-blur-md' : 'bg-transparent py-6'
	)}
>
	<div class="container mx-auto flex items-center justify-between px-6">
		<!-- LOGO -->
		<a href="/" class="flex items-center gap-2 transition-opacity hover:opacity-80">
			<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
				<span class="text-lg font-bold text-primary-foreground">A</span>
			</div>
			<span
				class={cn(
					'text-xl font-bold tracking-tight transition-colors',
					isScrolled ? 'text-foreground' : 'text-white'
				)}
			>
				Acme Inc.
			</span>
		</a>

		<!-- DESKTOP NAVIGATION -->
		<nav class="hidden items-center gap-6 md:flex">
			{#each navItems as item}
				{#if item.children}
					<!-- Top Level Dropdown Trigger -->
					<DropdownMenu.Root>
						<DropdownMenu.Trigger
							class={cn(
								'flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary focus:outline-none',
								isScrolled ? 'text-foreground' : 'text-white/90 hover:text-white'
							)}
						>
							{item.name}
							<ChevronDown class="h-4 w-4 opacity-50" />
						</DropdownMenu.Trigger>
						<DropdownMenu.Content align="start" class="w-48">
							{#each item.children as child}
								<!-- Call the recursive snippet for the dropdown content -->
								{@render DesktopMenuItem(child)}
							{/each}
						</DropdownMenu.Content>
					</DropdownMenu.Root>
				{:else}
					<!-- Top Level Direct Link -->
					<a
						href={item.href}
						class={cn(
							'text-sm font-medium transition-colors hover:text-primary',
							isScrolled ? 'text-muted-foreground' : 'text-white/80 hover:text-white'
						)}
					>
						{item.name}
					</a>
				{/if}
			{/each}

			<Button
				variant={isScrolled ? 'default' : 'secondary'}
				class={cn(!isScrolled && 'bg-white text-black hover:bg-white/90')}
			>
				Get Started
			</Button>
		</nav>

		<!-- MOBILE MENU (Simple Accordion Style or Flat List) -->
		<div class="md:hidden">
			<Sheet.Root bind:open={mobileMenuOpen}>
				<Sheet.Trigger
					class={cn(
						'inline-flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-white/20 focus:outline-none',
						isScrolled ? 'text-foreground hover:bg-accent' : 'text-white'
					)}
				>
					<Menu class="h-6 w-6" />
				</Sheet.Trigger>
				<Sheet.Content side="right" class="w-[300px] overflow-y-auto">
					<Sheet.Header class="mb-6 text-left">
						<Sheet.Title>Menu</Sheet.Title>
					</Sheet.Header>

					<div class="flex flex-col gap-4">
						{#each navItems as item}
							{#if item.children}
								<!-- Mobile Group -->
								<div class="flex flex-col gap-2">
									<span class="font-semibold text-foreground/90">{item.name}</span>
									<div class="ml-4 flex flex-col gap-3 border-l pl-4">
										{#each item.children as child}
											<a
												href={child.href}
												class="text-muted-foreground hover:text-primary"
												onclick={() => (mobileMenuOpen = false)}
											>
												{child.name}
											</a>
											<!-- Note: For deeper mobile nesting, you'd recursively loop here too -->
										{/each}
									</div>
								</div>
							{:else}
								<!-- Mobile Link -->
								<a
									href={item.href}
									class="text-lg font-medium hover:text-primary"
									onclick={() => (mobileMenuOpen = false)}
								>
									{item.name}
								</a>
							{/if}
						{/each}

						<div class="mt-4 border-t pt-4">
							<Button class="w-full">Get Started</Button>
						</div>
					</div>
				</Sheet.Content>
			</Sheet.Root>
		</div>
	</div>
</header>
