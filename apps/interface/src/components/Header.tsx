import { ConnectButton } from "./ConnectButton";

export const Header = () => {
  return (
    <header className="max-w-screen-lg mx-auto p-4">
      <nav className="flex w-full justify-between">
        <h1 className="text-4xl font-bold">inaridiy</h1>
        <ConnectButton />
      </nav>
    </header>
  );
};
