import Image from 'next/image';

export const AvatarIcon = () => {
  return (
    <Image
      src="/images/Avatar.PNG"
      alt="Avatar"
      width={26}
      height={26}
      className="rounded-full"
    />
  );
};