import { Avatar, AvatarImage } from "@/components/ui/avatar";

const BotAvatar = () => {
  return (
    <Avatar className="w-8 h-8">
      <AvatarImage src="/avatar.png" />
    </Avatar>
  );
};

export default BotAvatar;
