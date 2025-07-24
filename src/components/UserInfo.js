import { signOut } from "next-auth/react";

export default function UserInfo({ user }) {
  return (
    <div className="max-w-sm w-full bg-white rounded shadow p-8 flex flex-col items-center">
      <img src={user.image} alt={user.name} className="w-16 h-16 rounded-full mb-4" />
      <h2 className="text-xl font-bold mb-2">{user.name}</h2>
      <p className="mb-4">{user.email}</p>
      <button
        onClick={() => signOut()}
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        退出登录
      </button>
    </div>
  );
}