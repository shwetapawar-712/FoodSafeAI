import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SearchSection = () => {
  return (
    <section className="py-24 px-6 lg:px-8 bg-accent/50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Search Any Product
          </h2>
          <p className="text-xl text-muted-foreground">
            Can't scan right now? Search our extensive database of products manually.
          </p>
        </div>

        <div className="relative max-w-2xl mx-auto">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search any product or scan a label..."
                className="pl-12 pr-4 py-6 text-lg border-2 rounded-xl focus:ring-primary"
              />
            </div>
            <Button size="lg" className="px-8 py-6 text-lg rounded-xl">
              Search
            </Button>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-sm text-muted-foreground mb-4">Popular searches:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {['Oreo Cookies', 'Cheerios', 'Nature Valley Bars', 'Goldfish Crackers', 'Kind Bars'].map((product) => (
              <button
                key={product}
                className="px-4 py-2 bg-card rounded-lg border hover:border-primary transition-colors duration-200 text-sm text-muted-foreground hover:text-primary"
              >
                {product}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;