import { AppContext } from '@components/providers'
import React from 'react'

const emptyValue = ''

export const useFieldFactory = ({ type, props }) => {
    const { shouldRefresh } = React.useContext(AppContext)
    const [innerValue, setInnerValue] = React.useState(emptyValue)

    React.useEffect(() => {
        if (shouldRefresh) {
            setInnerValue(props?.value || emptyValue)
        }
    }, [shouldRefresh])

    React.useEffect(() => {
        if (props?.value) {
            setInnerValue(props.value)
        } else if (!props?.value && innerValue) {
            setInnerValue(emptyValue)
        }
    }, [props?.value])

    const innerProps = {
        ...props,
        type,
        value: innerValue,
        onChange: (e: React.SyntheticEvent<EventTarget>) => { setInnerValue((e.target as HTMLInputElement | HTMLTextAreaElement).value) },
    }

    return { innerProps }
}