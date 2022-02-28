import { useContext, useState, useMemo } from 'react'
import { AppContext } from '@components/providers'
import { isValidJSON, TABS_TITLES } from '@components/constants/utils'

export const useConfigPage = () => {
    const {
        setCurrentTab, jsonConfig, setJsonConfig, setShouldRefresh,
    } = useContext(AppContext)
    const [value, setValue] = useState(typeof jsonConfig === 'object' ? JSON.stringify(jsonConfig) : jsonConfig)

    const notValidJSON = useMemo(() => !isValidJSON(value), [value])

    const handleApply: () => void = () => {
        if (!notValidJSON) {
            setValue(value)
            setJsonConfig(value)
            setCurrentTab(TABS_TITLES.RESULT)
            setShouldRefresh(true)
        }
    }

    const onChangeValue: (e: React.SyntheticEvent<EventTarget>) => void = (e) => {
        const target = e.target as HTMLInputElement
        setValue(target.value)
    }

    return {
        value,
        onChangeValue,
        handleApply,
        notValidJSON,
    }
}
