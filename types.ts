// FIX: Import React to resolve 'React' namespace error for React.ReactNode type.
import React from 'react';

export interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  shortDescription: string;
  longDescription: string;
  features: string[];
  techStack: string[];
  benefits: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  linkedin: string;
}

export type BlogContent = 
  | { type: 'heading'; content: string }
  | { type: 'paragraph'; content: string }
  | { type: 'image'; src: string; alt: string; }
  | { type: 'quote'; content: string; author: string; };

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  imageUrl: string;
  excerpt: string;
  content: BlogContent[];
  readingTime: string;
  tags: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}
// FIX: Add CaseStudy interface for case study data.
export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  imageUrl: string;
  clientLogoUrl: string;
  challenge: string;
  solution: string;
  result: string;
  keyMetrics: {
    label: string;
    value: string;
  }[];
}
