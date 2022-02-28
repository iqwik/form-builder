import React from 'react'
import { TABS_TITLES } from '@components/views/organisms/Tabs/Tabs.constants'
import { emptyExampleFields, filledExampleFields } from '@components/constants/utils'
import { AppContextValues } from './AppContext.types'

const defaultJsonConfig: (isEmpty?: boolean) => string = (isEmpty = false) => (isEmpty ? emptyExampleFields : filledExampleFields)

const defaultAppContextValues = {
    currentTab: '',
    setCurrentTab: () => {},
    jsonConfig: defaultJsonConfig(),
    setJsonConfig: () => {},
    shouldRefresh: false,
    setShouldRefresh: () => {},
}

export const AppContext = React.createContext<AppContextValues>(defaultAppContextValues)

const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentTab, setCurrentTab] = React.useState<AppContextValues['currentTab']>(TABS_TITLES.CONFIG)
    const [jsonConfig, setJsonConfig] = React.useState<AppContextValues['jsonConfig']>(defaultAppContextValues.jsonConfig)
    const [shouldRefresh, setShouldRefresh] = React.useState<AppContextValues['shouldRefresh']>(defaultAppContextValues.shouldRefresh)

    return (
        <AppContext.Provider value={{
            currentTab,
            setCurrentTab,
            jsonConfig,
            setJsonConfig,
            shouldRefresh,
            setShouldRefresh,
        }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
