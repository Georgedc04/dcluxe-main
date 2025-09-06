import React from "react";
import { Title } from "./ui/text";
import Link from "next/link";
import Image from "next/image";
import { banner_1 } from "@/images";

const HomeBanner = () => {
  return (
    <div className="py-16 md:py-0 bg-shop_light_pink rounded-lg px-10 lg:px-24 flex items-center justify-between">
      <div className="space-y-5">
        <Title>
          Grab Upto 50% off on <br />
          Selected headphone
        </Title>
        <Link
          href={"/shop"}
          className="
        group inline-flex items-center justify-center gap-2
        bg-gradient-to-r from-shop-logo-luxehov to-pink-500
        text-white px-6 py-2.5 rounded-2xl font-semibold
        shadow-md shadow-shop-logo-luxehov/40
        transition-all duration-200 ease-in-out
        hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r  hover:from-shop-dc-pink hover:to-shop-logo-luxe
    "
        >
          Buy Now
        </Link>
      </div>
      <div>
        <Image
          src={banner_1}
          alt="banner_1"
          className="hidden md:inline-flex w-96"
        />
      </div>
    </div>
  );
};

export default HomeBanner;
