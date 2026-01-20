import { useState, useEffect } from "react";

export function useGitHubStars(urls: string[]): number[] {
  const [stars, setStars] = useState<number[]>(new Array(urls.length).fill(0));

  useEffect(() => {
    const fetchStars = async () => {
      const repos = urls
        .map((url) => {
          const match = url.match(/github\.com\/([^/]+)\/([^/]+)/);
          if (!match) return "";
          return `${match[1]}/${match[2].replace(/\/$/, "")}`;
        })
        .filter(Boolean);

      if (repos.length === 0) return;

      try {
        const response = await fetch(
          `/.netlify/functions/github-stars?repos=${repos.join(",")}`
        );

        if (response.ok) {
          const data: Record<string, number> = await response.json();
          const starCounts = repos.map((repo) => data[repo] || 0);
          setStars(starCounts);
        }
      } catch {
        console.error("Failed to fetch GitHub stars");
      }
    };

    fetchStars();
  }, [urls]);

  return stars;
}
