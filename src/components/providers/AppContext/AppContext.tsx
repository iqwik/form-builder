import React from 'react'
import { emptyExampleFields, filledExampleFields, TABS_TITLES } from '@components/constants/utils'
import { Confetti } from '@components/views/atoms'
import { AppContextValues } from './AppContext.types'

const defaultJsonConfig: (isEmpty?: boolean) => string = (isEmpty = false) => (isEmpty ? emptyExampleFields : filledExampleFields)

const defaultAppContextValues = {
    currentTab: '',
    setCurrentTab: () => {},
    jsonConfig: defaultJsonConfig(),
    setJsonConfig: () => {},
    shouldRefresh: false,
    setShouldRefresh: () => {},
    visibleConfetti: false,
    setVisibleConfetti: () => {},
}

export const AppContext = React.createContext<AppContextValues>(defaultAppContextValues)

const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentTab, setCurrentTab] = React.useState<AppContextValues['currentTab']>(TABS_TITLES.CONFIG)
    const [jsonConfig, setJsonConfig] = React.useState<AppContextValues['jsonConfig']>(defaultAppContextValues.jsonConfig)
    const [shouldRefresh, setShouldRefresh] = React.useState<AppContextValues['shouldRefresh']>(defaultAppContextValues.shouldRefresh)
    const [visibleConfetti, setVisibleConfetti] = React.useState(false)

    React.useEffect(() => {
        setVisibleConfetti(currentTab === TABS_TITLES.RESULT)
    }, [currentTab])

    return (
        <AppContext.Provider value={{
            currentTab,
            setCurrentTab,
            jsonConfig,
            setJsonConfig,
            shouldRefresh,
            setShouldRefresh,
            visibleConfetti,
            setVisibleConfetti,
        }}
        >
            <>
                {children}
                <Confetti visible={visibleConfetti} />
            </>
        </AppContext.Provider>
    )
}

export default AppContextProvider
