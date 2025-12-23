import { Zap, Shield, Palette, Code2 } from 'lucide-react';
import FeatureCard from './ui/FeatureCard';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Built with Vite for instant hot module replacement and optimized production builds.',
  },
  {
    icon: Shield,
    title: 'Type Safe',
    description: 'Full TypeScript support with strict mode enabled for maximum code reliability.',
  },
  {
    icon: Palette,
    title: 'Beautiful UI',
    description: 'Tailwind CSS configured with a professional design system ready to customize.',
  },
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Organized structure with ESLint, best practices, and production-ready patterns.',
  },
];

export default function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Start building immediately with a modern tech stack and thoughtful defaults.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
