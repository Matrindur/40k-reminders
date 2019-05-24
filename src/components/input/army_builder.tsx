import React, { Fragment, useState, useEffect } from 'react'
import _ from 'lodash'
import './army_builder.css'
import { IUnits, IWarlordTraits, IRelics, IDetachments, ISubfactions } from 'types/army'

type TFocusType = 'unit' | 'warlordtrait' | 'relic' | 'detachment' | 'subfaction' 
type TUpdateState = (val: string, idx: number, type: TFocusType) => any

interface IArmyBuilderProps {
  army: {
    Relics: IRelics
    Detachments: IDetachments
    Units: IUnits
    WarlordTraits: IWarlordTraits
    Subfactions: ISubfactions
  }
  setSelections: (x: { units: string[]; warlordtraits: string[]; subfactions: string[]; relics: string[]; detachments: string[] }) => any
}

export const ArmyBuilder = (props: IArmyBuilderProps) => {
  const { army, setSelections } = props
  const [units, setUnits] = useState([] as string[])
  const [detachments, setDetachments] = useState([] as string[])
  const [relics, setRelics] = useState([] as string[])
  const [warlordtraits, setWarlordTraits] = useState([] as string[])
  const [subfactions, setSubfactions] = useState([] as string[])

  const updateState: TUpdateState = (val, idx, type) => {
    const focus = {
      unit: {
        fn: setUnits,
        state: units,
      },
      warlordtrait: {
        fn: setWarlordTraits,
        state: warlordtraits,
      },
      subfaction: {
        fn: setSubfactions,
        state: subfactions,
      },
      relic: {
        fn: setRelics,
        state: relics,
      },
      detachment: {
        fn: setDetachments,
        state: detachments,
      },
    }[type]

    let newState = [...focus.state]
    if (val) {
      newState[idx] = val
    } else {
      if (idx === 0 && newState.length < 2) {
        newState = []
      } else {
        newState.splice(idx, 1)
      }
    }
    focus.fn(newState)
  }

  useEffect(() => {
    setSelections({ units, detachments, relics, warlordtraits, subfactions })
  }, [units, detachments, relics, warlordtraits, subfactions, setSelections])

  return (
    <div className="row d-print-none">
      <div className="card-group mx-auto">
        <Card items={army.Units} entries={units} type={'unit'} updateState={updateState} />
        <Card items={army.Subfactions} entries={subfactions} type={'subfaction'} updateState={updateState} />
        <Card items={army.WarlordTraits} entries={warlordtraits} type={'warlordtrait'} updateState={updateState} />
        <Card items={army.Relics} entries={relics} type={'relic'} updateState={updateState} />
      </div>
    </div>
  )
}

//		<Card items={army.Detachments} entries={detachments} type={'detachment'} updateState={updateState} />

interface ICardProps {
  entries: string[]
  type: TFocusType
  items: IUnits | IDetachments | IRelics | IWarlordTraits | ISubfactions
  updateState: TUpdateState
}

const Card = (props: ICardProps) => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mx-auto">
      <div className="card">
        <div className="card-body">
          <h4 className="text-center">Add {_.capitalize(props.type)}s</h4>
          {_.range(0, props.entries.length + 1).map(idx => {
            return (
              <Row
                items={props.items}
                handleChange={props.updateState}
                idx={idx}
                val={props.entries[idx] || ''}
                type={props.type}
                key={`row-${props.type}-${idx}`}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

const Row = (props: ISelectProps) => {
  return (
    <div className="row SelectArmy-Row">
      <div className="col-10">
        <Select {...props} />
      </div>
      <div className="col-2">
        <button
          className="btn btn-danger"
          onClick={e => {
            e.preventDefault()
            props.handleChange('', props.idx, props.type)
          }}
          disabled={!props.val}
          hidden={!props.val}
        >
          X
        </button>
      </div>
    </div>
  )
}

interface ISelectProps {
  items: IUnits
  handleChange: TUpdateState
  idx: number
  val: string
  type: TFocusType
}

const Select = (props: ISelectProps) => {
  return (
    <Fragment>
      <select
        value={props.val}
        className="custom-select"
        onChange={e => props.handleChange(e.target.value, props.idx, props.type)}
      >
        {props.val ? (
          <option value={props.val} key={`${props.idx}-${props.type}`}>
            {props.val}
          </option>
        ) : (
          <option value={''} key={`none-${props.type}`}>{`-- Select ${props.type} --`}</option>
        )}
        {Object.keys(props.items).map((k, i) => {
          if (props.val === k) return null // Prevent showing duplicate
          return (
            <option value={props.items[k].name} key={i}>
              {props.items[k].name}
            </option>
          )
        })}
      </select>
    </Fragment>
  )
}
