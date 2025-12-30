import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TastingNotes() {
  return (
    <section className="mt-8 sm:mt-12 lg:mt-16 bg-gradient-to-br from-amber-100/50 to-transparent dark:from-amber-950/20 p-4 sm:p-6 lg:p-8 rounded-2xl border border-amber-200/50 dark:border-amber-900/50 shadow-lg">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-amber-900 to-amber-700 dark:from-amber-500 dark:to-amber-700 bg-clip-text text-transparent">Tasting Notes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <Card className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-xl sm:text-2xl text-amber-900 dark:text-amber-500">Aroma</CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0">
            <p className="leading-relaxed text-sm sm:text-base">Rich vanilla, caramel, and dark chocolate notes with hints of tropical spices.
               The signature Old Monk bouquet carries subtle undertones of oak and molasses.</p>
          </CardContent>
        </Card>
        <Card className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-xl sm:text-2xl text-amber-900 dark:text-amber-500">Palate</CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0">
            <p className="leading-relaxed text-sm sm:text-base">Smooth and full-bodied with dominant flavors of vanilla and cocoa.
               Well-balanced sweetness with notes of toffee, coffee, and dried fruits.</p>
          </CardContent>
        </Card>
        <Card className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-xl sm:text-2xl text-amber-900 dark:text-amber-500">Finish</CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0">
            <p className="leading-relaxed text-sm sm:text-base">Long and warming with lingering notes of chocolate and spices.
               The characteristic smoothness makes it perfect for sipping neat or in cocktails.</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-8 sm:mt-12 space-y-6 sm:space-y-8">
        <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl border border-amber-200/50 dark:border-amber-900/50">
          <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-amber-900 dark:text-amber-500">Production Process</h3>
          <p className="leading-relaxed text-sm sm:text-base lg:text-lg">
            Old Monk is crafted using carefully selected molasses, which are fermented and distilled
            in traditional copper pot stills. The rum is then aged for a minimum of 7 years in oak
            barrels, allowing it to develop its complex flavor profile and signature dark color.
          </p>
        </div>
        
        <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl border border-amber-200/50 dark:border-amber-900/50">
          <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-amber-900 dark:text-amber-500">Serving Suggestions</h3>
          <ul className="list-none space-y-3 sm:space-y-4">
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-sm sm:text-base">Neat or on the rocks to appreciate its full flavor profile</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-sm sm:text-base">Mixed with cola for the classic Old Monk and Cola</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-sm sm:text-base">In tropical cocktails where dark rum is called for</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-sm sm:text-base">As a digestif after meals</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}