import { currentUser } from "@clerk/nextjs/server";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { SignIn, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "./ui/button";

export default async function UserInformation() {
  const user = await currentUser();
  const firstName = user?.firstName;
  const lastName = user?.lastName;

  return (
    <div className="flex flex-col justify-center items-center bg-white mr-6 rounded-lg py-4 border">
      <Avatar>
        {user?.id ? (
          <AvatarImage src={user?.imageUrl} />
        ) : (
          <AvatarImage src="https://github.com/shadcn.png" />
        )}

        <AvatarFallback>
          {user?.firstName?.charAt(0)}
          {user?.lastName?.charAt(0)}
        </AvatarFallback>
      </Avatar>

      <SignedIn>
        <div className="text-center">
          <p className="font-semibold">
            {firstName} {lastName}
          </p>
          <p>
            @{firstName}
            {lastName}-{user?.id.slice(-4)}
          </p>
        </div>
      </SignedIn>

      <SignedOut>
        <div className="text-center space-y-2">
          <p>You are not signed in</p>
          <Button asChild className="bg-[#0B63C4] text-white">
            <SignInButton>Sign In</SignInButton>
          </Button>
        </div>
      </SignedOut>

      <hr className="w-full my-5 border-gray-200" />

      <div className="flex justify-between w-full px-4 text-sm">
        <p className="text-gray-400 font-semibold">Posts</p>
        <p className="text-blue-400">0</p>
      </div>
      <div className="flex justify-between w-full px-4 text-sm">
        <p className="text-gray-400 font-semibold">Comments</p>
        <p className="text-blue-400">0</p>
      </div>
    </div>
  );
}
