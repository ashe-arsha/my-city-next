import { UserCircle2 } from "lucide-react";
import Image from "next/image";
import logoImg from "../../assets/images/1.png";
import Link from "next/link";


function Header() {
  return (
    <header className="app-header">
      <div className="container header-inner header-inner--no-search">
        <div className="brand">
          <div className="brand-icon brand-icon--image">
            <Image
              src={logoImg}
              alt="لوگوی سنندج من"
              width={38}
              height={38}
              className="brand-icon-image"
              priority
            />
          </div>
          <div>
            <p className="brand-subtitle">پرتال خدمات شهری</p>
            <h1 className="brand-title">سنندج من</h1>
          </div>
        </div>

        <div className="header-actions">
<Link href="/sanandaj-man" className="profile-btn btn btn-white">
  <UserCircle2 size={16} />
  ورود به سنندج من
</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;