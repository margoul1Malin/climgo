"use client";

import Link from 'next/link';

export default function ShareLinks({ title, url }: { title: string; url: string }) {
  return (
    <div className="flex gap-2 text-gray-400 text-sm">
      <span>Partagez:</span>
      <Link href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200">Facebook</Link>
      <Link href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors duration-200">Twitter</Link>
      <Link href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors duration-200">LinkedIn</Link>
    </div>
  );
} 