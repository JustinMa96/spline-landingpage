import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo.png'

const Header = () => {
  return (
    <header className="bg-gray-100 py-4 px-8 flex justify-between items-center">
      <div>
        <Link href="/" legacyBehavior>
          <a className="text-xl font-bold">
            <Image src={logo} alt={'logo'} width={50}/>
          </a>
        </Link>
      </div>

      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" legacyBehavior>
              <a className="text-blue-500 hover:text-blue-700">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/signup" legacyBehavior>
              <a className="text-blue-500 hover:text-blue-700">Sign Up</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
