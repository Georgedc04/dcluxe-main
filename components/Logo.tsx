import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Logo = ({
  className,
  spanDesign,
}: {
  className?: string;
  spanDesign?: string;
}) => {
  return (
   <Link href={"/"} className="inline-flex items-center">
      <h2
        className={cn(
          "flex items-baseline gap-1 font-black uppercase group transition-all duration-300 ease-in-out font-poppins",
          className
        )}
      >
        <span
          className={cn(
            "text-4xl bg-gradient-to-r from-pink-500 to-shop-logo-luxehov bg-clip-text text-transparent",
            "group-hover:from-shop-logo-luxehov group-hover:to-shop-dc-pink transition-all duration-300",
            spanDesign
          )}
        >
          DC
        </span>
        <span
          className="text-2xl tracking-wider text-shop-logo-luxehov group-hover:text-shop-dc-pink transition-colors duration-300"
        >
          LUXE
        </span>
      </h2>
    </Link>
  );
};

export default Logo;
