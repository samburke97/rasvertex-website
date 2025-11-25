"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Container from "../components/Container";
import styles from "./search.module.css";

export default function SearchPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [hasSearched, setHasSearched] = useState(!!initialQuery);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setHasSearched(true);
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className={styles.searchPage}>
      <Container>
        <div className={styles.searchSection}>
          {hasSearched && searchQuery && (
            <h1 className={styles.resultsTitle}>
              0 search result for '{searchQuery}'
            </h1>
          )}

          {!hasSearched && (
            <h1 className={styles.searchTitle}>I'm searching for...</h1>
          )}

          <form onSubmit={handleSearch} className={styles.searchForm}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={hasSearched ? searchQuery : "I'm searching for..."}
              className={styles.searchInput}
              autoFocus
            />
            <button type="submit" className={styles.searchButton}>
              <Image
                src="/icons/utility-outline/search.svg"
                alt="Search"
                width={20}
                height={20}
              />
            </button>
          </form>
        </div>

        {hasSearched && searchQuery && (
          <div className={styles.resultsSection}>
            <div className={styles.noResults}>
              <h2 className={styles.noResultsTitle}>Nothing Found</h2>
              <p className={styles.noResultsText}>
                Sorry, but nothing matched your search terms. Please try again
                with some different keywords
              </p>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
