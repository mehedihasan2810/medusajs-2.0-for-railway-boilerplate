import { Container } from "@medusajs/ui"

const SkeletonProductPreview = () => {
  return (
    <div className="animate-pulse">
      <Container className="aspect-square size-[400px] w-full bg-neutral-100 " />
      <div className="flex justify-between text-base-regular mt-2">
        <div className="w-2/5 h-6 bg-neutral-100"></div>
        <div className="w-1/5 h-6 bg-neutral-100"></div>
      </div>
    </div>
  )
}

export default SkeletonProductPreview
