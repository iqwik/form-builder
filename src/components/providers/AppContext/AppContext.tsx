import React from 'react'
import { TABS_TITLES } from '@components/views/organisms/Tabs/Tabs.constants'
import { AppContextValues } from './AppContext.types'

const emptyExampleFields = '{\n  "items": [],\n  "title": "",\n  "buttons": []\n}'
const filledExampleFields = '{\n  \"items\": [\n      { \"type\": \"number\", \"label\": \"Count\", \"placeholder\": \"choose or enter quantity...\", \"value\": 12 },\n      { \"type\": \"date\", \"label\": \"Date\", \"value\": \"2022-02-24\" },\n      { \"type\": \"text\", \"label\": \"InputText\", \"placeholder\": \"some text here...\" },\n      { \"type\": \"textarea\", \"label\": \"TextArea\", \"placeholder\": \"enter your message...\" },\n      { \"type\": \"checkbox\", \"name\": \"checkbox\", \"label\": \"Checkbox1\", \"value\": \"checkbox 1\" },\n      { \"type\": \"checkbox\", \"name\": \"checkbox\", \"label\": \"Checkbox2\", \"value\": \"checkbox 2\" },\n      { \"type\": \"radio\", \"name\": \"radio[]\", \"label\": \"Radio 1\", \"value\": \"Radio 1\" },\n      { \"type\": \"radio\", \"name\": \"radio[]\", \"label\": \"Radio 2\", \"value\": \"Radio 2\", \"checked\": 1 },\n      { \"type\": \"radio\", \"name\": \"radio[]\", \"label\": \"Radio 3\", \"value\": \"Radio 3\" }\n  ],\n  \"title\": \"Form\",\n  \"buttons\": [\n      { \"type\": \"button\", \"label\": \"Cancel\", \"variant\": \"success\" },\n      { \"type\": \"button\", \"label\": \"Save\", \"variant\": \"secondary\" }\n  ]\n}'

const defaultJsonConfig: (isEmpty?: boolean) => string = (isEmpty = false) => isEmpty ? emptyExampleFields : filledExampleFields

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
