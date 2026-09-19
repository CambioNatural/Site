import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './blog.css';
export default function BlogLayout({children}:{children:React.ReactNode}){return <div className="blog-page"><a className="blog-skip" href="#blog-main">Skip to content</a><Navbar bg="bg-[#f7f7f2]"/>{children}<Footer bg="bg-[#f7f7f2]"/></div>;}
