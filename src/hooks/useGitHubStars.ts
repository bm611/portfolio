import { useState, useEffect } from "react";

interface GitHubRepo {
  stargazers_count: number;
}

export function useGitHubStars(urls: string[]): number[] {
  const [stars, setStars] = useState<number[]>(new Array(urls.length).fill(0));

  useEffect(() => {
    const fetchStars = async () => {
      const results = await Promise.all(
        urls.map(async (url) => {
          const match = url.match(/github.com\/([^/]+)\/([^/]+)/);
          if (!match) return 0;
          const repo = match[2].replace(/\/$/, "");

          try {
            const response = await fetch(
              `https://api.github.com/repos/${match[1]}/${repo}`
            );
            if (response.ok) {
              const data: GitHubRepo = await response.json();
              return data.stargazers_count;
            }
          } catch (error) {
            console.error("Failed to fetch stars:", error);
          }
          return 0;
        })
      );
      setStars(results);
    };

    fetchStars();
  }, [urls]);

  return stars;
}
