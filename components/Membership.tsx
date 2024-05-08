"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import MembershipSlice from "./MembershipSlice";

const Membership = () => {
  return (
    <section
      className="
      relative bg-membership 
      bg-cover bg-center py-8 before:absolute before:top-0 before:z-10 before:h-full before:w-full before:bg-black/50 lg:h-[105vh] xl:py-0"
      id="prices"
    >
      <div className="container relative z-20 mx-auto flex h-full flex-col px-0 text-white xl:pt-24">
        <h2 className="h2 mb-8 text-center text-white">Membership</h2>
        <div>
          <MembershipSlice />
        </div>
      </div>
    </section>
  );
};
export default Membership;
