import { notFound } from 'next/navigation';
import { telegramCategories } from '@/lib/telegram-methods';
import { TokenManager } from '@/components/token-manager';
import { MethodList } from '@/components/method-list';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = telegramCategories.find(c => c.id === params.category);

  if (!category) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">{category.name}</h1>
      <p className="text-muted-foreground mb-8">{category.description}</p>

      <div className="mb-8">
        <TokenManager />
      </div>

      <MethodList methods={category.methods} />
    </div>
  );
}

export function generateStaticParams() {
  return telegramCategories.map((category) => ({
    category: category.id,
  }));
}