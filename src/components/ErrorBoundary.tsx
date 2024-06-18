import { Link } from "react-router-dom";

const ErrorBoundary = () => {
  return (
    <div className="flex h-[100dvh] flex-col items-center justify-center gap-6 px-4 md:px-6">
      <div className="space-y-4 text-center">
        <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
          Oops, something went wrong
        </h1>
        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
          We're sorry, but an unexpected error has occurred. Please try again
          later or contact support if the issue persists.
        </p>
      </div>
      <Link
        to="/"
        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default ErrorBoundary;
