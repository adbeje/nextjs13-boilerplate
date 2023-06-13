import { LogoName } from "@/components/molecules";
import "./header.css";
import { Button } from "@/components/atoms";

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: HeaderProps) => (
  <header className="border-b-2 border-b-black">
    <div className="flex items-center justify-between px-16 py-6">
      <LogoName />
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <span className="welcome text-black">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button
              primary
              size="small"
              onClick={onCreateAccount}
              label="Sign up"
            />
          </>
        )}
      </div>
    </div>
  </header>
);
