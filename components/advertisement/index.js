import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { v4 as uuidv4 } from 'uuid';

// if (global.window !== undefined) {
//   var pbjs = window?.pbjs || []
//   var googletag = window?.googletag || []
// }

function initAdserver(adSlots) {
  var pbjs = window?.pbjs || []

  pbjs?.que?.push(function() {
    pbjs.requestBids({
      bidsBackHandler: googletag.cmd.push(function() {
        pbjs.que.push(function() {
          pbjs.setTargetingForGPTAsync()
          googletag.pubads()?.refresh(adSlots)
        })
      }),
      timeout: 1000
    })
  })
}

const Advertisement = ({ divSize, id }) => {
  const { ref, inView, entry } = useInView({ threshold: 0 })
  const adSlots = []
  console.log(id)
  useEffect(() => {
    if (inView) {
      entry.target.id = id;

      var googletag = window?.googletag || []

      googletag.cmd?.push(function() {
        googletag.pubads().enableSingleRequest()
        googletag.enableServices()
        adSlots.push(googletag.defineSlot("/19968336/header-bid-tag-1", divSize, id)?.addService(googletag.pubads()))
      })
      initAdserver(adSlots)
    }
  }, [inView, id])

  return (
    <div ref={ref} />
  )
}

export default Advertisement