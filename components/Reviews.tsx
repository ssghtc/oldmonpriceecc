'use client';

import { useState } from 'react';
import { Star, ThumbsUp } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const getReviews = (location?: string) => {
  if (location === 'Mumbai') {
    return [
      {
        id: 1,
        name: "Aditya Shah",
        rating: 5,
        date: "March 18, 2025",
        review: "Best rum available in Mumbai! The smooth taste makes it perfect for any occasion.",
        helpful: 142
      },
      {
        id: 2,
        name: "Priya Desai",
        rating: 4,
        date: "March 1, 2025",
        review: "A Mumbai favorite for decades. Great value for money and consistently good quality.",
        helpful: 98
      },
      {
        id: 3,
        name: "Rahul Mehta",
        rating: 5,
        date: "February 15, 2025",
        review: "The go-to rum in Mumbai. Available everywhere and always delivers on taste.",
        helpful: 167
      }
    ];
  }
  return [
    {
      id: 1,
      name: "Rajesh Kumar",
      rating: 5,
      date: "March 15, 2025",
      review: "A true Indian classic! The smoothness and rich vanilla notes make it my go-to rum.",
      helpful: 124
    },
    {
      id: 2,
      name: "Sarah Williams",
      rating: 4,
      date: "February 28, 2025",
      review: "Excellent value for money. Great in cocktails and surprisingly smooth for sipping.",
      helpful: 89
    },
    {
      id: 3,
      name: "Amit Patel",
      rating: 5,
      date: "January 12, 2025",
      review: "Been drinking Old Monk for 20 years. Nothing compares to its unique taste and quality.",
      helpful: 156
    }
  ];
};

interface ReviewsProps {
  location?: string;
}

export default function Reviews({ location }: ReviewsProps) {
  const reviews = getReviews(location);
  const [helpfulCounts, setHelpfulCounts] = useState<Record<number, number>>(
    Object.fromEntries(reviews.map(review => [review.id, review.helpful]))
  );

  const handleHelpful = (reviewId: number) => {
    setHelpfulCounts(prev => ({
      ...prev,
      [reviewId]: prev[reviewId] + 1
    }));
  };

  return (
    <section className="mt-8 sm:mt-12 lg:mt-16 bg-gradient-to-br from-zinc-900/50 to-zinc-950/30 p-4 sm:p-6 lg:p-8 rounded-2xl border border-amber-900/20 shadow-lg">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">
        Customer Reviews
        {location && <span className="block text-xl sm:text-2xl mt-2">from {location}</span>}
      </h2>
      
      <div className="grid gap-4 sm:gap-6">
        {reviews.map((review) => (
          <Card key={review.id} className="bg-zinc-900/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 border border-amber-900/20">
            <CardHeader className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                <div>
                  <div className="font-semibold text-base sm:text-lg text-amber-500">{review.name}</div>
                  <div className="text-xs sm:text-sm text-amber-500/60">{review.date}</div>
                </div>
                <div className="flex items-center bg-amber-950/30 p-2 rounded-lg self-start sm:self-auto">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${
                        i < review.rating ? 'fill-amber-500 text-amber-500' : 'text-amber-900'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <p className="mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed text-amber-500/80">{review.review}</p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleHelpful(review.id)}
                className="flex items-center gap-2 bg-amber-950/30 hover:bg-amber-950/50 border-amber-900/50 text-sm sm:text-base min-h-[44px]"
              >
                <ThumbsUp className="w-4 h-4 text-amber-500" />
                <span className="text-amber-500">Helpful ({helpfulCounts[review.id]})</span>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}