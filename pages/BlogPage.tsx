import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { BLOG_POSTS } from '../constants';
import { BlogPost } from '../types';
import TypingEffect from '../components/TypingEffect';

const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
        <Link to={`/blog/${post.id}`}>
            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
        </Link>
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-dark mb-2">
                <Link to={`/blog/${post.id}`} className="hover:text-accent transition-colors">{post.title}</Link>
            </h3>
            <p className="text-sm text-gray-500 mb-4">By {post.author} on {post.date}</p>
            <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
            <Link to={`/blog/${post.id}`} className="font-bold text-accent hover:underline mt-auto">
                Read More &rarr;
            </Link>
        </div>
    </div>
);

const BlogPage: React.FC = () => {
    return (
        <div className="animate-fade-in-up -mt-20">
            <header
                className="relative text-white flex items-center justify-center text-center overflow-hidden pt-32 pb-20"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center -z-10"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1920&auto=format&fit=crop')` }}
                />
                <div className="absolute inset-0 bg-primary/70 -z-10"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold">Our Blog</h1>
                    <TypingEffect text="Insights, trends, and news from the world of technology and software development." />
                </div>
            </header>

            <section className="py-20 bg-light">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {BLOG_POSTS.map(post => (
                            <BlogPostCard key={post.id} post={post} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPage;