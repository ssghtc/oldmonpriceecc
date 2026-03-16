import { categories } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronLeft, ExternalLink, CheckCircle2 } from 'lucide-react';
import RelatedPosts from '@/components/RelatedPosts';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const category = categories.find(c => c.id === 'games');
    const post = category?.posts.find(p => p.slug === slug);

    return {
        title: `${post?.title || 'Post'} - Top Games`,
        description: post?.description,
    };
}

export default async function GamePostPage({ params }: Props) {
    const { slug } = await params;
    const categoryId = 'games';
    const category = categories.find(c => c.id === categoryId);
    const post = category?.posts.find(p => p.slug === slug);

    if (!post || !category) notFound();

    const relatedPosts = category.posts.filter(p => post.relatedSlugs.includes(p.slug));

    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-100">
            <div className="max-w-4xl mx-auto px-4 py-12">
                <Link
                    href="/games"
                    className="inline-flex items-center text-amber-500 hover:text-amber-400 mb-8 transition-colors"
                >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Back to Games
                </Link>

                <article className="space-y-12">
                    {/* Hero Section */}
                    <div className="relative h-[400px] w-full rounded-3xl overflow-hidden border border-amber-900/20 shadow-2xl">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                        <div className="absolute bottom-8 left-8 right-8">
                            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">{post.title}</h1>
                            <p className="text-amber-500 text-xl font-medium max-w-2xl">{post.description}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            <div className="bg-zinc-900/40 border border-amber-900/10 rounded-2xl p-8 backdrop-blur-sm">
                                <h2 className="text-2xl font-bold text-amber-500 mb-4">Gameplay & Details</h2>
                                <p className="text-zinc-300 leading-relaxed text-lg whitespace-pre-wrap">
                                    {post.content}
                                </p>
                            </div>

                            <div className="bg-zinc-900/40 border border-amber-900/10 rounded-2xl p-8 backdrop-blur-sm">
                                <h2 className="text-2xl font-bold text-amber-500 mb-6">Game Features</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {post.features.map((feature, index) => (
                                        <div key={index} className="flex items-center space-x-3 text-zinc-300 group">
                                            <CheckCircle2 className="h-5 w-5 text-amber-500/70 group-hover:text-amber-500 transition-colors" />
                                            <span className="text-lg">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-6 sticky top-24">
                                <h3 className="text-xl font-bold text-amber-500 mb-4">Join the Game</h3>
                                <a
                                    href={post.officialLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-full px-6 py-4 bg-amber-500 hover:bg-amber-600 text-zinc-950 font-bold rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/20 group"
                                >
                                    Download Now
                                    <ExternalLink className="h-5 w-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </a>
                                <p className="text-zinc-500 text-sm mt-4 text-center">
                                    Official download link for verified experience.
                                </p>
                            </div>
                        </div>
                    </div>

                    <RelatedPosts categoryId={categoryId} posts={relatedPosts} />
                </article>
            </div>
        </main>
    );
}
