import Image from "next/image";

interface ShipImageProps {
  imageUrl?: string | null;
  altText?: string | null;
  className?: string;
}

export default function ShipImage({ imageUrl, altText, className = "" }: ShipImageProps) {
  return (
    <div className="relative w-full h-full">
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={altText || "Ship image"}
          fill
          className={`object-cover ${className}`}
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <span className="text-gray-400">No image available</span>
        </div>
      )}
    </div>
  );
} 