import Image from "next/image";

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-8 h-8 relative animate-bounce rounded-full overflow-hidden">
        <Image alt="Logo" src="/avatar.png" fill />
      </div>
      <p className="text-sm text-muted-foreground">Genō is thinking...</p>
    </div>
  );
};
