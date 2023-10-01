import React from 'react'
import upIcon from './up.png'
import downIcon from './down.png'
import upIconActive from './upActive.png'
import downIconActive from './downActive.png'
import s from './SuperSort.module.css'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    if (sort === down) {
        return up
    } else if (sort === up) {
        return ''
    } else {
        return down
    }
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
        console.log(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIconActive
        : sort === up
            ? upIconActive
            : ''

    return (
        <div className={s.arrows}
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            {sort === up ? <img id={id + '-icon-' + sort} src={icon} alt={'sort is up'}/>
                : sort === down ? <img id={id + '-icon-' + sort} src={icon} alt={'sort is down'}/>
                    : <>
                        <img id={id + '-icon-' + sort} src={upIcon} alt={'arrow up for sort'}/>
                        <img id={id + '-icon-' + sort} src={downIcon} alt={'arrow down for sort'}/>
                    </>
            }
        </div>
    )
}

export default SuperSort
