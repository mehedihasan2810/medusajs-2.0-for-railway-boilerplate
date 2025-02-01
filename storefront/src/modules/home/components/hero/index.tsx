import { Button, Heading } from "@medusajs/ui"
import { buttonVariants } from "@medusajs/ui/dist/cjs/components/button"
import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full relative bg-neutral-100 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8 h-full">
        <div className="self-center justify-center w-fit">
          <h1 className="text-6xl font-bold">CAPETUNE</h1>
          <p className="mt-6 text-lg">
            Discover the latest and greatest in electronics. From cutting-edge
            gadgets to essential accessories, we offer premium products at
            unbeatable prices. Elevate your tech experience—shop with confidence
            and enjoy fast, reliable shipping!
          </p>
          <Link href={`/gb/store`} className="mt-6 block">
            <Button size="xlarge">Shop Now</Button>
          </Link>
        </div>
        <Image
          src="/images/banner5.png"
          width={400}
          height={400}
          alt="Telephone"
          className="object-cover justify-self-end self-center"
        />
      </div>

      {/* <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            Well done! You have successfully deployed your CapeTune 2.0 store on Railway!
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal"
          >
            Need help customizing your store?
          </Heading>
        </span>
        <a
          href="https://funkyton.com/medusajs-2-0-is-finally-here/"
          target="_blank"
        >
          <h1 style={{ textDecoration: "underline" }}>
            Visit the tutorial
          </h1>
        </a>
      </div> */}
    </div>
  )
}

export default Hero
