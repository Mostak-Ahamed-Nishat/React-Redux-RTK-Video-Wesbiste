import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
export default function VideoGridItem() {
  return (
    <>
      <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
        <div className="w-full flex flex-col">
          <div className="relative">
            <Link to="/videos/1">
              <img
                src="https://i3.ytimg.com/vi/6O4s7v28nlw/maxresdefault.jpg"
                className="w-full h-auto"
                alt="Some video title"
              />
            </Link>

            <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
              12:10
            </p>
          </div>

          <div className="flex flex-row mt-2 gap-2">
            <Link href="#" className="shrink-0">
              <img
                src={Logo}
                className="rounded-full h-6 w-6"
                alt="Video App"
              />
            </Link>

            <div className="flex flex-col">
              <Link to="/videos/1">
                <p className="text-slate-900 text-sm font-semibold">
                  Video title
                </p>
              </Link>
              <Link
                className="text-gray-400 text-xs mt-2 hover:text-gray-600"
                href="#"
              >
                Video Title
              </Link>
              <p className="text-gray-400 text-xs mt-1">
                200 views . June 16, 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
