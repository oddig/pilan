import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex justify-center max-w-7xl mx-auto sm:px-6 lg:px-8">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
