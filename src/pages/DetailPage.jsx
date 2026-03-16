import React from "react";
import { useParams, Link} from 'react-router-dom';
import posts from "../data/posts";

export default function DetailPage() {
    const { id } = useParams();
    const post = posts.find((p) => p.id === Number(id));

    if(!post) {
        return (
            <div className="text-center p-20">
                <h2 className="text-2xl font-bold mb-4">記事が見つかりませんでした。</h2>
            </div>
        );
    }

    return (
        <article>
            <img src={post.thumbnailUrl} alt={post.title} className="w-full h-64 object-cover mb-8" />
            <div className="flex justify-between items-center mb-8">
                <span className="text-gray-400">{post.createdAt.slice(0, 10)}</span>
                <div className="flex gap-2">
                    {post.categories.map(cat => <span key={cat} className="bg-black text-white px-2 py-1 text xs">{cat}</span>)}
                </div>
            </div>
            <h1 className="text-3xl font-bold mb-8">{post.title}</h1>
            <div className="leading-loose" dangerouslySetInnerHTML={{ __html: post.content}} />
        </article>
    );
}