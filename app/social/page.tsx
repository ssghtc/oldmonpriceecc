import CategoryGrid from '@/components/CategoryGrid';
import { categories } from '@/lib/data';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Social Analytics Tools - Old Monk',
        description: 'Best tools for Instagram, TikTok, and social media growth.',
    };
}

export default function SocialPage() {
    const category = categories.find(c => c.id === 'social');
    if (!category) notFound();

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
