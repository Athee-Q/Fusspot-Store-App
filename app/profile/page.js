import Profile from "@/components/Profile/Profile";
import UserTabs from "@/components/Profile/UserTabs";

const ProfilePage = () => {
  return (
    <main className="w-full min-h-screen ">
      <Profile />
      <div className="bg-white sm:max-w-6xl h-screen grid mx-auto">
        <UserTabs />
      </div>
    </main>
  );
};

export default ProfilePage;
