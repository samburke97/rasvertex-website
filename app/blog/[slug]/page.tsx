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
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
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
      url: `https://www.ras-vertex.com.au/blog/${post.slug}`,
      siteName: "RAS-VERTEX",
      images: [
        {
          url: `https://www.ras-vertex.com.au${post.coverImage}`,
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

// ─── Date helpers ─────────────────────────────────────────────
function ordinal(n: number): string {
  if (n >= 11 && n <= 13) return `${n}th`;
  switch (n % 10) {
    case 1:
      return `${n}st`;
    case 2:
      return `${n}nd`;
    case 3:
      return `${n}rd`;
    default:
      return `${n}th`;
  }
}

function formatPublishedOn(iso: string): string {
  const d = new Date(iso);
  const month = d.toLocaleDateString("en-AU", { month: "long" });
  return `Published on ${ordinal(d.getDate())} ${month} ${d.getFullYear()}`;
}

// ─── Page ─────────────────────────────────────────────────────
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug);

  const publishedFormatted = new Date(post.publishedAt).toLocaleDateString(
    "en-AU",
    { day: "numeric", month: "long", year: "numeric" },
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `https://www.ras-vertex.com.au${post.coverImage}`,
    datePublished: post.publishedAt,
    author: { "@type": "Person", name: post.author.name },
    publisher: {
      "@type": "Organization",
      name: "RAS-VERTEX",
      url: "https://www.ras-vertex.com.au",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main aria-label={post.title}>
        {/* ── Hero: text left / cover image right ── */}
        <header className={`px-10 pt-10 ${styles.heroSection}`}>
          <div className={styles.articleHero}>
            {/* Left — meta + title + excerpt + author */}
            <div className={styles.articleHeader}>
              <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                <Link href="/blog" className={styles.breadcrumbLink}>
                  Blog
                </Link>
                <span className={styles.breadcrumbSep} aria-hidden="true">
                  /
                </span>
                <span className={styles.breadcrumbCurrent}>{post.title}</span>
              </nav>

              <div className={styles.headerMeta}>
                <span className={styles.category}>{post.category}</span>
                <span className={styles.metaDot} aria-hidden="true" />
                <span>{post.readingTime} min read</span>
              </div>

              <h1 className={styles.articleTitle}>{post.title}</h1>

              <p className={styles.articleExcerpt}>{post.excerpt}</p>
            </div>

            {/* Right — cover image */}
            <div className={styles.coverWrap}>
              <Image
                src={post.coverImage}
                alt={post.coverAlt}
                fill
                className={styles.cover}
                priority
                sizes="(max-width: 860px) 100vw, 50vw"
              />
            </div>
          </div>
        </header>

        {/* ── Article body ── */}
        <article
          className={`px-10 pt-20 pb-20 ${styles.articleBody}`}
          aria-label="Article content"
        >
          <div className={styles.prose}>
            {post.body.map((block, i) => renderBlock(block, i))}
          </div>

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
              <time dateTime={post.publishedAt} className={styles.authorDate}>
                {formatPublishedOn(post.publishedAt)}
              </time>
            </div>
          </div>
        </article>

        {/* ── Related posts ── */}
        {related.length > 0 && (
          <section className="px-10 pb-20" aria-labelledby="related-heading">
            <div className={styles.relatedHeader}>
              <h2 id="related-heading">More from the blog</h2>
              <Link href="/blog" className={styles.allLink}>
                All articles
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
