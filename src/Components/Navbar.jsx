import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '#Home', current: false },
  { name: 'About', href: '#about', current: false },
  { name: 'Services', href: '#ServicesPart', current: false },
  { name: 'Contact', href: '#FooterPart', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="pt-2">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* 🔹 Logo and Company Name - LEFT side */}
              <div className="flex items-center">
                <img
                  className="h-8 w-auto"
                  src="./Logo.png"
                  alt="SynapTek Logo"
                />
                <span className="ml-4 text-2xl font-bold text-white whitespace-nowrap">
                  SynapTek InfoTech
                </span>
              </div>

              {/* 🔹 Mobile Menu Button - RIGHT side */}
              <div className="flex sm:hidden ml-auto">
                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>

              {/* 🔹 Desktop Navigation */}
              <div className="hidden sm:flex sm:items-center sm:space-x-4 ml-auto">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-white text-black'
                        : 'text-white hover:bg-white hover:text-black',
                      'px-5 py-2 rounded-[30px] font-medium transition-all duration-500 ease-in-out'
                    )}
                    style={{ fontSize: '18px' }}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* 🔹 Mobile Navigation with Sequential Animation */}
          <DisclosurePanel className="sm:hidden">
            <div className="flex flex-col items-center justify-center gap-3 px-2 pt-4 pb-6 bg-[#2563EB] rounded-[10px] mx-4 navbarmain">
              {navigation.map((item, index) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={`block px-6 py-2 text-white font-medium transition-all duration-500 ease-in-out transform opacity-0 translate-y-2 animate-slideIn`}
                  style={{
                    fontSize: '18px',
                    animationDelay: `${index * 0.15}s`,
                    animationFillMode: 'forwards',
                  }}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
