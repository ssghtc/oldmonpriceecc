import CategoryGrid from '@/components/CategoryGrid';
import { categories } from '@/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Best VPN Software - Old Monk',
    description: 'Top VPN software recommendations for 2025.',
};

export default function VpnPage() {
    const category = categories.find(c => c.id === 'vpn');
    if (!category) return null;

    return (
        <main className="min-h-screen bg-zinc-950">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <CategoryGrid
                    title={category.title}
                    posts={category.posts}
                    categoryId={category.id}
                />
            </div>
        </main>
    );
}
