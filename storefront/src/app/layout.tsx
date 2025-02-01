import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import NextTopLoader from "nextjs-toploader"
import "styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body>
        <main className="relative">{props.children}</main>
        <NextTopLoader color="hsl(0 0% 9%)" height={5} showSpinner={false} />
      </body>
    </html>
  )
}
