"use client";
import { Product } from "@/sanity.types";
import useStore from "@/store";
import { Heart } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const FavoriteButton = ({
  showProduct = false,
  product,
}: {
  showProduct?: boolean;
  product?: Product | null | undefined;
}) => {
  const { favoriteProduct, addToFavorite } = useStore();
  const [existingProduct, setExistingProduct] = useState<Product | null>(null);
  useEffect(() => {
    const availableItem = favoriteProduct.find(
      (item) => item?._id === product?._id
    );
    setExistingProduct(availableItem || null);
  }, [product, favoriteProduct]);

  const handleFavorite = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    if (product?._id) {
      addToFavorite(product).then(() => {
        toast.success(
          existingProduct
            ? "Product removed successfully!"
            : "Product added successfully!"
        );
      });
    }
  };
  return (
    <>
      {!showProduct ? (
        <Link href={"/wishlist"} className="group relative">
          <Heart className="w-5 h-5 hover:text-shop-dc-pink hoverEffect" />
          <span className="absolute -top-1 -right-1 bg-shop-dc-pink text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
            {favoriteProduct?.length ? favoriteProduct?.length : 0}
          </span>
        </Link>
      ) : (
        <button
          onClick={handleFavorite}
          className="group relative hover:text-shop-blue-light hoverEffect border border-shop-blue-light/80 hover:border-shop-blue-light p-1.5 rounded-sm"
        >
          {existingProduct ? (
            <Heart
              fill="#ec4899"
              className="text-shop-dc-pink/80 group-hover:text-shop-dc-pink hoverEffect mt-.5 w-5 h-5"
            />
          ) : (
            <Heart className="text-shop-blue-light/80 group-hover:text-shop-dc-pink hoverEffect mt-.5 w-5 h-5" />
          )}
        </button>
      )}
    </>
  );
};

export default FavoriteButton;
