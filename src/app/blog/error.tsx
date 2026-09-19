'use client';
export default function ErrorPage({retry}:{retry:()=>void}){return <main id="blog-main" className="blog-wrap blog-empty"><h1>We couldn’t load the stories.</h1><p>Please try again in a moment.</p><button className="blog-button" onClick={retry}>Try again</button></main>;}
