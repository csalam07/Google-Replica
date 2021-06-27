import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

function PaginationButtons() {
  const router = useRouter();

  const startIndex = Number(router.query.start) || 0;
  return (
    <div className="flex max-w-lg justify-between text-blue-500 pb-10">
      {startIndex >= 10 && (
        <Link
          href={`/search?term=${router.query.term}&start=${startIndex - 10}`}
        >
          <a className="flex flex-grow flex-col items-center group">
            <ChevronLeftIcon className="h-5 group-hover:text-blue-800" />
            <p className="group-hover:text-blue-800">Previous</p>
          </a>
        </Link>
      )}
      <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
        <a className="flex flex-grow flex-col items-center group">
          <ChevronRightIcon className="h-5 group-hover:text-blue-800" />
          <p className="group-hover:text-blue-800">Next</p>
        </a>
      </Link>
    </div>
  );
}

export default PaginationButtons;
