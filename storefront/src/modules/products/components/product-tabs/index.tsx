"use client"

import { DollarSign, ShieldCheck, Truck } from "lucide-react"

import Accordion from "./accordion"
import { HttpTypes } from "@medusajs/types"

type ProductTabsProps = {
  product: HttpTypes.StoreProduct
}

const ProductTabs = ({ product }: ProductTabsProps) => {
  const tabs = [
    {
      label: "Description",
      component: <DescriptionTab product={product} />,
    },
    {
      label: "Product Information",
      component: <ProductInfoTab product={product} />,
    },
    {
      label: "Payment & Shipping",
      component: <ShippingInfoTab />,
    },
  ]

  return (
    <div className="w-full">
      <Accordion type="multiple">
        {tabs.map((tab, i) => (
          <Accordion.Item
            key={i}
            title={tab.label}
            headingSize="medium"
            value={tab.label}
          >
            {tab.component}
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  )
}

const DescriptionTab = ({ product }: ProductTabsProps) => {
  return (
    <div className="text-small-regular py-8">
      <p className="max-w-sm">{product.description}</p>
    </div>
  )
}

const ProductInfoTab = ({ product }: ProductTabsProps) => {
  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-2 gap-x-8">
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">Material</span>
            <p>{product.material ? product.material : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">Country of origin</span>
            <p>{product.origin_country ? product.origin_country : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">Type</span>
            <p>{product.type ? product.type.value : "-"}</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">Weight</span>
            <p>{product.weight ? `${product.weight} g` : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">Dimensions</span>
            <p>
              {product.length && product.width && product.height
                ? `${product.length}L x ${product.width}W x ${product.height}H`
                : "-"}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const ShippingInfoTab = () => {
  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-1 gap-y-8">
        <div className="flex items-start gap-x-2">
          <DollarSign />
          <div>
            <span className="font-semibold">Payments</span>
            <p className="max-w-sm">
              We accept payments by Debit and Credit Card via PayPal payment
              service and by TT Direct Bank Transfer for Businesses with VAT.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <ShieldCheck />
          <div>
            <span className="font-semibold">Guarantee</span>
            <p className="max-w-sm">
              All our goods come with 12 months Warranty with free repairs or
              Exchange within this period on faulty products.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Truck />
          <div>
            <span className="font-semibold">Delivery</span>
            <p className="max-w-sm">
              All goods are shipped same day for next day delivery if you order
              before 1 PM. International deliveries will take longer.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductTabs
