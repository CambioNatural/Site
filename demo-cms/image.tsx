/* eslint-disable @next/next/no-img-element, @typescript-eslint/no-explicit-any */
import React from 'react';
export default function Image({src,alt,fill,priority,unoptimized,quality,loader,...props}:any){void priority;void unoptimized;void quality;void loader;return <img {...props} alt={alt??''} src={typeof src==='string'?src.replace(/^\/images\//,'./images/'):src.src} style={fill?{position:'absolute',inset:0,width:'100%',height:'100%',...props.style}:props.style}/>;}
