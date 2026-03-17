import { ArrowRight, Clock, User } from 'lucide-react'
import PageHero from '../components/PageHero.tsx'

interface BlogPost {
  id: number
  category: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  featured?: boolean
}

const posts: BlogPost[] = [
  {
    id: 1,
    category: 'Financial Inclusion',
    title: 'How SmartPay is Driving Financial Inclusion Across Nigeria',
    excerpt: 'Financial inclusion remains one of Nigeria\'s biggest challenges. SmartPay Finance & Holdings Limited is tackling this head-on with agency banking and digital solutions that bring financial services to the underserved.',
    author: 'SmartPay Team',
    date: 'February 20, 2025',
    readTime: '5 min read',
    featured: true,
  },
  {
    id: 2,
    category: 'Agency Banking',
    title: 'What is Agency Banking and How Can You Benefit?',
    excerpt: 'Agency banking allows individuals and businesses to offer financial services on behalf of a bank. Learn how becoming a SmartPay agent can grow your income.',
    author: 'SmartPay Team',
    date: 'February 10, 2025',
    readTime: '4 min read',
  },
  {
    id: 3,
    category: 'Savings',
    title: '5 Smart Savings Tips for Nigerians in 2025',
    excerpt: 'Building a savings habit doesn\'t have to be hard. Here are five practical strategies to help you grow your wealth with SmartPay\'s savings products.',
    author: 'SmartPay Team',
    date: 'January 28, 2025',
    readTime: '3 min read',
  },
  {
    id: 4,
    category: 'Business',
    title: 'How POS Terminals Are Transforming Small Businesses in Nigeria',
    excerpt: 'Point-of-sale terminals have become essential for SMEs across Nigeria. Discover how SmartPay\'s POS solutions are helping merchants increase revenue and serve customers better.',
    author: 'SmartPay Team',
    date: 'January 15, 2025',
    readTime: '6 min read',
  },
  {
    id: 5,
    category: 'Loans',
    title: 'Understanding SmartPay Loan Products: A Complete Guide',
    excerpt: 'Whether you need a personal loan or business financing, SmartPay offers flexible loan products tailored to your needs. Here\'s everything you need to know.',
    author: 'SmartPay Team',
    date: 'January 5, 2025',
    readTime: '5 min read',
  },
  {
    id: 6,
    category: 'Technology',
    title: 'The Role of Fintech in Nigeria\'s Economic Growth',
    excerpt: 'Nigeria\'s fintech sector is one of the fastest growing in Africa. SmartPay Finance & Holdings Limited explores how digital finance is reshaping the economy and creating opportunities.',
    author: 'SmartPay Team',
    date: 'December 20, 2024',
    readTime: '7 min read',
  },
]

const categories = ['All', 'Financial Inclusion', 'Agency Banking', 'Savings', 'Business', 'Loans', 'Technology']

const categoryColors: Record<string, string> = {
  'Financial Inclusion': 'bg-primary-50 text-primary-700',
  'Agency Banking': 'bg-blue-50 text-blue-700',
  'Savings': 'bg-green-50 text-green-700',
  'Business': 'bg-purple-50 text-purple-700',
  'Loans': 'bg-rose-50 text-rose-700',
  'Technology': 'bg-amber-50 text-amber-700',
}

export default function BlogPage(): JSX.Element {
  const featured = posts.find((p) => p.featured)
  const rest = posts.filter((p) => !p.featured)

  return (
    <div className="pt-24">
      <PageHero
        badge="Blog"
        title={<>Insights &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">Updates</span></>}
        subtitle="Stay informed with the latest news, tips, and insights from SmartPay Finance & Holdings Limited."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button key={cat} className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${cat === 'All' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-dark-600 hover:bg-primary-50 hover:text-primary-700'}`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Featured post */}
          {featured && (
            <div className="mb-12 rounded-3xl bg-gradient-to-r from-primary-600 to-primary-900 p-10 lg:p-14 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <div className="relative max-w-3xl">
                <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">{featured.category}</span>
                <h2 className="text-3xl lg:text-4xl font-display font-extrabold leading-tight mb-4">{featured.title}</h2>
                <p className="text-white/70 leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-6 text-white/50 text-sm mb-6">
                  <span className="flex items-center gap-1.5"><User size={14} />{featured.author}</span>
                  <span className="flex items-center gap-1.5"><Clock size={14} />{featured.readTime}</span>
                  <span>{featured.date}</span>
                </div>
                <button className="inline-flex items-center gap-2 bg-white text-primary-700 font-bold px-6 py-3 rounded-full hover:bg-primary-50 transition-colors">
                  Read Article <ArrowRight size={15} />
                </button>
              </div>
            </div>
          )}

          {/* Post grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <article key={post.id} className="group bg-gray-50 rounded-3xl p-7 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-5 ${categoryColors[post.category] ?? 'bg-gray-100 text-gray-600'}`}>
                  {post.category}
                </span>
                <h3 className="font-display font-bold text-dark-900 text-lg leading-snug mb-3 group-hover:text-primary-700 transition-colors">{post.title}</h3>
                <p className="text-dark-500 text-sm leading-relaxed mb-5">{post.excerpt}</p>
                <div className="flex items-center justify-between text-dark-400 text-xs">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
                    <span>{post.date}</span>
                  </div>
                  <ArrowRight size={15} className="text-primary-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
