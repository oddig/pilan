import Head from "next/head";

const globalStyle = `
body {
  --tw-bg-opacity: 1;
  background-color: rgba(243, 244, 246, var(--tw-bg-opacity));
}
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pilan</title>
        <link rel="icon" href="/favicon.ico" />
        <style>{globalStyle}</style>
      </Head>

      <h1>Pilan</h1>
      <dl
        class="mt-5 grid grid-cols-2 rounded-lg bg-white overflow-hidden shadow git status
      divide-gray-200 md:grid-cols-4 divide-x"
      >
        <div class="px-4 py-5 sm:p-6">
          <dt class="text-base font-normal text-gray-900">Siggi Palli</dt>
          <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
            <div class="flex items-baseline text-2xl font-semibold text-indigo-600 pr-5">
              39
            </div>

            <div class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
              <svg
                class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">Increased by</span>
              12%
            </div>
          </dd>
        </div>

        <div class="px-4 py-5 sm:p-6">
          <dt class="text-base font-normal text-gray-900">Balli</dt>
          <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
            <div class="flex items-baseline text-2xl font-semibold text-indigo-600 pr-5">
              3
            </div>

            <div class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
              <svg
                class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">Increased by</span>
              2%
            </div>
          </dd>
        </div>

        <div class="px-4 py-5 sm:p-6">
          <dt class="text-base font-normal text-gray-900">Einsi</dt>
          <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
            <div class="flex items-baseline text-2xl font-semibold text-indigo-600 pr-5">
              -25
            </div>

            <div class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800 md:mt-2 lg:mt-0">
              <svg
                class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">Decreased by</span>
              4%
            </div>
          </dd>
        </div>
        <div class="px-4 py-5 sm:p-6">
          <dt class="text-base font-normal text-gray-900">Øddi</dt>
          <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
            <div class="flex items-baseline text-2xl font-semibold text-indigo-600 pr-5">
              -17
            </div>

            <div class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800 md:mt-2 lg:mt-0">
              <svg
                class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">Decreased by</span>
              4%
            </div>
          </dd>
        </div>
      </dl>
    </div>
  );
}
