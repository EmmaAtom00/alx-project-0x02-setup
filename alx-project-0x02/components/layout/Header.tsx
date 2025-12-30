import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex space-x-4">
        <Link href="/home">
          <p className="hover:text-gray-300">Home</p>
        </Link>
        <Link href="/about">
          <p className="hover:text-gray-300">About</p>
        </Link>
        <Link href="/posts">
          <p className="hover:text-gray-300">Posts</p>
        </Link>
        <Link href="/users">
          <p className="hover:text-gray-300">Users</p>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
