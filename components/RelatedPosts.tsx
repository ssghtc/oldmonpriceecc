'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Post } from "@/lib/data";

interface RelatedPostsProps {
    categoryId: string;
    posts: Post[];
}

export default function RelatedPosts({ categoryId, posts }: RelatedPostsProps) {
    if (posts.length === 0) return null;

    return (
        <section className="mt-16 pt-12 border-t border-amber-900/20">
            <h2 className="text-2xl font-bold text-amber-500 mb-8">Related Items</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <Link
                        key={post.id}
                        href={`/${categoryId}/${post.slug}`}
                        className="group"
                    >
                        <Card className="h-full bg-zinc-900/50 border-amber-900/20 overflow-hidden hover:border-amber-500/50 transition-all duration-300">
                            <div className="relative h-40 w-full overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent opacity-60" />
                            </div>
                            <CardHeader className="p-4">
                                <CardTitle className="text-lg text-amber-500 group-hover:text-amber-400 transition-colors">
                                    {post.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-4 pt-0">
                                <p className="text-zinc-400 text-sm line-clamp-2">
                                    {post.description}
                                </p>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </section>
    );
}
