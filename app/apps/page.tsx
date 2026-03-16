import CategoryGrid from '@/components/CategoryGrid';
import { categories } from '@/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Top Apps - Old Monk',
    description: 'Best mobile apps recommendations for 2025.',
};

export default function AppsPage() {
    const category = categories.find(c => c.id === 'apps');
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
