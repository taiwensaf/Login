// src/app/api/github-auth/route.ts

import { NextResponse } from 'next/server';

interface GitHubEmail {
  email: string;
  primary: boolean;
  verified: boolean;
  visibility: string | null;
}

export async function POST(request: Request) {
  try {
    const { code } = await request.json();

    // 获取 access_token
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        client_id: process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID,
        client_secret: process.env.OAUTH_CLIENT_SECRET,
        code,
      }),
    });

    const { access_token } = await tokenResponse.json();

    // 获取用户信息
    const userResponse = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    const user = await userResponse.json();

    // 获取用户邮箱
    const emailResponse = await fetch('https://api.github.com/user/emails', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const emails = await emailResponse.json();

    let primaryEmail = null;
    if (Array.isArray(emails)) {
      primaryEmail = emails.find((email: GitHubEmail) => email.primary)?.email;
    }

    return NextResponse.json({
      ...user,
      email: primaryEmail,
    });
  } catch (error) {
    console.error('GitHub auth error:', error);
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
}