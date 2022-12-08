import React from "react";
import css from "./Hero.module.css";
import HeroImg from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
export default function Hero() {
  const transition = { duration: 3, type: "spring" };
  return (
    <div>
      <div className={css.container}>
        {/* LEFT SIDE */}
        <div className={css.h_sides}>
          <div className={css.text1}>skin protection cream</div>
          <div className={css.text2}>
            <span>Trendi collections</span>
            <span>
              sfsafdsf sd fsd f sd fs sdsdf sdfsdfsd sdfsdfsdfsdfsdfsdf sdf
              sdfsd sdfsdfsd sdfdfsdfsd fsdfs fsdfsdfsdf sdfss dfs
            </span>
          </div>
        </div>
        {/* MIDDLE SIDE HERO IMAGE */}
        <div className={css.wrapper}>
          <motion.div
            initial={{ bottom: "2rem" }}
            whileInView={{ bottom: "0rem" }}
            transition={transition}
            className={css.blueCircle}
          ></motion.div>
          <motion.img
            initial={{ bottom: "-2rem" }}
            whileInView={{ bottom: "0rem" }}
            transition={transition}
            src={HeroImg}
            alt=""
            width={600}
          />
          <motion.div
            transition={transition}
            initial={{ right: "4%" }}
            whileInView={{ right: "2%" }}
            className={css.cart2}
          >
            <RiShoppingBagFill />
            <div className={css.signup}>
              <span>Best signup Offers</span>
              <div>
                <BsArrowRight />
              </div>
            </div>
          </motion.div>
        </div>
        {/* RIGHT SIDE  */}
        <div className={css.h_sides}>
          <div className={css.traffic}>
            <span>1.5m</span>
            <span>Monthly Traffic</span>
          </div>
          <div className={css.customers}>
            <span>100k</span>
            <span>Happy Customers</span>
          </div>
        </div>
      </div>
    </div>
  );
}
