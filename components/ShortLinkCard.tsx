import Link from "next/link"
import { IResponse } from "@/lib/interfaces"
import { ActivityButton } from "."

const ShortLinkCard = ({long_url, link}: IResponse) => {
  return <div className="bg-white rounded-lg p-4 divide-y z-10 md:flex md:items-center md:divide-y-0 md:justify-between">
      <div className="text-primary-dark-violet line-clamp-1">
        {long_url}
      </div>
      <div className="mt-2 pt-2 md:mt-0 md:pt-0 md:flex md:items-center gap-4">
        <Link href={link as string} target="_blank" className="text-primary-cyan md:text-end line-clamp-1">
          {link}
        </Link>
        <ActivityButton message="Copy" type="copy" />
      </div>
  </div>
}

export default ShortLinkCard