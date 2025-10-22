import auth from "../app/middleware";
import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./LogoutButton";

export async function UserInfo() {
  const session = await auth();

  const userName = session?.user?.name;

  return (
    <div>
      {session ? (
        <div>
          {session.user.name}{" "}
          <span className="text-xs text-zinc-400 mr-3">{userName}</span>
          <LogoutButton />
        </div>
      ) : (
        <div>
          <span className="mr-4">Welcome, Guest!</span>
          <LoginButton />
        </div>
      )}
    </div>
  );
}
