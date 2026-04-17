import Image from "next/image";

type HeaderProps = {
  name?: string;
  avatarUrl?: string;
};

export default function Header({
  name = "Yeo",
  avatarUrl = "/images/avatar.jpg",
}: HeaderProps) {
  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-100">
      <h1 className="text-lg font-medium">
        Hi,<span className="mx-2">{name}</span>!
      </h1>

      <Image
        src={avatarUrl}
        alt="profile"
        width={40}
        height={40}
        className="rounded-full object-cover"
      />
    </header>
  );
}