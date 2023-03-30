import { TPost } from "@/src/types"
import useMermaidEffect from "./hooks/useMermaidEffect"
import PostDetail from "./components/PostDetail"
import PageDetail from "./components/PageDetail"
import * as Cards from "../../components/cards"

const mapPageUrl = (id: string) => {
  return "https://www.notion.so/" + id.replace(/-/g, "")
}

type Props = {
  blockMap: any
  data: TPost
}

const Detail: React.FC<Props> = ({ blockMap, data }) => {
  useMermaidEffect()

  return (
    <>
      {data.type[0] === "Page" && (
        <div className="m-auto max-w-4xl">
          <PageDetail data={data} blockMap={blockMap} />
        </div>
      )}
      {data.type[0] !== "Page" && (
        <div className="block md:grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-9">
            <PostDetail data={data} blockMap={blockMap} />
          </div>
          <div className="hidden lg:block lg:col-span-3">
            <Cards.ProfileCard />
            <Cards.ContactCard />
          </div>
        </div>
      )}
    </>
  )
}

export default Detail
