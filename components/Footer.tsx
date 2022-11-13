import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import ClimacruxLogo from "../images/climacrux_logo_gray.svg";
import { TallyForm } from "./TallyForm";

const navigation = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
  ],
  support: [
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
    { name: "API Status", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ],
  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
  social: [
    {
      name: "Twitter",
      href: "https://twitter.com/climacrux",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/Climacrux",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/climacrux/",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 30 30" {...props}>
          <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z" />
        </svg>
      ),
    },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-white border-t" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
          <div>
            <a target="_blank" href="https://climacrux.com/">
              <ClimacruxLogo className="max-h-12" />
            </a>
            <p className="text-base text-gray-400 md:order-1">
              Climacrux is a company aiming to help fight the climate crisis by
              making carbon removal more accessible.
            </p>
          </div>
          <div>
            <h3 className="text-base font-medium text-gray-900 uppercase">
              Imprint
            </h3>
            <p className="text-base text-gray-400">
              Climacrux GmbH
              <br />
              St.Niklausenstrasse
              <br />
              6047 Kastanienbaum
              <br />
              Switzerland
              <br />
              <a
                className="text-base text-gray-500 hover:text-gray-900"
                href="mailto:hello@climacrux.com"
              >
                hello@climacrux.com
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-base font-medium text-gray-900 uppercase">
              Legal
            </h3>
            <ul>
              <li>
                <Link
                  className="text-base text-gray-500 hover:text-gray-900"
                  href="/terms-and-conditions"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  className="text-base text-gray-500 hover:text-gray-900"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 lg:flex lg:flex-col lg:items-center lg:justify-between xl:mt-0">
          <h3 className="text-base font-medium text-slate-900 uppercase">
            Connect with us
          </h3>
          <TallyForm
            className="mt-4"
            title="Newsletter Form"
            tallySrc="https://tally.so/embed/wArvNz?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          />
          <p className="prose text-slate-400 prose-a:font-semibold prose-a:no-underline prose-a:shadow-[inset_0_-2px_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size,4px)+2px))_0_0_var(--tw-prose-underline,theme(colors.sky.300))] hover:prose-a:[--tw-prose-underline-size:6px]">
            By signing up you agree to the processing of your data as specified
            in our{" "}
            <Link className="font-semibold no-underline" href="/privacy-policy">
              Privacy Policy{" "}
            </Link>{" "}
            including - but not limited to - receiving the Climacrux LLC
            newsletter.
          </p>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base text-gray-500 hover:text-gray-900"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-base text-gray-400 md:order-1 md:mt-0">
            &copy; 2022 Climacrux, Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
