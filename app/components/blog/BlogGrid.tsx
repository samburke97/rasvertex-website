// app/components/blog/BlogGrid.tsx

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

function BlogCard({
  post,
  featured = false,
}: {
  post: BlogPost;
  featured?: boolean;
}) {
  return (
    <article
      className={`${styles.card} ${featured ? styles.cardFeatured : ""}`}
      aria-labelledby={`post-${post.slug}`}
    >
      <Link
        href={`/blog/${post.slug}`}
        className={styles.cardLink}
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className={styles.imageWrap}>
          <Image
            src={post.coverImage}
            alt={post.coverAlt}
            fill
            className={styles.image}
            sizes={
              featured
                ? "(max-width: 860px) 100vw, 55vw"
                : "(max-width: 860px) 100vw, 33vw"
            }
          />
        </div>
      </Link>

      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.category}>{post.category}</span>
          <span className={styles.dot} aria-hidden="true" />
          <time dateTime={post.publishedAt} className={styles.date}>
            {formatDate(post.publishedAt)}
          </time>
          <span className={styles.dot} aria-hidden="true" />
          <span className={styles.read}>{post.readingTime} min read</span>
        </div>

        <h2 id={`post-${post.slug}`} className={styles.title}>
          <Link href={`/blog/${post.slug}`} className={styles.titleLink}>
            {post.title}
          </Link>
        </h2>

        <p className={styles.excerpt}>{post.excerpt}</p>

        <div className={styles.footer}>
          <div className={styles.author}>
            <div className={styles.avatarWrap}>
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className={styles.avatar}
              />
            </div>
            <span className={styles.authorName}>{post.author.name}</span>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className={styles.readMore}
            aria-label={`Read: ${post.title}`}
          >
            Read →
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function BlogGrid() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <div className={styles.wrap}>
      {/* Featured post */}
      <div className={styles.featuredRow}>
        <BlogCard post={featured} featured />
      </div>

      {/* Grid of remaining posts */}
      {rest.length > 0 && (
        <div className={styles.grid}>
          {rest.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
