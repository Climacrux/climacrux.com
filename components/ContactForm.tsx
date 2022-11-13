import Link from "next/link";
import { TallyForm } from "./TallyForm";

const ContactForm = () => {
  return (
    <div className="relative bg-white">
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="mx-auto max-w-lg lg:max-w-none">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Get in touch
            </h2>
            <p className="prose text-slate-400 prose-a:font-semibold prose-a:no-underline prose-a:shadow-[inset_0_-2px_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size,4px)+2px))_0_0_var(--tw-prose-underline,theme(colors.sky.300))] hover:prose-a:[--tw-prose-underline-size:6px]">
              If you want to reach out to us please use the form below or email
              us at{" "}
              <Link
                className="font-semibold no-underline"
                href="mailto:hello@climacrux.com"
              >
                hello@climacrux.com{" "}
              </Link>{" "}
              .
            </p>
            <TallyForm
              className="mt-8"
              title="Contact Form"
              tallySrc="https://tally.so/embed/3jePKE?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              height="350px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
