"use client";

// app/components/blog/BlogGrid.tsx

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS, type BlogPost } from "../../data/blogData";
import styles from "./BlogGrid.module.css";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function FeaturedCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className={styles.featuredCard} aria-label={post.title}>
      {/* Left — text */}
      <div className={styles.featuredBody}>
        <div className={styles.meta}>
          <span className={styles.category}>{post.category}</span>
          <span className={styles.dot} aria-hidden="true" />
          <time dateTime={post.publishedAt} className={styles.date}>
            {formatDate(post.publishedAt)}
          </time>
        </div>

        <h2>{post.title}</h2>

        <p className={styles.featuredExcerpt}>{post.excerpt}</p>

        <div className={styles.featuredFooter}>
          <span className={styles.readMore}>Read article</span>
        </div>
      </div>

      {/* Right — image */}
      <div className={styles.featuredImageWrap}>
        <Image
          src={post.coverImage}
          alt={post.coverAlt}
          fill
          className={styles.image}
          sizes="(max-width: 860px) 100vw, 50vw"
          priority
        />
      </div>
    </Link>
  );
}

function GridCard({ post }: { post: BlogPost }) {
  return (
    <article className={styles.card} aria-labelledby={`post-${post.slug}`}>
      <Link href={`/blog/${post.slug}`} className={styles.cardImageLink} tabIndex={-1} aria-hidden="true">
        <div className={styles.imageWrap}>
          <Image
            src={post.coverImage}
            alt={post.coverAlt}
            fill
            className={styles.image}
            sizes="(max-width: 860px) 100vw, 33vw"
          />
        </div>
      </Link>

      <div className={styles.cardBody}>
        <span className={styles.category}>{post.category}</span>
        <h3 id={`post-${post.slug}`}>
          <Link href={`/blog/${post.slug}`} className={styles.titleLink}>
            {post.title}
          </Link>
        </h3>
        <p className={styles.cardExcerpt}>{post.excerpt}</p>
        <Link href={`/blog/${post.slug}`} className={styles.readMore} aria-label={`Read: ${post.title}`}>
          Read more
        </Link>
      </div>
    </article>
  );
}

const INITIAL_COUNT = 3;

export default function BlogGrid() {
  const sorted = [...BLOG_POSTS].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  const [featured, ...rest] = sorted;
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? rest : rest.slice(0, INITIAL_COUNT);
  const hasMore = !showAll && rest.length > INITIAL_COUNT;

  return (
    <div className={styles.wrap}>
      {/* Section heading */}
      <div className={styles.sectionHead}>
        <h1>Insights from<br />the field.</h1>
      </div>

      {/* Hero featured post */}
      <FeaturedCard post={featured} />

      {/* Grid */}
      {rest.length > 0 && (
        <div className={styles.grid}>
          {visible.map((post) => (
            <GridCard key={post.slug} post={post} />
          ))}
        </div>
      )}

      {/* Load more */}
      {hasMore && (
        <div className={styles.loadMoreWrap}>
          <button
            onClick={() => setShowAll(true)}
            className={styles.loadMoreBtn}
            aria-label="Load more articles"
          >
            Load more ↓
          </button>
        </div>
      )}
    </div>
  );
}
