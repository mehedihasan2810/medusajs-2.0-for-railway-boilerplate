"use client"

import { Popover, Transition } from "@headlessui/react"
import { ArrowRightMini, XMark, BarsThree } from "@medusajs/icons"
import { ChevronRight } from "lucide-react"
import { Text, clx, useToggleState } from "@medusajs/ui"
import { Fragment, useState } from "react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"
import { HttpTypes } from "@medusajs/types"

const SideMenuItems = {
  Home: "/",
  Products: "/store",
  "TELECOM Products": {
    path: "/categories/gsm-desk-phones",
    submenu: [
      { name: "4G GSM Desk Phones", path: "/categories/gsm-desk-phones" },
      { name: "Accessories", path: "/categories/telecom-accessories" },
    ],
  },
  "CCTV Products": {
    path: "/categories/cctv-products",
    submenu: [
      {
        name: "Digital Video Recorders",
        path: "/categories/digital-video-recorders",
      },
      { name: "CCTV Cameras", path: "/categories/cctv-products" },
    ],
  },
  // "CCTV Products": "/categories/cctv-products",

  Search: "/search",
  Account: "/account",
  Cart: "/cart",
}

const SideMenu = ({ regions }: { regions: HttpTypes.StoreRegion[] | null }) => {
  const toggleState = useToggleState()

  const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: boolean }>(
    () => {
      const initialState: { [key: string]: boolean } = {}
      Object.keys(SideMenuItems).forEach((key) => {
        initialState[key] = false
      })
      return initialState
    }
  )

  const toggleSubmenu = (name: string) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [name]: !prev[name],
    }))
  }

  return (
    <div className="h-full">
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          {({ open, close }) => (
            <>
              <div className="relative flex h-full">
                <Popover.Button
                  data-testid="nav-menu-button"
                  className="relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none hover:text-ui-fg-base text-base"
                >
                  <BarsThree className="mr-1" />
                  Menu
                </Popover.Button>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-150"
                enterFrom="opacity-0"
                enterTo="opacity-100 backdrop-blur-2xl"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 backdrop-blur-2xl"
                leaveTo="opacity-0"
              >
                <Popover.Panel className="flex flex-col absolute w-full pr-4 sm:pr-0 sm:w-1/3 2xl:w-1/4 sm:min-w-min h-[calc(100vh-1rem)] z-30 inset-x-0 text-sm text-ui-fg-on-color m-2 backdrop-blur-2xl">
                  <div
                    data-testid="nav-menu-popup"
                    className="flex flex-col h-full bg-neutral-700 rounded-rounded justify-between p-6"
                  >
                    <div className="flex justify-end" id="xmark">
                      <button data-testid="close-menu-button" onClick={close}>
                        <XMark />
                      </button>
                    </div>
                    <ul className="flex flex-col gap-6 items-start justify-start">
                      {Object.entries(SideMenuItems).map(([name, item]) => {
                        const hasSubmenu =
                          typeof item === "object" &&
                          item !== null &&
                          item.submenu
                        const href = hasSubmenu ? item.path : item

                        return (
                          <li key={name}>
                            {hasSubmenu ? (
                              <>
                                <button
                                  className="text-3xl leading-10 hover:text-neutral-300 flex items-end gap-2"
                                  onClick={() => toggleSubmenu(name)}
                                >
                                  <span>{name}</span>
                                  <ChevronRight
                                    className={clx(
                                      "size-8 inline-block shrink-0 transition-transform",
                                      openSubmenus[name] ? "rotate-90" : ""
                                    )}
                                  />
                                </button>
                                <Transition
                                  show={openSubmenus[name]}
                                  as={Fragment}
                                  enter="transition-all duration-300"
                                  enterFrom="max-h-0 opacity-0 overflow-hidden"
                                  enterTo="max-h-[500px] opacity-100 overflow-hidden"
                                  leave="transition-all duration-300"
                                  leaveFrom="max-h-[500px] opacity-100 overflow-hidden"
                                  leaveTo="max-h-0 opacity-0 overflow-hidden"
                                >
                                  <ul className="flex flex-col gap-2 pl-6 mt-2">
                                    {item.submenu.map((subItem) => (
                                      <li key={subItem.name}>
                                        <LocalizedClientLink
                                          href={subItem.path}
                                          className="text-2xl leading-10 hover:text-neutral-300"
                                          data-testid={`${subItem.name.toLowerCase()}-link`}
                                          onClick={close}
                                        >
                                          {subItem.name}
                                        </LocalizedClientLink>
                                      </li>
                                    ))}
                                  </ul>
                                </Transition>
                              </>
                            ) : (
                              <LocalizedClientLink
                                href={
                                  typeof href === "string" ? href : href.path
                                }
                                className="text-3xl leading-10 hover:text-neutral-300"
                                data-testid={`${name.toLowerCase()}-link`}
                                onClick={close}
                              >
                                {name}
                              </LocalizedClientLink>
                            )}
                          </li>
                        )
                      })}
                    </ul>
                    <div className="flex flex-col gap-y-6">
                      <div
                        className="flex justify-between"
                        onMouseEnter={toggleState.open}
                        onMouseLeave={toggleState.close}
                      >
                        {regions && (
                          <CountrySelect
                            toggleState={toggleState}
                            regions={regions}
                          />
                        )}
                        <ArrowRightMini
                          className={clx(
                            "transition-transform duration-150",
                            toggleState.state ? "-rotate-90" : ""
                          )}
                        />
                      </div>
                      <Text className="flex justify-between txt-compact-small">
                        © {new Date().getFullYear()} Capetune Store. All rights
                        reserved.
                      </Text>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}

export default SideMenu
