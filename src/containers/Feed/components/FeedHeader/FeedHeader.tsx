import { TCategories } from "@/src/types"
import React from "react"
import CategorySelect from "./CategorySelect"
import OrderButtons from "./OrderButtons"

type Props = {
  categories: TCategories
}

const FeedHeader: React.FC<Props> = ({ categories }) => {
  return (
    <div className="flex border-b border-gray-300 mb-4 justify-between md:justify-end items-center ">
      <div className="block md:hidden">
        <CategorySelect data={categories} />
      </div>
      <OrderButtons />
    </div>
  )
}

export default FeedHeader
