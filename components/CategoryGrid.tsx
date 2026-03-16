'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

interface Post {
    id: number;
    slug: string;
    title: string;
    description: string;
    image: string;
}

interface CategoryGridProps {
    title: string;
    posts: Post[];
    categoryHref?: string;
    categoryId: string;
}

export default function CategoryGrid({ title, posts, categoryHref, categoryId }: CategoryGridProps) {
    return (
        <section className="py-12">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-amber-500">{title}</h2>
                {categoryHref && (
                    <Link
                        href={categoryHref}
                        className="text-sm font-medium text-amber-500/70 hover:text-amber-500 transition-colors"
                    >
                        View all →
                    </Link>
                )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {posts.map((post) => (
                    <Link
                        key={post.id}
                        href={`/${categoryId}/${post.slug}`}
                        className="group"
                    >
                        <Card className="h-full bg-zinc-900/50 border-amber-900/20 overflow-hidden hover:border-amber-500/50 transition-all duration-300">
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent opacity-60" />
                            </div>
                            <CardHeader className="p-4">
                                <CardTitle className="text-xl text-amber-500 group-hover:text-amber-400 transition-colors">
                                    {post.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-4 pt-0">
                                <CardDescription className="text-zinc-400 line-clamp-2">
                                    {post.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </section>
    );
}
