export type AppContextValues = {
    currentTab: string
    setCurrentTab: (value: any) => void
    jsonConfig: string | object
    setJsonConfig: (value: string | object) => void
    shouldRefresh: boolean,
    setShouldRefresh: (flag: boolean) => void,
}
