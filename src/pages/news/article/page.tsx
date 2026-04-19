import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../../../components/feature/Navbar';
import Footer from '../../../components/feature/Footer';
import { newsArticles, tagColors } from '../../../mocks/news';

export default function NewsArticlePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const article = newsArticles.find((a) => a.id === Number(id));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center text-center px-6 mt-20">
          <div className="w-16 h-16 flex items-center justify-center bg-amber-100 rounded-full mb-5">
            <i className="ri-file-unknow-line text-3xl text-amber-500"></i>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Article Not Found</h1>
          <p className="text-gray-500 mb-6">This article may have been removed or the link is incorrect.</p>
          <Link
            to="/news"
            className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer"
          >
            <i className="ri-arrow-left-line"></i>
            Back to News &amp; Events
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedArticles = newsArticles.filter((a) => article.relatedIds.includes(a.id));

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Image */}
      <section className="relative mt-20 h-[420px] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${tagColors[article.tag] || 'bg-gray-100 text-gray-600'}`}>
              {article.tag}
            </span>
            <span className="text-white/80 text-sm">{article.date}</span>
            <span className="text-white/60 text-sm hidden sm:block">·</span>
            <span className="text-white/70 text-sm hidden sm:block">{article.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight max-w-3xl">
            {article.title}
          </h1>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-teal-600 text-sm font-medium hover:text-teal-700 mb-8 transition-colors cursor-pointer"
            >
              <i className="ri-arrow-left-line text-base"></i>
              Back to News &amp; Events
            </button>

            {/* Meta */}
            <div className="flex items-center gap-4 pb-6 mb-8 border-b border-gray-100">
              <div className="w-10 h-10 flex items-center justify-center bg-teal-100 rounded-full flex-shrink-0">
                <i className="ri-user-line text-teal-600 text-lg"></i>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{article.author}</p>
                <p className="text-xs text-gray-400">{article.date} · {article.readTime}</p>
              </div>
              <div className="ml-auto flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${tagColors[article.tag] || 'bg-gray-100 text-gray-600'}`}>
                  {article.tag}
                </span>
              </div>
            </div>

            {/* Lead Summary */}
            <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8 border-l-4 border-amber-400 pl-5">
              {article.summary}
            </p>

            {/* Body Paragraphs */}
            <div className="space-y-5">
              {article.body.map((paragraph, idx) => (
                <p key={idx} className="text-gray-700 leading-relaxed text-base">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Share / Back */}
            <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <Link
                to="/news"
                className="inline-flex items-center gap-2 text-teal-600 font-medium text-sm hover:text-teal-700 transition-colors cursor-pointer"
              >
                <i className="ri-arrow-left-line"></i>
                Back to all news
              </Link>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-400">Share:</span>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-teal-100 hover:text-teal-600 text-gray-600 transition-colors cursor-pointer"
                >
                  <i className="ri-facebook-fill text-base"></i>
                </a>
                <button
                  onClick={() => navigator.clipboard.writeText(window.location.href)}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-teal-100 hover:text-teal-600 text-gray-600 transition-colors cursor-pointer"
                  title="Copy link"
                >
                  <i className="ri-link text-base"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-14 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.id}
                    to={`/news/${related.id}`}
                    className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer block"
                    style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.07)' }}
                  >
                    <div className="w-full h-44 overflow-hidden">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${tagColors[related.tag] || 'bg-gray-100 text-gray-600'}`}>
                          {related.tag}
                        </span>
                        <span className="text-xs text-gray-400">{related.date}</span>
                      </div>
                      <h3 className="text-sm font-bold text-gray-900 line-clamp-2 leading-snug mb-2">{related.title}</h3>
                      <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">{related.summary}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
