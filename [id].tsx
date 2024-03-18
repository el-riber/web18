import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

interface UserProfileProps {
  user: {
    id: number;
    name: string;
    username: string;
    email: string;
  };
}

const UserProfile: NextPage<UserProfileProps> = ({ user }) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfile;

