/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
export default function Link({href,children,...props}:any){let target=href;if(href.startsWith('/admin'))target=`./index.html#${href.includes('popups')?'popups':href.includes('blog')?'blog':'home'}`;else if(href.startsWith('/'))target=`./front.html#${href}`;return <a {...props} href={target}>{children}</a>;}
