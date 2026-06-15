import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import FeaturedArticlesSection from './components/FeaturedArticlesSection';
import TopicsBrowseSection from './components/TopicsBrowseSection';
import NewsletterSection from './components/NewsletterSection';
import LatestArticlesSection from './components/LatestArticlesSection';
import { ARTICLES, TOPICS } from '@/lib/data';

export default function HomePage() {
  const featuredArticles = ARTICLES?.filter((a) => a?.featured);
  const latestArticles = ARTICLES?.filter((a) => !a?.featured)?.slice(0, 6);

  return (
    <main className="bg-background min-h-screen">
      <Header />
      <HeroSection article={ARTICLES?.[0]} />
      <FeaturedArticlesSection articles={featuredArticles} allArticles={ARTICLES?.slice(0, 4)} />
      <TopicsBrowseSection topics={TOPICS} articles={ARTICLES} />
      <NewsletterSection />
      <LatestArticlesSection articles={latestArticles} />
      <Footer />
    </main>
  );
}
