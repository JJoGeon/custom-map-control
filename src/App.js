import React from 'react'
import styled from 'styled-components'
import baseMap from './images/baseMap.png'
import { tagData, hoverData } from './baseData/mapData'

const CustomMap = styled.div`
  width: 536px;
  height: 466px;
  position: relative;
`
const BaseMap = styled.div`
  width: 100%;
  height: 100%;
  background: url("${baseMap}") no-repeat center/contain;
`
const Cover = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
const HoverArea = styled.polygon`
  opacity: 0;
  cursor: pointer;
  fill: #ffffff;
  &:hover {
    opacity: 0.3;
  }
`
const Group = styled.g``
const MapBox = styled.rect`
  fill: #222222;
`
const MapTag = styled.text`
  font-size: 24px;
  fill: #d5d5d5;
  stroke: none;
  pointer-events: none;
  user-select: none;
`
const Line = styled.line`
  stroke: ${({ color }) => color && `${color}`};
  stroke-width: 5px;
`

const App = () => {
  const [routes, setRoutes] = React.useState([])

  const clickArea = (id) => {
    const isExist = routes.findIndex(r => r === id)
    const afterRoutes = [...routes]

    if (isExist === -1) {
      afterRoutes.push(id)
      setRoutes(afterRoutes)
    } else {
      setRoutes(afterRoutes.filter(r => r !== id))
    }
  }

  return (
    <CustomMap>
      <BaseMap/>
      <Cover viewBox='0 0 772 887'>
        {/* 선 그리기 */}
        {
          routes.map((r, index) => {
            if (index + 1 !== routes.length) {
              const firstLoc = tagData.find(tag => tag.id === r).transform
              const secondLoc = tagData.find(tag => tag.id === routes[index+1]).transform

              return <Line
                key={index}
                color={'red'}
                x1={firstLoc.x - 45} y1={firstLoc.y + 40}
                x2={secondLoc.x - 45} y2={secondLoc.y + 40}
              />
            } else {
              return null
            }
          })
        }
        {
          tagData.map(t => {
            const { id, name, transform, textAnchor, mapBox } = t
            return (
              <Group key={id} transform={`translate(${transform.x}, ${transform.y})`} textAnchor={textAnchor}>
                {
                  routes.map((r, index) => {
                    if (r === id) {
                      return (
                        <g key={r} transform={`translate(-45, 50)`} textAnchor={textAnchor}>
                          <circle fill={'red'} r={'18'} cy={'-8'}/>
                          <text fill={'#222222'} fontWeight={'bold'} fontSize={24}>{index + 1}</text>
                        </g>
                      )
                    } else {
                      return null
                    }
                  })
                }
                <MapBox x={mapBox.x} y={mapBox.y} width={mapBox.width} height={mapBox.height} rx={mapBox.rx} ry={mapBox.ry}/>
                <MapTag>{name}</MapTag>
              </Group>
            )
          })
        }
        {
          hoverData.map(d => {
            return (
              <HoverArea key={d.id} points={d.points} onClick={() => clickArea(d.id)}/>
            )
          })
        }

      </Cover>
    </CustomMap>
  )
}

export default App
