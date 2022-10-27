import React from "react";

const Faq = () => {
  return (
    <div>
      <section className="pb-6 mb-6">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                Which language are you using for this project?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                Javascript. Mainly using framework or you can say library of JS
                and that is React Js
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                Why are you learnig Panabee.io?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4">
                <summary>
                  <p>Boost your skils</p>
                </summary>
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                What is the Applications of Panabee?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
                The reasons to learn Panabee are plentiful, but in
                short: Learning Panabee teaches critical thinking
                skills, communication skills, and opens the door to lucrative
                job opportunities.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
