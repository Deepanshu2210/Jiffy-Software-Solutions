
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { BlogContent } from '../types';

const ReadingProgressBar: React.FC = () => {
    const [width, setWidth] = useState(0);

    const scrollListener = () => {
        const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPosition = window.scrollY;
        const scrollPercent = (scrollPosition / totalHeight) * 100;
        setWidth(scrollPercent);
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollListener);
        return () => window.removeEventListener('scroll', scrollListener);
    }, []);

    return (
        <div className="fixed top-0 left-0 z-50 w-full h-1 bg-light">
            <div className="h-1 bg-accent" style={{ width: `${width}%` }} />
        </div>
    );
};


const BlogContentRenderer: React.FC<{ content: BlogContent[] }> = ({ content }) => {
    return (
        <div className="prose lg:prose-xl max-w-none text-gray-700 leading-relaxed">
            {content.map((item, index) => {
                switch (item.type) {
                    case 'heading':
                        return <h2 key={index} className="text-3xl font-bold text-dark mt-10 mb-4">{item.content}</h2>;
                    case 'paragraph':
                        return <p key={index} className="my-4">{item.content}</p>;
                    case 'image':
                        return (
                            <figure key={index} className="my-10">
                                <img src={item.src} alt={item.alt} className="rounded-lg shadow-lg w-full" />
                                <figcaption className="text-center text-sm text-gray-500 mt-2">{item.alt}</figcaption>
                            </figure>
                        );
                    case 'quote':
                        return (
                            <blockquote key={index} className="my-8 border-l-4 border-accent bg-light p-6 italic rounded-r-lg">
                                <p className="text-xl font-medium">"{item.content}"</p>
                                <cite className="block text-right not-italic mt-2 text-gray-600">- {item.author}</cite>
                            </blockquote>
                        );
                    default:
                        return null;
                }
            })}
        </div>
    );
};

const BlogPostPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const post = BLOG_POSTS.find(p => p.id === id);
    const recentPosts = BLOG_POSTS.filter(p => p.id !== id).slice(0, 3);

    if (!post) {
        return (
            <div className="container mx-auto px-4 py-20 text-center -mt-20">
                <h1 className="text-3xl font-bold">Post not found</h1>
                <Link to="/blog" className="text-accent mt-4 inline-block">← Back to Blog</Link>
            </div>
        );
    }

    return (
        <div className="animate-fade-in-up -mt-20 bg-light">
            <ReadingProgressBar />
            
            <header className="relative h-[60vh] text-white flex items-center justify-center text-center overflow-hidden pt-32 pb-20">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${post.imageUrl}')` }}
                />
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
                    <div className="flex justify-center gap-2 mb-4">
                        {post.tags.map(tag => (
                            <span key={tag} className="bg-accent/80 text-white text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
                        ))}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">{post.title}</h1>
                    <div className="mt-4 text-lg text-gray-300 flex items-center justify-center gap-4">
                        <span>By {post.author}</span>
                        <span className="hidden md:inline">|</span>
                        <span>{post.date}</span>
                        <span className="hidden md:inline">|</span>
                        <span>{post.readingTime}</span>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-12 gap-12">
                    <article className="lg:col-span-8 bg-white p-8 md:p-12 rounded-lg shadow-lg">
                        <BlogContentRenderer content={post.content} />
                    </article>

                    <aside className="lg:col-span-4">
                        <div className="sticky top-24 space-y-8">
                             <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-dark mb-4 border-b pb-2">Share this post</h3>
                                <div className="flex justify-center space-x-4">
                                    <a href="#" className="text-gray-500 hover:text-primary transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zm-1.653 19.57h2.61L6.486 3.24H3.737l13.512 17.484z"></path></svg></a>
                                    <a href="#" className="text-gray-500 hover:text-primary transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19.102 3h-14.204c-1.048 0-1.898.85-1.898 1.898v14.204c0 1.048.85 1.898 1.898 1.898h14.204c1.048 0 1.898-.85 1.898-1.898v-14.204c0-1.048-.85-1.898-1.898-1.898zm-11.433 16.035h-2.835v-9.33h2.835v9.33zm-1.42-10.564c-.93 0-1.685-.755-1.685-1.685s.755-1.685 1.685-1.685 1.685.755 1.685 1.685-.755 1.685-1.685 1.685zm12.184 10.564h-2.83v-4.575c0-1.09-.02-2.49-1.515-2.49-1.515 0-1.75.95-1.75 2.41v4.655h-2.835v-9.33h2.715v1.24h.04c.375-.71 1.29-1.45 2.675-1.45 2.86 0 3.39 1.88 3.39 4.325v4.975z" clipRule="evenodd"></path></svg></a>
                                    <a href="#" className="text-gray-500 hover:text-primary transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg></a>
                                </div>
                            </div>
                            
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-dark mb-4 border-b pb-2">Recent Posts</h3>
                                <ul className="space-y-4">
                                    {recentPosts.map(recentPost => (
                                        <li key={recentPost.id}>
                                            <Link to={`/blog/${recentPost.id}`} className="group flex items-start gap-4">
                                                <img src={recentPost.imageUrl} alt={recentPost.title} className="w-16 h-16 object-cover rounded-md flex-shrink-0" />
                                                <div>
                                                    <p className="font-semibold text-dark group-hover:text-accent transition-colors leading-tight">{recentPost.title}</p>
                                                    <p className="text-sm text-gray-500 mt-1">{recentPost.date}</p>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/blog" className="w-full text-center mt-6 bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded-lg transition duration-300 block">
                                    View All Posts
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default BlogPostPage;
