import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

interface RepoStars {
  [key: string]: number;
}

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  const reposParam = event.queryStringParameters?.repos;

  if (!reposParam) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing repos parameter" }),
    };
  }

  const repos = reposParam.split(",").filter(Boolean);

  if (repos.length === 0) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "No valid repos provided" }),
    };
  }

  const token = process.env.GITHUB_TOKEN;
  void context;
  const results: RepoStars = {};

  await Promise.all(
    repos.map(async (repo) => {
      try {
        const response = await fetch(`https://api.github.com/repos/${repo}`, {
          headers: token
            ? { Authorization: `Bearer ${token}`, "User-Agent": "Netlify" }
            : { "User-Agent": "Netlify" },
        });

        if (response.ok) {
          const data = await response.json();
          results[repo] = data.stargazers_count || 0;
        } else {
          results[repo] = 0;
        }
      } catch {
        results[repo] = 0;
      }
    })
  );

  return {
    statusCode: 200,
    body: JSON.stringify(results),
  };
};

export { handler };
