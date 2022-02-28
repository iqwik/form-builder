import React from 'react'
import { AppContext } from '@components/providers'
import { FieldFactory } from '@components/views/organisms'
import { ObjectValueProps, ItemProps } from './ResultPage.types'
import { ACCEPTED_FIELDS_TYPES, ACCEPTED_BUTTONS_TYPES } from '../../organisms/FieldFactory/FieldFactory.constants'

export const useResultPage = () => {
    const { jsonConfig, shouldRefresh, setShouldRefresh } = React.useContext(AppContext)
    const [json, setJson] = React.useState<ObjectValueProps>({ items: [] })

    React.useEffect(() => {
        if (shouldRefresh) {
            setJson(typeof jsonConfig === 'string' ? JSON.parse(jsonConfig) : jsonConfig)
            setShouldRefresh(false)
        }
    }, [jsonConfig, shouldRefresh])

    const { items: fieldsArray = [], title = null, buttons: buttonsArray = [] } = json

    const getItems: (items: Array<ItemProps>, acceptedTypes: object) => Array<React.ComponentType> = (items, acceptedTypes) => {
        const result: any[] = []

        if (Array.isArray(items) && items?.length) {
            items.forEach((fieldProps: ItemProps, index: number) => {
                if (fieldProps?.type && acceptedTypes?.[fieldProps?.type]) {
                    result.push(
                        <li key={`${index}-${fieldProps?.type}`}>
                            <FieldFactory {...fieldProps} />
                        </li>,
                    )
                }
            })
        }

        return result
    }

    const fields = React.useMemo(() => getItems(fieldsArray, ACCEPTED_FIELDS_TYPES), [json?.items, shouldRefresh])
    const buttons = React.useMemo(() => getItems(buttonsArray, ACCEPTED_BUTTONS_TYPES), [json?.buttons, shouldRefresh])

    const renderFields = React.useCallback((stylesFields) => <ul className={stylesFields}>{fields}</ul>, [fields])
    const renderButtons = React.useCallback((styleButtons) => <ul className={styleButtons}>{buttons}</ul>, [buttons])

    return { title, renderFields, renderButtons }
}
