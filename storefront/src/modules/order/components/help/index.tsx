import { Heading } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Link from "next/link"
import React from "react"

const Help = () => {
  return (
    <div className="mt-6">
      <Heading className="text-base-semi">Need help?</Heading>
      <div className="text-base-regular my-2">
        <ul className="gap-y-2 flex flex-col">
          <li>
            Contact:{" "}
            <Link
              href="mailto:info@capetune.com"
              className="text-ui-fg-interactive hover:underline"
            >
              info@capetune.com
            </Link>
          </li>
          {/* <li>
            <LocalizedClientLink href="/contact">
              Returns & Exchanges
            </LocalizedClientLink>
          </li> */}
        </ul>
      </div>
    </div>
  )
}

export default Help
