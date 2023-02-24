import React from "react";
import Link from "next/link";

import Container from "../../layouts/Container";
import HeadingText from "../../layouts/HeadingText";

type Props = {};

import { BsCheckAll } from "react-icons/bs";
import { GoPlay } from "react-icons/go";
import PowerPoint from "../icons/PowerPoint";

export default function Buying({}: Props) {
  return (
    <div className="relative px-4 py-24 text-white background-style md:px-8 isolate">
      <Container className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <HeadingText className="text-3xl md:text-4xl font-bold leading-[1.5] md:leading-[1.4]">
            Having the video & PowerPoint
          </HeadingText>
          <p className="text-lg">
            If you want to have the video and source file (learning it), then
            they are available in Gumroad.
          </p>
          <ul className="text-base md:text-lg">
            <li className="flex gap-2">
              <BsCheckAll className="text-xl text-green-600" />
              They are very short
            </li>
            <li className="flex items-center gap-2">
              <BsCheckAll className="text-xl text-green-600" />
              Making content for HTML, CSS & JS
            </li>
            <li className="flex items-center gap-2">
              <BsCheckAll className="text-xl text-green-600" />
              They are free
            </li>
          </ul>
          <Link
            href={"/pricing"}
            className="inline-block px-8 py-2 text-white duration-150 bg-black rounded-md shadow-button hover:opacity-90 active:scale-95"
          >
            Buy Now
          </Link>
        </div>
        <div className="relative isolate">
          <PowerPoint />
          <GoPlay className="text-9xl -rotate-12 absolute top-[0px] right-0 sm:right-[20%] lg:right-[30%] -z-10" />
        </div>
      </Container>
    </div>
  );
}