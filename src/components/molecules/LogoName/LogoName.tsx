import { Logo } from "@/components/atoms";

export const LogoName = () => {
  return (
    <div className="flex items-center justify-center gap-3">
      <Logo />
      <h1 className="text-2xl font-bold text-black">ACME</h1>
    </div>
  );
};
