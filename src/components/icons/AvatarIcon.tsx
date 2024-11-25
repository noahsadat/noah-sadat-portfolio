import Image from 'next/image';

export const AvatarIcon = () => {
  return (
    <div className="w-8 h-8 md:w-8 md:h-8 relative">
      <Image
        src="/images/Avatar.PNG"
        alt="Avatar"
        fill
        sizes="(max-width: 768px) 40px, 40px"
        className="rounded-full object-cover"
      />
    </div>
  );
};