import * as React from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type AvatarGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  items: {
    image?: string;
    fallback: string;
  }[];
  max?: number;
};

export function AvatarGroup({
  items,
  max = items.length,
  className,
  ...props
}: AvatarGroupProps) {
  const itemsToShow = items.slice(0, max);
  const remainingItems = Math.max(items.length - max, 0);

  return (
    <div
      className={cn("flex -space-x-2", className)}
      {...props}
    >
      {itemsToShow.map((item, i) => (
        <Avatar
          key={i}
          className="border-2 border-white inline-block"
        >
          <AvatarImage src={item.image} alt={item.fallback} />
          <AvatarFallback>{item.fallback}</AvatarFallback>
        </Avatar>
      ))}

      {remainingItems > 0 && (
        <Avatar className="border-2 border-white inline-block bg-muted">
          <AvatarFallback>+{remainingItems}</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
