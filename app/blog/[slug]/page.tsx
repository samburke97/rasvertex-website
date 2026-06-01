// app/blog/[slug]/page.tsx

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  BLOG_POSTS,
  getPostBySlug,
  getRelatedPosts,
  type BlogBlock,
} from "../../data/blogData";
import styles from "./Article.module.css";

// ─── Static params ────────────────────────────────────────────
export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

// ─── Metadata ─────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | RAS-VERTEX Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      url: `https://rasvertex.com.au/blog/${post.slug}`,
      siteName: "RAS-VERTEX",
      images: [
        {
          url: `https://rasvertex.com.au${post.coverImage}`,
          alt: post.coverAlt,
        },
      ],
    },
  };
}

// ─── Body block renderer ──────────────────────────────────────
function renderBlock(block: BlogBlock, index: number) {
  switch (block.type) {
    case "p":
      return (
        <p key={index} className={styles.bodyP}>
          {block.text}
        </p>
      );
    case "h2":
      return (
        <h2 key={index} className={styles.bodyH2}>
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={index} className={styles.bodyH3}>
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul key={index} className={styles.bodyUl}>
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "image":
      return (
        <figure key={index} className={styles.bodyFigure}>
          <div className={styles.bodyImageWrap}>
            <Image
              src={block.src}
              alt={block.alt}
              fill
              className={styles.bodyImage}
              sizes="(max-width: 860px) 100vw, 720px"
            />
          </div>
          {block.caption && (
            <figcaption className={styles.bodyCaption}>
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
  }
}

// ─── Page ─────────────────────────────────────────────────────
export default function ArticlePage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug);

  const publishedFormatted = new Date(post.publishedAt).toLocaleDateString(
    "en-AU",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    },
  );

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `https://rasvertex.com.au${post.coverImage}`,
    datePublished: post.publishedAt,
    author: { "@type": "Person", name: post.author.name },
    publisher: {
      "@type": "Organization",
      name: "RAS-VERTEX",
      url: "https://rasvertex.com.au",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main aria-label={post.title}>
        {/* ── Article header ── */}
        <header className="px-10 py-20">
          <div className={styles.articleHeader}>
            {/* Back link */}
            <Link
              href="/blog"
              className={styles.back}
              aria-label="Back to all articles"
            >
              ← All articles
            </Link>

            {/* Meta */}
            <div className={styles.headerMeta}>
              <span className={styles.category}>{post.category}</span>
              <span className={styles.metaDot} aria-hidden="true" />
              <time dateTime={post.publishedAt}>{publishedFormatted}</time>
              <span className={styles.metaDot} aria-hidden="true" />
              <span>{post.readingTime} min read</span>
            </div>

            {/* Title */}
            <h1 className={styles.articleTitle}>{post.title}</h1>

            {/* Excerpt */}
            <p className={styles.articleExcerpt}>{post.excerpt}</p>

            {/* Author */}
            <div className={styles.authorRow}>
              <div className={styles.avatarWrap}>
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className={styles.avatar}
                />
              </div>
              <div>
                <p className={styles.authorName}>{post.author.name}</p>
                <p className={styles.authorRole}>{post.author.role}</p>
              </div>
            </div>
          </div>
        </header>

        {/* ── Cover image ── */}
        <div className="px-10">
          <div className={styles.coverWrap}>
            <Image
              src={post.coverImage}
              alt={post.coverAlt}
              fill
              className={styles.cover}
              priority
              sizes="(max-width: 860px) 100vw, 1200px"
            />
          </div>
        </div>

        {/* ── Article body ── */}
        <article
          className={`px-10 py-20 ${styles.articleBody}`}
          aria-label="Article content"
        >
          <div className={styles.prose}>
            {post.body.map((block, i) => renderBlock(block, i))}
          </div>

          {/* CTA strip */}
          <aside className={styles.ctaStrip} aria-label="Get in touch">
            <div>
              <h3>Ready to talk about your building?</h3>
              <p className="p-soft">
                We&rsquo;ll be on site within 48 hours. No obligation.
              </p>
            </div>
            <Link
              href="/contact"
              className={styles.ctaButton}
              aria-label="Contact RAS-VERTEX"
            >
              Get a free quote →
            </Link>
          </aside>
        </article>

        {/* ── Related posts ── */}
        {related.length > 0 && (
          <section className="px-10 pb-20" aria-labelledby="related-heading">
            <div className={styles.relatedHeader}>
              <h2 id="related-heading">More from the blog</h2>
              <Link href="/blog" className={styles.allLink}>
                All articles →
              </Link>
            </div>
            <div className={styles.relatedGrid}>
              {related.map((p) => (
                <article
                  key={p.slug}
                  className={styles.relatedCard}
                  aria-labelledby={`related-${p.slug}`}
                >
                  <Link
                    href={`/blog/${p.slug}`}
                    className={styles.relatedImageLink}
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <div className={styles.relatedImageWrap}>
                      <Image
                        src={p.coverImage}
                        alt={p.coverAlt}
                        fill
                        className={styles.relatedImage}
                        sizes="33vw"
                      />
                    </div>
                  </Link>
                  <div className={styles.relatedBody}>
                    <span className={styles.relatedCategory}>{p.category}</span>
                    <h3
                      id={`related-${p.slug}`}
                      className={styles.relatedTitle}
                    >
                      <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}
