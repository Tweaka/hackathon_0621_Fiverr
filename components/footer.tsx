import Image from "next/image";
import logo from "../public/images/fiverr-new3326.webp";
import facebook from "../public/images/facebook.svg";
import instagram from "../public/images/instagram.svg";
import pinterest from "../public/images/pinterest.svg";
import twitter from "../public/images/twitter.svg";
import linkedin from "../public/images/linkedin.svg";
import accessibility from "../public/images/accessibility.png";

export default function Footer(): JSX.Element {
  return (
    <div className="flex items-center justify-between border-b-2 text-gray-600">
      <div className="flex items-center">
        <div className="w-32">
          <Image src={logo} alt="logo Fiverr" />
        </div>
        <p className="text-sm">© Fiverr International Ltd. 2021</p>
      </div>
      <div className="flex items-center justify-around text-gray-600">
        <div className="mx-4 text-gray-600">
          <Image src={twitter} alt="icon twitter" width={32} height={32} />
        </div>
        <div className="mx-4 text-gray-600">
          <Image
            src={facebook}
            alt="icon facebook"
            width={32}
            height={32}
            className="mx-4 text-gray-600"
          />
        </div>
        <div className="mx-4 text-gray-600">
          <Image
            src={linkedin}
            alt="icon linkedin"
            width={32}
            height={32}
            className="px-4 text-gray-600"
          />
        </div>
        <div className="mx-4 text-gray-600">
          <Image
            src={pinterest}
            alt="icon pinterest"
            width={32}
            height={32}
            className="px-4 text-gray-600"
          />
        </div>
        <div className="mx-4 text-gray-600">
          <Image
            src={instagram}
            alt="icon instagram"
            width={32}
            height={32}
            className="px-4 text-gray-600"
          />
        </div>
        <p className="flex items-center text-sm px-2">English</p>
        <p className="flex items-center text-sm px-2">€EUR</p>
        <div className="mx-4 text-gray-600">
          <Image
            src={accessibility}
            alt="icon accessibility"
            width={38}
            height={38}
            className="p-2 text-gray-600"
          />
        </div>
      </div>
    </div>
  );
}
