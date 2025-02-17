import { getCategoriesList } from "@lib/data/categories"
import { getCollectionsList } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"
import Link from "next/link"

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <footer className="border-t border-ui-border-base w-full bg-neutral-100">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40">
          <div>
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus uppercase"
            >
              Capetune Store
            </LocalizedClientLink>
            <p className="max-w-[400px] mt-4 text-neutral-600">
              Discover the latest and greatest in electronics. From cutting-edge
              gadgets to essential accessories, we offer premium products at
              unbeatable prices. Elevate your tech experience—shop with
              confidence and enjoy fast, reliable shipping!
            </p>
          </div>
          <div className="text-sm gap-10 md:gap-x-16 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {product_categories && product_categories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="font-semibold text-base">Categories</span>
                <ul
                  className="grid grid-cols-1 gap-2"
                  data-testid="footer-categories"
                >
                  {product_categories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "hover:text-ui-fg-base",
                            children && "txt-small-plus"
                          )}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <LocalizedClientLink
                                    className="hover:text-ui-fg-base"
                                    href={`/categories/${child.handle}`}
                                    data-testid="category-link"
                                  >
                                    {child.name}
                                  </LocalizedClientLink>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="font-semibold text-base">Collections</span>
                <ul
                  className={clx(
                    "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
                    {
                      "grid-cols-2": (collections?.length || 0) > 3,
                    }
                  )}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-ui-fg-base"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-col gap-y-2">
              <span className="font-semibold text-base">Support</span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                <li>
                  <LocalizedClientLink
                    href="/clearance"
                    className="hover:text-ui-fg-base"
                  >
                    Clearance
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/information"
                    className="hover:text-ui-fg-base"
                  >
                    Information
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/about-us"
                    className="hover:text-ui-fg-base"
                  >
                    About Us
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/contact"
                    className="hover:text-ui-fg-base"
                  >
                    Contact Us
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="font-semibold text-base">Legal</span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                <li>
                  <LocalizedClientLink
                    href="/privacy-policy"
                    className="hover:text-ui-fg-base"
                  >
                  Privacy Policy
                 
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/terms-and-conditions"
                    className="hover:text-ui-fg-base"
                  >
                    Terms & Condtions
                  </LocalizedClientLink>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
          <Text className="text-sm">
            © {new Date().getFullYear()} Capetune Store. All rights reserved.
          </Text>
          <div></div>
          {/* <MedusaCTA /> */}
        </div>
      </div>
    </footer>
  )
}
