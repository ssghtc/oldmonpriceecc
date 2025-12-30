import ProductDetails from '@/components/ProductDetails';
import Reviews from '@/components/Reviews';
import TastingNotes from '@/components/TastingNotes';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Old Monk Rum Price in Bharatpur - 90ml, 180ml, 750ml & 1L Rates',
  description: '✅ Check the latest Old Monk rum prices in Bharatpur for 2025. Get updated rates for 90ml, 180ml, 375ml, 750ml, and 1L bottles. Complete price list and details.',
  keywords: 'Old Monk Bharatpur price 2025, Old Monk price list Bharatpur, Old Monk 750ml price Bharatpur, Old Monk 180ml price Bharatpur',
};

export default function BharatpurPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 dark:via-background dark:to-zinc-900/50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-6 sm:py-8 lg:py-12">
        <ProductDetails location="Bharatpur" />
        <TastingNotes />
        <Reviews location="Bharatpur" />
      </div>
    </main>
  );
}
