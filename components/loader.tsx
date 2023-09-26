import Image from "next/image";

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-4 h-16 relative animate-bounce">
        <Image alt="Logo" src="/logo.png" width={16} height={32} />
      </div>
      <p className="text-sm text-muted-foreground">Genō is thinking...</p>
    </div>
  );
};
