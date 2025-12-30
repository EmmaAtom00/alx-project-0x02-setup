import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";
import React from "react";

interface UsersPageProps {
  users: UserProps[];
}

const users: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="p-4">
      <Header />
      <h1 className="text-2xl font-bold mb-4 p-4">Users</h1>
      <div className="flex flex-wrap gap-4">
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    return {
      props: {
        users: data,
      },
    };
  } catch (error) {
    console.error("Error fetching users:", error);
    return {
      props: {
        users: [],
      },
    };
  }
};

export default users;
