import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeftLong} from "@fortawesome/free-solid-svg-icons";

export default function Error404() {
return (
    <main className="mx-auto flex w-full max-w-7xl flex-auto flex-col justify-center px-6 py-24 sm:py-64 lg:px-8">
        <p className="text-base font-semibold leading-8 text-indigo-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
        <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking
            for.</p>
        <div className="mt-10">
            <a href="/" className="flex items-center text-sm font-semibold leading-7 text-indigo-600">
                <FontAwesomeIcon icon={faArrowLeftLong} className="h-3.5 mr-2" aria-hidden="true"/>Back to home
            </a>
        </div>
    </main>
)
}