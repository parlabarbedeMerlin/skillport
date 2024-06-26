import { ChevronDownIcon, ChevronUpIcon, XMarkIcon } from "@heroicons/react/24/solid"
import { useEffect, useState } from "react"

const HeaderForm = ({ folioConfig, setFolioConfig, id, update, deleteIndex, upIndex, downIndex }) => {
  const [header, setHeader] = useState(folioConfig[id].options)

  useEffect(() => {
    setFolioConfig((prev) => {
      prev[id].options = header


      return prev
    })
  }, [header, id, setFolioConfig])

  return (
    <div className="font-semibold flex justify-center items-center btn-primary w-11/12 bg-gradient-to-br from-primary to-[#df9884cc] rounded-3xl bg-opacity-15">
      <div className="w-full h-full bg-noise bg-fixed rounded-3xl flex flex-row justify-center items-center">
        <div className="flex flex-col w-3/4 p-8 gap-8 justify-center items-center">
          <div className="w-full flex">
            <h4 className="w-full font-bold text-xl text-quinary">Header</h4>
            <button
              onClick={() => upIndex(id)}
            >
              <ChevronUpIcon className="fill-quinary h-7 w-h-7" />
            </button>
            <button
              onClick={() => downIndex(id)}
            >
              <ChevronDownIcon className="fill-quinary h-7 w-h-7" />
            </button>
            <button
              onClick={() => {
                deleteIndex(id)
                update()
              }}
            >
              <XMarkIcon className="fill-quinary h-7 w-h-7" />
            </button>
          </div>
          <div className="flex w-full flex-col gap-2 text-tertiary">
            <label className="text-lg" htmlFor="imageUrl">Image URL</label>
            <input
              type="text"
              id="imageUrl"
              value={header.imageUrl}
              onChange={(e) => setHeader({ ...header, imageUrl: e.target.value })}
              onBlur={update}
              placeholder="Image URL"
              className="w-full bg-[#df9884] placeholder:text-quinary placeholder:font-light placeholder:italic p-2 px-3 rounded-xl outline-none border-tertiary border-2 autofill:bg-[#df9884]" autoComplete="off"
            />
          </div>
          <div className="flex w-full flex-col gap-2 text-tertiary">
            <label className="text-lg" htmlFor="text">Title</label>
            <input
              type="text"
              id="text"
              value={header.text}
              placeholder="Header Text"
              onChange={(e) => setHeader({ ...header, text: e.target.value })}
              onBlur={update}
              className="uppercase w-full bg-[#df9884] placeholder:text-quinary placeholder:font-light placeholder:capitalize placeholder:italic p-2 px-3 rounded-xl outline-none border-tertiary border-2"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderForm