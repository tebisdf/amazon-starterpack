import React from "react";
import css from "./footer.module.css";
import Logo from "../../assets/logo.png";
import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UserIcon,
  LinkIcon,
} from "@heroicons/react/outline";
export default function Footer() {
  return (
    <div className={css.cFooterWrapper}>
      <hr />
      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt="" />
          <span>amazon</span>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact US</span>
            <span className={css.pngLine}>
              <LocationMarkerIcon className={css.icon} />
              <span>111 north street elig effa yaounde </span>
            </span>
            <span className={css.pngLine}>
              <PhoneIcon className={css.icon} />
              <span>+237672724167 </span>
            </span>
            <span className={css.pngLine}>
              <InboxIcon className={css.icon} />
              <span>tebitteku@yahoo.com </span>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>
            <span className={css.pngLine}>
              <LoginIcon className={css.icon} />
              <span>Sign in </span>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span className={css.pngLine}>
              <UserIcon className={css.icon} />
              <span>About us </span>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Resources</span>
            <span className={css.pngLine}>
              <LinkIcon className={css.icon} />
              <span>Safe privacy & terms </span>
            </span>
          </div>
        </div>
      </div>
      <div className={css.copyRight}>
        <span>Copyright © 2022 by amazon, inc</span>
        <span>All rights reserved.</span>
      </div>
    </div>
  );
}
