// src/App.js
import React, { useState } from 'react';
import LoginCard from './components/LoginCard';

function App() {
  const [user, setUser] = useState(null); // 存储登录后的用户信息
  // GitHub 登录回调
  const handleGithubLogin = async () => {
    // 模拟调用 GitHub API 或者返回固定示例数据
    const response = await fetch('https://api.github.com/users/octocat');
    if (response.ok) {
      const data = await response.json();
      // GitHub 用户数据示例：login, avatar_url 等
      setUser({
        name: data.login,
        avatar: data.avatar_url,
        email: data.email || '', // 可能为 null，可视情况处理
      });
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>欢迎，{user.name}</h2>
          <img src={user.avatar} alt="Avatar" width="100" />
          <p>邮箱：{user.email || '无公开邮箱'}</p>
        </div>
      ) : (
        <LoginCard onGithubLogin={handleGithubLogin} />
      )}
    </div>
  );
}

export default App;
