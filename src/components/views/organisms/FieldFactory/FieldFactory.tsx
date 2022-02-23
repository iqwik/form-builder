import React from 'react'
import Button from 'react-bootstrap/Button'
import { Label } from '@components/views/atoms'
import { FIELD_TYPES, FIELD_TYPES_BY_VALUES } from './FieldFactory.constants'
import { useFieldFactory } from './FieldFactory.hooks';

export type FieldFactoryProps = {
    type: typeof FIELD_TYPES[keyof typeof FIELD_TYPES]
    label?: string
    name?: string
    value?: any
    onChange?: (e: React.SyntheticEvent) => void
    onClick?: (e: React.SyntheticEvent) => void
    [property: string]: any
}

const FieldFactory: React.FC<FieldFactoryProps> = ({ type, label, ...props }) => {
    const { innerProps } = useFieldFactory({ type, props })

    if (!FIELD_TYPES_BY_VALUES?.[type]) {        
        return <></>
    }

    if (type === FIELD_TYPES.TEXTAREA) {
        return label ? <Label {...{ label }}><textarea {...innerProps} /></Label> : <textarea {...innerProps} />
    } else if (type === FIELD_TYPES.BUTTON) {
        const onClick = (e: React.SyntheticEvent) => { console.log(e) }
        return <Button {...{ type, onClick }}{...props}>{label || 'Button'}</Button>
    }
    
    return label ? <Label {...{ label }}><input {...innerProps} /></Label> : <input {...innerProps} />
}

export default React.memo(FieldFactory)
