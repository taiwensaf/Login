// src/utils/githubAuth.ts

// 检查并导出 GitHub Client ID
if (!process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID) {
  console.error('GitHub Client ID is not set. Please check your environment variables.');
}
export const GITHUB_CLIENT_ID = process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID || '';

if (!GITHUB_CLIENT_ID) {
  console.error('GitHub Client ID is empty. OAuth will not work.');
}

export const GITHUB_AUTH_URL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=user:email`;

export interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  email?: string;
  name?: string;
}

export const getGitHubUser = async (code: string): Promise<GitHubUser> => {
  try {
    const response = await fetch('/api/github-auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    });

    if (!response.ok) {
      throw new Error('Failed to get GitHub user');
    }

    return await response.json();
  } catch (error) {
    console.error('Error getting GitHub user:', error);
    throw error;
  }
};